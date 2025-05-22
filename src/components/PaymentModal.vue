<template>
  <q-dialog :model-value="show" @update:model-value="$emit('update:show', $event)" persistent>
    <q-card style="min-width: 500px">
      <q-card-section>
        <div class="text-h6">{{ editingPayment ? 'Редактировать платеж' : 'Добавить платеж' }}</div>
      </q-card-section>

      <q-card-section>
        <div class="row q-col-gutter-md">
          <div class="col-12 col-md-6">
            <q-select
              v-model="form.buildingId"
              :options="buildings"
              label="Здание"
              @update:model-value="handleBuildingChange"
            />
          </div>
          <div class="col-12 col-md-6">
            <q-select
              v-model="form.apartmentId"
              :options="filteredApartments"
              label="Квартира"
              @update:model-value="handleApartmentChange"
            />
          </div>
          <div class="col-12 col-md-6">
            <q-select
              v-model="form.residentId"
              :options="filteredResidents"
              label="Жилец"
            />
          </div>
          <div class="col-12 col-md-6">
            <q-select
              v-model="form.invoiceId"
              :options="filteredInvoices"
              label="Счет"
            />
          </div>
          <div class="col-12 col-md-6">
            <q-input
              v-model.number="form.amount"
              type="number"
              label="Сумма"
              prefix="₽"
            />
          </div>
          <div class="col-12 col-md-6">
            <q-input
              v-model="form.date"
              type="date"
              label="Дата"
            />
          </div>
          <div class="col-12 col-md-6">
            <q-select
              v-model="form.type"
              :options="paymentTypes"
              label="Тип платежа"
            />
          </div>
          <div class="col-12">
            <q-input
              v-model="form.description"
              type="textarea"
              label="Описание"
            />
          </div>
        </div>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="Отмена" color="primary" v-close-popup />
        <q-btn label="Сохранить" color="primary" @click="savePayment" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { useBuildingsStore } from '../stores/buildings'
import { useApartmentsStore } from '../stores/apartments'
import { useResidentsStore } from '../stores/residents'
import { useInvoicesStore } from '../stores/invoices'
import { usePaymentsStore } from '../stores/payments'
import { date } from 'quasar'

const props = defineProps({
  show: Boolean,
  editingPayment: Object
})

const emit = defineEmits(['update:show', 'saved'])

const buildingsStore = useBuildingsStore()
const apartmentsStore = useApartmentsStore()
const residentsStore = useResidentsStore()
const invoicesStore = useInvoicesStore()
const paymentsStore = usePaymentsStore()

// Состояния
const loading = ref(false)
const form = ref({
  buildingId: '',
  apartmentId: '',
  residentId: '',
  amount: 0,
  type: 'utility',
  status: 'pending',
  date: new Date().toISOString()
})

// Опции
const paymentTypes = [
  { label: 'Коммунальные услуги', value: 'utility' },
  { label: 'Ремонт', value: 'repair' },
  { label: 'Другое', value: 'other' }
]

const statusOptions = [
  { label: 'Ожидает оплаты', value: 'pending' },
  { label: 'Оплачен', value: 'paid' },
  { label: 'Отменен', value: 'cancelled' }
]

// Вычисляемые свойства
const buildings = computed(() => buildingsStore.buildings.map(building => ({
  label: building.name,
  value: building.id
})))

const filteredApartments = computed(() => {
  if (!form.value.buildingId) return []
  return apartmentsStore.apartments
    .filter(apartment => apartment.buildingId === form.value.buildingId)
    .map(apartment => ({
      label: `Квартира ${apartment.number}`,
      value: apartment.id
    }))
})

const filteredResidents = computed(() => {
  if (!form.value.apartmentId) return []
  return residentsStore.residents
    .filter(resident => resident.apartmentId === form.value.apartmentId)
    .map(resident => ({
      label: `${resident.lastName} ${resident.firstName}`,
      value: resident.id
    }))
})

const filteredInvoices = computed(() => {
  if (!form.value.apartmentId) return []
  return invoicesStore.invoices
    .filter(inv => inv.apartmentId === form.value.apartmentId && inv.status === 'pending')
    .map(inv => ({
      label: `${inv.period.month}/${inv.period.year} - ${inv.total} ₽`,
      value: inv.id
    }))
})

// Методы
const handleBuildingChange = async (buildingId) => {
  form.value.buildingId = buildingId
  form.value.apartmentId = null
  form.value.residentId = null
  
  try {
    loading.value = true
    await apartmentsStore.fetchApartments({ buildingId })
  } catch (error) {
    console.error('Ошибка при загрузке квартир:', error)
  } finally {
    loading.value = false
  }
}

const handleApartmentChange = async (apartmentId) => {
  form.value.apartmentId = apartmentId
  form.value.residentId = null
  
  try {
    loading.value = true
    await residentsStore.fetchResidents({ apartmentId })
  } catch (error) {
    console.error('Ошибка при загрузке жильцов:', error)
  } finally {
    loading.value = false
  }
}

const handleResidentChange = (residentId) => {
  form.value.residentId = residentId
}

const savePayment = async () => {
  try {
    loading.value = true
    console.log('Сохранение платежа:', form.value)
    
    if (props.editingPayment) {
      await paymentsStore.updatePayment(props.editingPayment.id, form.value)
      console.log('Платеж обновлен')
    } else {
      await paymentsStore.addPayment(form.value)
      console.log('Платеж добавлен')
    }
    
    emit('saved')
    emit('update:show', false)
  } catch (error) {
    console.error('Ошибка при сохранении платежа:', error)
  } finally {
    loading.value = false
  }
}

// Инициализация
onMounted(async () => {
  try {
    loading.value = true
    if (!buildingsStore.buildings.length) {
      await buildingsStore.fetchBuildings()
    }
    
    // Если есть редактируемый платеж, загружаем связанные данные
    if (props.editingPayment) {
      form.value = { ...props.editingPayment }
      if (props.editingPayment.buildingId) {
        await apartmentsStore.fetchApartments({ buildingId: props.editingPayment.buildingId })
      }
      if (props.editingPayment.apartmentId) {
        await residentsStore.fetchResidents({ apartmentId: props.editingPayment.apartmentId })
      }
    }
  } catch (error) {
    console.error('Ошибка при инициализации:', error)
  } finally {
    loading.value = false
  }
})

// Наблюдатель за изменением editingPayment
watch(() => props.editingPayment, (newPayment) => {
  if (newPayment) {
    form.value = { ...newPayment }
  } else {
    form.value = {
      buildingId: '',
      apartmentId: '',
      residentId: '',
      amount: 0,
      type: 'utility',
      status: 'pending',
      date: new Date().toISOString()
    }
  }
}, { immediate: true })
</script> 