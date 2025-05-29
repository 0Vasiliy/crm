<template>
  <q-dialog
    :model-value="show"
    @update:model-value="$emit('update:show', $event)"
    persistent
  >
    <q-card style="min-width: 600px">
      <q-card-section>
        <div class="text-h6">{{ editingPayment ? 'Редактировать платеж' : 'Новый платеж' }}</div>
      </q-card-section>

      <q-card-section>
        <div class="row q-col-gutter-md">
          <div class="col-12 col-md-4">
            <q-select
              v-model="form.buildingId"
              :options="buildings"
              label="Здание"
              @update:model-value="handleBuildingChange"
              emit-value
              map-options
            />
          </div>
          <div class="col-12 col-md-4">
            <q-select
              v-model="form.apartmentId"
              :options="apartments"
              label="Квартира"
              @update:model-value="handleApartmentChange"
              emit-value
              map-options
            />
          </div>
          <div class="col-12 col-md-4">
            <q-select
              v-model="form.residentId"
              :options="residents"
              label="Жилец"
              emit-value
              map-options
            />
          </div>
        </div>

        <div class="row q-col-gutter-md q-mt-md">
          <div class="col-12 col-md-6">
            <q-select
              v-model="form.type"
              :options="paymentTypes"
              label="Тип платежа"
              @update:model-value="handleTypeChange"
            />
          </div>
          <div class="col-12 col-md-6">
            <q-select
              v-if="form.type === 'utility'"
              v-model="form.invoiceId"
              :options="availableInvoices"
              label="Счет"
              @update:model-value="handleInvoiceChange"
              emit-value
              map-options
            />
          </div>
        </div>

        <div class="row q-col-gutter-md q-mt-md">
          <div class="col-12 col-md-6">
            <q-input
              v-model="form.amount"
              type="number"
              label="Сумма"
              :readonly="form.type === 'utility' && form.invoiceId"
            />
          </div>
          <div class="col-12 col-md-6">
            <q-input
              v-model="form.date"
              type="date"
              label="Дата"
            />
          </div>
        </div>

        <div class="row q-col-gutter-md q-mt-md">
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
import { useDebtsStore } from '../stores/debts'
import { useReceiptsStore } from '../stores/receipts'
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
const debtsStore = useDebtsStore()
const receiptsStore = useReceiptsStore()

// Состояния
const loading = ref(false)
const form = ref({
  buildingId: '',
  apartmentId: '',
  residentId: '',
  type: 'utility',
  invoiceId: '',
  amount: 0,
  date: date.formatDate(new Date(), 'YYYY-MM-DD'),
  description: '',
  status: 'pending'
})

// Опции
const paymentTypes = [
  { label: 'Коммунальные услуги', value: 'utility' },
  { label: 'Ремонт', value: 'repair' },
  { label: 'Другое', value: 'other' }
]

// Вычисляемые свойства
const buildings = computed(() => buildingsStore.buildings.map(building => ({
  label: building.name,
  value: building.id
})))

const apartments = computed(() => {
  if (!form.value.buildingId) return []
  return apartmentsStore.apartments
    .filter(apartment => apartment.buildingId === form.value.buildingId)
    .map(apartment => ({
      label: `Квартира ${apartment.number}`,
      value: apartment.id
    }))
})

const residents = computed(() => {
  if (!form.value.apartmentId) return []
  return residentsStore.residents
    .filter(resident => resident.apartmentId === form.value.apartmentId)
    .map(resident => ({
      label: `${resident.lastName} ${resident.firstName}`,
      value: resident.id
    }))
})

const availableInvoices = computed(() => {
  if (!form.value.buildingId || !form.value.apartmentId || !form.value.residentId) return []
  return invoicesStore.invoices
    .filter(invoice => 
      invoice.buildingId === form.value.buildingId &&
      invoice.apartmentId === form.value.apartmentId &&
      invoice.residentId === form.value.residentId &&
      (invoice.status === 'pending' || invoice.status === 'overdue')
    )
    .map(invoice => ({
      label: `Счет от ${date.formatDate(invoice.date, 'DD.MM.YYYY')} - ${invoice.total} ₽`,
      value: invoice.id
    }))
})

