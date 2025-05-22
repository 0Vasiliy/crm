<template>
  <q-dialog
    :model-value="show"
    @update:model-value="$emit('update:show', $event)"
    persistent
  >
    <q-card style="min-width: 500px">
      <q-card-section>
        <div class="text-h6">{{ editingInvoice ? 'Редактировать счет' : 'Новый счет' }}</div>
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
              v-model="form.period.month"
              :options="months"
              label="Месяц"
            />
          </div>
          <div class="col-12 col-md-6">
            <q-input
              v-model.number="form.period.year"
              type="number"
              label="Год"
            />
          </div>
          <div class="col-12">
            <div class="text-subtitle2 q-mb-sm">Услуги</div>
            <div v-for="(service, index) in services" :key="service.id" class="row q-col-gutter-md q-mb-md">
              <div class="col-12 col-md-6">
                <q-input
                  v-model.number="form.services[service.id].amount"
                  type="number"
                  :label="service.name"
                  prefix="₽"
                  @update:model-value="handleServiceChange(service.id, 'amount', $event)"
                />
              </div>
              <div class="col-12 col-md-6">
                <q-input
                  v-model="form.services[service.id].quantity"
                  type="number"
                  :label="`Количество (${service.unit})`"
                  @update:model-value="handleServiceChange(service.id, 'quantity', $event)"
                />
              </div>
            </div>
          </div>
          <div class="col-12">
            <q-input
              v-model.number="form.total"
              type="number"
              label="Итоговая сумма"
              prefix="₽"
              readonly
            />
          </div>
          <div class="col-12 col-md-6">
            <q-select
              v-model="form.status"
              :options="statusOptions"
              label="Статус"
            />
          </div>
        </div>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="Отмена" color="primary" v-close-popup />
        <q-btn label="Сохранить" color="primary" @click="saveInvoice" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { useBuildingsStore } from '../stores/buildings'
import { useApartmentsStore } from '../stores/apartments'
import { useResidentsStore } from '../stores/residents'
import { useUtilitiesStore } from '../stores/utilities'
import { useInvoicesStore } from '../stores/invoices'
import { useServicesStore } from '../stores/services'

const props = defineProps({
  show: Boolean,
  editingInvoice: Object,
  invoiceForm: Object
})

const emit = defineEmits(['update:show', 'saved'])

const buildingsStore = useBuildingsStore()
const apartmentsStore = useApartmentsStore()
const residentsStore = useResidentsStore()
const utilitiesStore = useUtilitiesStore()
const invoicesStore = useInvoicesStore()
const servicesStore = useServicesStore()

// Состояния
const loading = ref(false)
const form = ref({
  buildingId: '',
  apartmentId: '',
  residentId: '',
  period: {
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear()
  },
  services: {},
  total: 0,
  status: 'pending',
  date: new Date().toISOString()
})

// Опции
const months = [
  { label: 'Январь', value: 1 },
  { label: 'Февраль', value: 2 },
  { label: 'Март', value: 3 },
  { label: 'Апрель', value: 4 },
  { label: 'Май', value: 5 },
  { label: 'Июнь', value: 6 },
  { label: 'Июль', value: 7 },
  { label: 'Август', value: 8 },
  { label: 'Сентябрь', value: 9 },
  { label: 'Октябрь', value: 10 },
  { label: 'Ноябрь', value: 11 },
  { label: 'Декабрь', value: 12 }
]

const statusOptions = [
  { label: 'Ожидает оплаты', value: 'pending' },
  { label: 'Оплачен', value: 'paid' },
  { label: 'Просрочен', value: 'overdue' }
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
      label: apartment.number,
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

const services = computed(() => {
  return servicesStore.services.map(service => ({
    ...service,
    amount: form.value.services[service.id]?.amount || 0,
    quantity: form.value.services[service.id]?.quantity || 0
  }))
})

const total = computed(() => {
  return services.value.reduce((sum, service) => {
    return sum + (service.amount * service.quantity)
  }, 0)
})

// Методы
const handleBuildingChange = async (buildingId) => {
  form.value.buildingId = buildingId
  form.value.apartmentId = null
  form.value.residentId = null
  form.value.services = {}
  form.value.total = 0
  
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
  form.value.services = {}
  form.value.total = 0
  
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
  form.value.services = {}
  form.value.total = 0
}

const handleServiceChange = (serviceId, field, value) => {
  if (!form.value.services[serviceId]) {
    form.value.services[serviceId] = {
      amount: 0,
      quantity: 0
    }
  }
  form.value.services[serviceId][field] = value
  form.value.total = total.value
}

const saveInvoice = async () => {
  try {
    loading.value = true
    console.log('Сохранение счета:', form.value)
    
    if (props.editingInvoice) {
      await invoicesStore.updateInvoice(props.editingInvoice.id, form.value)
      console.log('Счет обновлен')
    } else {
      await invoicesStore.addInvoice(form.value)
      console.log('Счет добавлен')
    }
    
    emit('saved')
    emit('update:show', false)
  } catch (error) {
    console.error('Ошибка при сохранении счета:', error)
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
    if (!utilitiesStore.utilities.length) {
      await utilitiesStore.fetchUtilities()
    }
    if (!servicesStore.services.length) {
      await servicesStore.fetchServices()
    }
    
    if (props.editingInvoice) {
      if (props.editingInvoice.buildingId) {
        await apartmentsStore.fetchApartments({ buildingId: props.editingInvoice.buildingId })
      }
      if (props.editingInvoice.apartmentId) {
        await residentsStore.fetchResidents({ apartmentId: props.editingInvoice.apartmentId })
      }
    } else {
      form.value = {
        buildingId: props.invoiceForm?.buildingId || '',
        apartmentId: props.invoiceForm?.apartmentId || '',
        residentId: props.invoiceForm?.residentId || '',
        period: {
          month: new Date().getMonth() + 1,
          year: new Date().getFullYear()
        },
        services: {},
        total: 0,
        status: 'pending',
        date: new Date().toISOString()
      }
    }
  } catch (error) {
    console.error('Ошибка при инициализации:', error)
  } finally {
    loading.value = false
  }
})

// Наблюдатель за изменением invoiceForm
watch(() => props.invoiceForm, (newForm) => {
  if (newForm) {
    form.value = { ...newForm }
    // Инициализируем услуги, если их нет
    if (!form.value.services) {
      form.value.services = {}
    }
    form.value.total = total.value
  }
}, { deep: true })
</script>

<style scoped>
.q-card {
  min-width: 500px;
}
</style> 