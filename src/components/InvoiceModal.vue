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
  selectedBuilding: String,
  selectedApartment: String,
  selectedResident: String
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
  if (!form.value.buildingId) {
    console.log('Нет выбранного здания для квартир')
    return []
  }
  const filteredApartments = apartmentsStore.apartments
    .filter(apartment => apartment.buildingId === form.value.buildingId)
    .map(apartment => ({
      label: `Квартира ${apartment.number}`,
      value: apartment.id
    }))
  console.log('Доступные квартиры для формы:', filteredApartments)
  return filteredApartments
})

const residents = computed(() => {
  if (!form.value.apartmentId) {
    console.log('Нет выбранной квартиры для жильцов')
    return []
  }
  const filteredResidents = residentsStore.residents
    .filter(resident => resident.apartmentId === form.value.apartmentId)
    .map(resident => ({
      label: `${resident.lastName} ${resident.firstName}`,
      value: resident.id
    }))
  console.log('Доступные жильцы для формы:', filteredResidents)
  return filteredResidents
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
  console.log('Обработка изменения здания:', buildingId)
  form.value.apartmentId = ''
  form.value.residentId = ''
  form.value.services = {}
  await Promise.all([
    apartmentsStore.fetchApartments({ buildingId }),
    utilitiesStore.fetchUtilities({ buildingId, status: 'active' })
  ])
  console.log('Загружено квартир:', apartmentsStore.apartments.length)
  console.log('Загружено услуг:', utilitiesStore.utilities.length)
}

const handleApartmentChange = async (apartmentId) => {
  console.log('Обработка изменения квартиры:', apartmentId)
  form.value.residentId = ''
  await residentsStore.fetchResidents({ apartmentId })
  console.log('Загружено жильцов:', residentsStore.residents.length)
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

const initializeServicesForNewInvoice = () => {
  // Инициализируем услуги для нового счета
  const servicesObj = {}
  availableUtilities.value.forEach(utility => {
    servicesObj[utility.id] = {
      consumption: 0,
      amount: 0
    }
  })
  form.value.services = servicesObj
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
        consumption: parseFloat(data.consumption) || 0,
        amount: parseFloat(data.amount) || 0
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
watch(() => props.show, async (newValue) => {
  if (newValue) {
    if (props.editingInvoice) {
      // Режим редактирования
      console.log('Редактирование счета:', props.editingInvoice)
      form.value = { ...props.editingInvoice }
      
      // Загружаем связанные данные последовательно
      if (props.editingInvoice.buildingId) {
        console.log('Загружаем данные для здания при редактировании:', props.editingInvoice.buildingId)
        await handleBuildingChange(props.editingInvoice.buildingId)
        form.value.buildingId = props.editingInvoice.buildingId
      }
      
      if (props.editingInvoice.apartmentId) {
        console.log('Загружаем данные для квартиры при редактировании:', props.editingInvoice.apartmentId)
        await handleApartmentChange(props.editingInvoice.apartmentId)
        form.value.apartmentId = props.editingInvoice.apartmentId
      }
      
      if (props.editingInvoice.residentId) {
        console.log('Устанавливаем жильца при редактировании:', props.editingInvoice.residentId)
        form.value.residentId = props.editingInvoice.residentId
      }
      
      // Инициализируем услуги для редактирования после загрузки данных
      if (props.editingInvoice.services && Array.isArray(props.editingInvoice.services)) {
        console.log('Инициализируем услуги для редактирования:', props.editingInvoice.services)
        // Преобразуем массив услуг в объект для формы
        const servicesObj = {}
        props.editingInvoice.services.forEach(service => {
          servicesObj[service.utilityId] = {
            consumption: service.consumption || 0,
            amount: service.amount || 0
          }
        })
        form.value.services = servicesObj
        calculateTotal()
      }
      
      console.log('Итоговая форма при редактировании:', form.value)
    } else {
      // Режим создания нового счета
      console.log('Создание нового счета с данными:', {
        selectedBuilding: props.selectedBuilding,
        selectedApartment: props.selectedApartment,
        selectedResident: props.selectedResident
      })
      
      form.value = {
        buildingId: props.selectedBuilding || '',
        apartmentId: props.selectedApartment || '',
        residentId: props.selectedResident || '',
        period: {
          month: new Date().getMonth() + 1,
          year: new Date().getFullYear()
        },
        services: {},
        total: 0,
        status: 'pending',
        date: new Date().toISOString()
      }
      
      // Загружаем данные для выбранных значений последовательно
      if (props.selectedBuilding) {
        console.log('Загружаем данные для здания:', props.selectedBuilding)
        await handleBuildingChange(props.selectedBuilding)
        form.value.buildingId = props.selectedBuilding
        // Инициализируем услуги для нового счета
        initializeServicesForNewInvoice()
      }
      
      if (props.selectedApartment) {
        console.log('Загружаем данные для квартиры:', props.selectedApartment)
        await handleApartmentChange(props.selectedApartment)
        form.value.apartmentId = props.selectedApartment
      }
      
      if (props.selectedResident) {
        console.log('Устанавливаем жильца:', props.selectedResident)
        form.value.residentId = props.selectedResident
      }
      
      console.log('Итоговая форма после инициализации:', form.value)
    }
  }
})

// Инициализация
onMounted(async () => {
  await buildingsStore.fetchBuildings()
  // Коммунальные услуги загружаются при выборе здания
})
</script>

<style scoped>
.q-card {
  min-width: 600px;
}
</style> 