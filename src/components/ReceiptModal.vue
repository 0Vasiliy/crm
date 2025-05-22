<template>
  <q-dialog :model-value="show" @update:model-value="$emit('update:show', $event)" persistent>
    <q-card style="min-width: 500px">
      <q-card-section>
        <div class="text-h6">Создать квитанцию</div>
      </q-card-section>

      <q-card-section>
        <div class="row q-col-gutter-md">
          <div class="col-12 col-md-6">
            <q-input
              v-model="form.number"
              label="Номер квитанции"
              readonly
            />
          </div>
          <div class="col-12 col-md-6">
            <q-input
              v-model="form.date"
              type="date"
              label="Дата"
            />
          </div>
          <div class="col-12">
            <q-item>
              <q-item-section>
                <q-item-label>Платеж</q-item-label>
                <q-item-label caption>
                  {{ payment ? `${formatDate(payment.date)} - ${formatPrice(payment.amount)} ₽` : 'Не выбран' }}
                </q-item-label>
              </q-item-section>
            </q-item>
          </div>
          <div class="col-12">
            <q-item>
              <q-item-section>
                <q-item-label>Счет</q-item-label>
                <q-item-label caption>
                  {{ invoice ? `${invoice.period.month}/${invoice.period.year} - ${formatPrice(invoice.total)} ₽` : 'Не выбран' }}
                </q-item-label>
              </q-item-section>
            </q-item>
          </div>
          <div class="col-12">
            <q-item>
              <q-item-section>
                <q-item-label>Жилец</q-item-label>
                <q-item-label caption>
                  {{ resident ? `${resident.lastName} ${resident.firstName}` : 'Не выбран' }}
                </q-item-label>
              </q-item-section>
            </q-item>
          </div>
          <div class="col-12">
            <q-item>
              <q-item-section>
                <q-item-label>Квартира</q-item-label>
                <q-item-label caption>
                  {{ apartment ? apartment.number : 'Не выбрана' }}
                </q-item-label>
              </q-item-section>
            </q-item>
          </div>
          <div class="col-12">
            <q-item>
              <q-item-section>
                <q-item-label>Здание</q-item-label>
                <q-item-label caption>
                  {{ building ? building.name : 'Не выбрано' }}
                </q-item-label>
              </q-item-section>
            </q-item>
          </div>
        </div>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="Отмена" color="primary" v-close-popup />
        <q-btn label="Создать" color="primary" @click="saveReceipt" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useBuildingsStore } from '../stores/buildings'
import { useApartmentsStore } from '../stores/apartments'
import { useResidentsStore } from '../stores/residents'
import { useInvoicesStore } from '../stores/invoices'
import { usePaymentsStore } from '../stores/payments'
import { useReceiptsStore } from '../stores/receipts'
import { date } from 'quasar'

const props = defineProps({
  show: Boolean,
  payment: Object
})

const emit = defineEmits(['update:show', 'saved'])

const buildingsStore = useBuildingsStore()
const apartmentsStore = useApartmentsStore()
const residentsStore = useResidentsStore()
const invoicesStore = useInvoicesStore()
const paymentsStore = usePaymentsStore()
const receiptsStore = useReceiptsStore()

// Вспомогательные функции
const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('ru-RU')
}

const formatPrice = (price) => {
  return new Intl.NumberFormat('ru-RU').format(price)
}

const generateReceiptNumber = () => {
  const date = new Date()
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  const random = Math.floor(Math.random() * 10000).toString().padStart(4, '0')
  return `RCP-${year}${month}${day}-${random}`
}

// Состояние формы
const form = ref({
  number: generateReceiptNumber(),
  date: date.formatDate(new Date(), 'YYYY-MM-DD'),
  paymentId: '',
  invoiceId: '',
  buildingId: '',
  apartmentId: '',
  residentId: '',
  amount: 0,
  description: ''
})

// Вычисляемые свойства
const selectedBuilding = computed(() => {
  if (!props.payment) return null
  return buildingsStore.buildings.find(b => b.id === props.payment.buildingId)
})

const selectedApartment = computed(() => {
  if (!props.payment) return null
  return apartmentsStore.apartments.find(a => a.id === props.payment.apartmentId)
})

const selectedResident = computed(() => {
  if (!props.payment) return null
  return residentsStore.residents.find(r => r.id === props.payment.residentId)
})

const selectedInvoice = computed(() => {
  if (!props.payment) return null
  return invoicesStore.invoices.find(i => i.id === props.payment.invoiceId)
})

// Методы
const saveReceipt = async () => {
  try {
    console.log('Сохранение квитанции:', form.value)
    await receiptsStore.addReceipt(form.value)
    emit('saved')
    emit('update:show', false)
  } catch (error) {
    console.error('Ошибка при сохранении квитанции:', error)
  }
}

// Следим за изменениями платежа
watch(() => props.payment, (newPayment) => {
  console.log('Изменение платежа:', newPayment)
  if (newPayment) {
    form.value = {
      number: generateReceiptNumber(),
      date: date.formatDate(new Date(), 'YYYY-MM-DD'),
      paymentId: newPayment.id,
      invoiceId: newPayment.invoiceId,
      buildingId: newPayment.buildingId,
      apartmentId: newPayment.apartmentId,
      residentId: newPayment.residentId,
      amount: newPayment.amount,
      description: `Квитанция по платежу от ${formatDate(newPayment.date)}`
    }
  }
}, { immediate: true })

// Следим за изменениями show
watch(() => props.show, (newValue) => {
  console.log('Изменение видимости модального окна:', newValue)
  if (newValue && props.payment) {
    form.value.number = generateReceiptNumber()
  }
})
</script> 