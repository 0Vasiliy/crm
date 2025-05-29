<template>
  <q-dialog
    v-if="isMounted"
    :model-value="show"
    @update:model-value="$emit('update:show', $event)"
    persistent
  >
    <q-card style="min-width: 500px">
      <q-card-section>
        <div class="text-h6">{{ editingDebt ? 'Редактировать задолженность' : 'Добавить задолженность' }}</div>
      </q-card-section>

      <q-card-section>
        <div class="row q-col-gutter-md">
          <div class="col-12 col-md-6">
            <q-select
              v-model="form.buildingId"
              :options="buildings"
              label="Здание"
              @update:model-value="loadApartments"
            />
          </div>
          <div class="col-12 col-md-6">
            <q-select
              v-model="form.apartmentId"
              :options="filteredApartments"
              label="Квартира"
              @update:model-value="loadResidents"
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
            <q-input
              v-model.number="form.amount"
              type="number"
              label="Сумма задолженности"
              prefix="₽"
            />
          </div>
          <div class="col-12 col-md-6">
            <q-input
              v-model="form.dueDate"
              type="date"
              label="Срок оплаты"
            />
          </div>
          <div class="col-12 col-md-6">
            <q-select
              v-model="form.status"
              :options="debtStatuses"
              label="Статус"
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
        <q-btn label="Сохранить" color="primary" @click="saveDebt" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue'
import { useBuildingsStore } from '../stores/buildings'
import { useApartmentsStore } from '../stores/apartments'
import { useResidentsStore } from '../stores/residents'
import { useDebtsStore } from '../stores/debts'
import { useInvoicesStore } from '../stores/invoices'
import { date } from 'quasar'

const props = defineProps({
  show: Boolean,
  editingDebt: Object
})

const emit = defineEmits(['update:show', 'saved'])

const buildingsStore = useBuildingsStore()
const apartmentsStore = useApartmentsStore()
const residentsStore = useResidentsStore()
const debtsStore = useDebtsStore()
const invoicesStore = useInvoicesStore()

// Флаг монтирования компонента
const isMounted = ref(false)

// Состояние формы
const form = ref({
  buildingId: '',
  apartmentId: '',
  residentId: '',
  amount: 0,
  dueDate: date.formatDate(new Date(), 'YYYY-MM-DD'),
  status: 'pending',
  description: ''
})

// Статусы задолженности
const debtStatuses = [
  { label: 'Ожидает оплаты', value: 'pending' },
  { label: 'Частично оплачено', value: 'partial' },
  { label: 'Просрочено', value: 'overdue' }
]

// Вычисляемые свойства
const buildings = computed(() => buildingsStore.buildings.map(building => ({
  label: building.name,
  value: building.id
})))

const filteredApartments = computed(() => {
  if (!form.value.buildingId) return []
  return apartmentsStore.apartments
    .filter(apt => apt.buildingId === form.value.buildingId)
    .map(apt => ({
      label: apt.number,
      value: apt.id
    }))
})

const filteredResidents = computed(() => {
  if (!form.value.apartmentId) return []
  return residentsStore.residents
    .filter(res => res.apartmentId === form.value.apartmentId)
    .map(res => ({
      label: `${res.lastName} ${res.firstName}`,
      value: res.id
    }))
})

// Методы
const loadApartments = async () => {
  if (form.value.buildingId) {
    await apartmentsStore.fetchApartments(form.value.buildingId)
  }
  form.value.apartmentId = ''
  form.value.residentId = ''
}

const loadResidents = async () => {
  if (form.value.apartmentId) {
    await residentsStore.fetchResidents(form.value.apartmentId)
  }
  form.value.residentId = ''
}

const saveDebt = async () => {
  try {
    loading.value = true

    // Проверяем наличие неоплаченных счетов
    const existingInvoices = await invoicesStore.fetchInvoices({
      buildingId: form.value.buildingId,
      apartmentId: form.value.apartmentId,
      residentId: form.value.residentId,
      status: ['pending', 'overdue']
    })

    const totalInvoices = existingInvoices.reduce((sum, invoice) => sum + invoice.total, 0)

    if (totalInvoices > 0) {
      const confirmMessage = `У жильца есть неоплаченные счета на сумму ${totalInvoices.toLocaleString('ru-RU')} ₽\n\n` +
        `Вы уверены, что хотите создать дополнительную задолженность?`
      
      if (!confirm(confirmMessage)) {
        return
      }
    }

    const debtData = {
      ...form.value,
      date: new Date().toISOString()
    }

    if (props.editingDebt) {
      await debtsStore.updateDebt(props.editingDebt.id, debtData)
    } else {
      await debtsStore.addDebt(debtData)
    }

    emit('saved')
    emit('update:show', false)
  } catch (error) {
    console.error('Ошибка при сохранении задолженности:', error)
  } finally {
    loading.value = false
  }
}

// Загрузка начальных данных
onMounted(async () => {
  try {
    console.log('Загрузка начальных данных для модального окна задолженностей')
    await buildingsStore.fetchBuildings()
    if (form.value.buildingId) {
      await loadApartments()
    }
    if (form.value.apartmentId) {
      await loadResidents()
    }
    isMounted.value = true
  } catch (error) {
    console.error('Ошибка при загрузке начальных данных:', error)
  }
})

// Очистка при размонтировании
onBeforeUnmount(() => {
  isMounted.value = false
})

// Следим за изменениями редактируемой задолженности
watch(() => props.editingDebt, async (newDebt) => {
  console.log('Изменение редактируемой задолженности:', newDebt)
  if (newDebt) {
    form.value = { ...newDebt }
    // Загружаем данные для выбранных значений
    if (form.value.buildingId) {
      await loadApartments()
    }
    if (form.value.apartmentId) {
      await loadResidents()
    }
  } else {
    form.value = {
      buildingId: '',
      apartmentId: '',
      residentId: '',
      amount: 0,
      dueDate: date.formatDate(new Date(), 'YYYY-MM-DD'),
      status: 'pending',
      description: ''
    }
  }
}, { immediate: true })

// Следим за изменениями show
watch(() => props.show, async (newValue) => {
  console.log('Изменение видимости модального окна:', newValue)
  if (newValue) {
    // При открытии модального окна загружаем необходимые данные
    await buildingsStore.fetchBuildings()
    if (form.value.buildingId) {
      await loadApartments()
    }
    if (form.value.apartmentId) {
      await loadResidents()
    }
  }
})
</script>

<style scoped>
.q-card {
  min-width: 500px;
}
</style> 