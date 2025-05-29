<template>
  <q-dialog
    :model-value="show"
    @update:model-value="$emit('update:show', $event)"
    persistent
  >
    <q-card style="min-width: 600px">
      <q-card-section>
        <div class="text-h6">{{ editingInvoice ? 'Редактировать счет' : 'Новый счет' }}</div>
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
              v-model="form.period.month"
              :options="months"
              label="Месяц"
              emit-value
              map-options
            />
          </div>
          <div class="col-12 col-md-6">
            <q-input
              v-model="form.period.year"
              type="number"
              label="Год"
            />
          </div>
        </div>

        <!-- Секция коммунальных услуг -->
        <div class="row q-col-gutter-md q-mt-md">
          <div class="col-12">
            <div class="text-subtitle2 q-mb-sm">Коммунальные услуги</div>
            <div v-for="utility in availableUtilities" :key="utility.id" class="row q-col-gutter-md q-mb-md">
              <div class="col-12 col-md-6">
                <q-input
                  v-model="form.services[utility.id].consumption"
                  type="number"
                  :label="`${utility.name} (${utility.unit})`"
                  @update:model-value="calculateServiceAmount(utility)"
                />
              </div>
              <div class="col-12 col-md-6">
                <q-input
                  v-model="form.services[utility.id].amount"
                  type="number"
                  label="Сумма"
                  readonly
                />
              </div>
            </div>
          </div>
        </div>

        <div class="row q-col-gutter-md q-mt-md">
          <div class="col-12">
            <q-input
              v-model="form.total"
              type="number"
              label="Итоговая сумма"
              readonly
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
import { useDebtsStore } from '../stores/debts'

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
const debtsStore = useDebtsStore()

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

const availableUtilities = computed(() => {
  if (!form.value.buildingId) return []
  return utilitiesStore.utilities.filter(utility => 
    utility.buildingId === form.value.buildingId && 
    utility.status === 'active'
  )
})

// Методы
const handleBuildingChange = async (buildingId) => {
  form.value.apartmentId = ''
  form.value.residentId = ''
  form.value.services = {}
  await apartmentsStore.fetchApartments({ buildingId })
  await utilitiesStore.fetchUtilities({ buildingId })
}

const handleApartmentChange = async (apartmentId) => {
  form.value.residentId = ''
  await residentsStore.fetchResidents({ apartmentId })
}

const calculateServiceAmount = (utility) => {
  const consumption = form.value.services[utility.id]?.consumption || 0
  form.value.services[utility.id] = {
    ...form.value.services[utility.id],
    amount: consumption * utility.rate
  }
  calculateTotal()
}

const calculateTotal = () => {
  form.value.total = Object.values(form.value.services).reduce((sum, service) => 
    sum + (service.amount || 0), 0
  )
}

const saveInvoice = async () => {
  try {
    loading.value = true
    
    // Проверяем наличие задолженностей
    const existingDebts = await debtsStore.fetchDebts({
      buildingId: form.value.buildingId,
      apartmentId: form.value.apartmentId,
      residentId: form.value.residentId,
      status: ['pending', 'overdue']
    })

    // Проверяем наличие неоплаченных счетов
    const existingInvoices = await invoicesStore.fetchInvoices({
      buildingId: form.value.buildingId,
      apartmentId: form.value.apartmentId,
      residentId: form.value.residentId,
      status: ['pending', 'overdue']
    })

    const totalDebt = existingDebts.reduce((sum, debt) => sum + debt.amount, 0)
    const totalInvoices = existingInvoices.reduce((sum, invoice) => sum + invoice.total, 0)

    if (totalDebt > 0 || totalInvoices > 0) {
      const confirmMessage = `У жильца есть существующие задолженности:\n` +
        `Задолженности: ${totalDebt.toLocaleString('ru-RU')} ₽\n` +
        `Неоплаченные счета: ${totalInvoices.toLocaleString('ru-RU')} ₽\n\n` +
        `Вы уверены, что хотите создать новый счет?`
      
      if (!confirm(confirmMessage)) {
        return
      }
    }

    const invoiceData = {
      ...form.value,
      services: Object.entries(form.value.services).map(([utilityId, data]) => ({
        utilityId,
        consumption: data.consumption,
        amount: data.amount
      }))
    }

    if (props.editingInvoice) {
      await invoicesStore.updateInvoice(props.editingInvoice.id, invoiceData)
    } else {
      await invoicesStore.addInvoice(invoiceData)
    }

    // Обновляем статус задолженности
    if (existingDebts.length > 0) {
      await Promise.all(existingDebts.map(debt => 
        debtsStore.updateDebt(debt.id, { 
          ...debt,
          status: 'pending',
          updatedAt: new Date().toISOString()
        })
      ))
    }

    emit('saved')
    emit('update:show', false)
  } catch (error) {
    console.error('Ошибка при сохранении счета:', error)
  } finally {
    loading.value = false
  }
}

// Наблюдатели
watch(() => props.show, (newValue) => {
  if (newValue && props.editingInvoice) {
    form.value = { ...props.editingInvoice }
  } else if (newValue) {
    form.value = {
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
    }
  }
})

// Инициализация
onMounted(async () => {
  await Promise.all([
    buildingsStore.fetchBuildings(),
    utilitiesStore.fetchUtilities()
  ])
})
</script>

<style scoped>
.q-card {
  min-width: 600px;
}
</style> 