// Методы
const handleBuildingChange = async (buildingId) => {
  form.value.apartmentId = ''
  form.value.residentId = ''
  form.value.invoiceId = ''
  form.value.amount = 0
  await apartmentsStore.fetchApartments({ buildingId })
}

const handleApartmentChange = async (apartmentId) => {
  form.value.residentId = ''
  form.value.invoiceId = ''
  form.value.amount = 0
  await residentsStore.fetchResidents({ apartmentId })
}

const handleTypeChange = () => {
  if (form.value.type !== 'utility') {
    form.value.invoiceId = ''
  }
}

const handleInvoiceChange = (invoiceId) => {
  if (invoiceId) {
    const invoice = invoicesStore.invoices.find(i => i.id === invoiceId)
    if (invoice) {
      form.value.amount = invoice.total
    }
  }
}

const savePayment = async () => {
  try {
    loading.value = true
    const paymentData = {
      ...form.value,
      date: new Date(form.value.date).toISOString()
    }

    if (props.editingPayment) {
      await paymentsStore.updatePayment(props.editingPayment.id, paymentData)
    } else {
      const newPayment = await paymentsStore.addPayment(paymentData)
      
      // Если это платеж по счету, обновляем статус счета
      if (paymentData.type === 'utility' && paymentData.invoiceId) {
        await invoicesStore.updateInvoiceStatus(paymentData.invoiceId, 'paid')
        
        // Проверяем и обновляем задолженности
        const debts = await debtsStore.fetchDebts({
          buildingId: paymentData.buildingId,
          apartmentId: paymentData.apartmentId,
          residentId: paymentData.residentId,
          status: ['pending', 'overdue']
        })
        
        if (debts.length > 0) {
          await Promise.all(debts.map(debt => 
            debtsStore.updateDebt(debt.id, {
              ...debt,
              status: 'paid',
              updatedAt: new Date().toISOString()
            })
          ))
        }
        
        // Создаем квитанцию
        const receiptData = {
          number: generateReceiptNumber(),
          date: new Date().toISOString(),
          paymentId: newPayment.id,
          invoiceId: paymentData.invoiceId,
          buildingId: paymentData.buildingId,
          apartmentId: paymentData.apartmentId,
          residentId: paymentData.residentId,
          amount: paymentData.amount,
          description: `Квитанция по платежу от ${formatDate(paymentData.date)}`
        }
        
        await receiptsStore.addReceipt(receiptData)
      }
    }

    emit('saved')
    emit('update:show', false)
  } catch (error) {
    console.error('Ошибка при сохранении платежа:', error)
  } finally {
    loading.value = false
  }
}

// Вспомогательная функция для генерации номера квитанции
const generateReceiptNumber = () => {
  const date = new Date()
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  const random = Math.floor(Math.random() * 10000).toString().padStart(4, '0')
  return `RCP-${year}${month}${day}-${random}`
}

// Вспомогательная функция для форматирования даты
const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('ru-RU')
}

// Наблюдатели
watch(() => props.show, (newValue) => {
  if (newValue && props.editingPayment) {
    form.value = {
      ...props.editingPayment,
      date: date.formatDate(new Date(props.editingPayment.date), 'YYYY-MM-DD')
    }
  } else if (newValue) {
    form.value = {
      buildingId: '',
      apartmentId: '',
      residentId: '',
      type: 'utility',
      invoiceId: '',
      amount: 0,
      date: date.formatDate(new Date(), 'YYYY-MM-DD'),
      description: '',
      status: 'pending'
    }
  }
})

// Инициализация
onMounted(async () => {
  await Promise.all([
    buildingsStore.fetchBuildings(),
    invoicesStore.fetchInvoices()
  ])
})
</script>

<style scoped>
.q-card {
  min-width: 600px;
}
</style> 