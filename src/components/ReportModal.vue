index.js:42 
 GET http://localhost:5173/crm/src/views/Finance.vue?t=1747913687217 net::ERR_ABORTED 500 (Internal Server Error)
component	@	index.js:42

main.js:17 Router error: TypeError: Failed to fetch dynamically imported module: http://localhost:5173/crm/src/views/Finance.vue?t=1747913687217
(анонимная)	@	main.js:17
<template>
  <q-dialog :model-value="show" @update:model-value="$emit('update:show', $event)" persistent>
    <q-card style="min-width: 700px">
      <q-card-section class="row items-center">
        <div class="text-h6">{{ reportData.title }}</div>
        <q-space />
        <q-btn icon="close" flat round dense v-close-popup />
      </q-card-section>

      <q-card-section>
        <div class="row q-col-gutter-md">
          <div class="col-12">
            <div class="text-subtitle2">Период: {{ formatDate(dateRange.from) }} - {{ formatDate(dateRange.to) }}</div>
            <div v-if="selectedBuilding" class="text-subtitle2">
              Здание: {{ getBuildingName(selectedBuilding) }}
            </div>
            <div v-if="selectedApartment" class="text-subtitle2">
              Квартира: {{ getApartmentNumber(selectedApartment) }}
            </div>
            <div v-if="selectedResident" class="text-subtitle2">
              Жилец: {{ getResidentName(selectedResident) }}
            </div>
          </div>

          <div class="col-12">
            <q-table
              :rows="reportData.data"
              :columns="columns"
              row-key="id"
              :pagination="{ rowsPerPage: 0 }"
            >
              <template v-slot:bottom>
                <div class="text-h6 q-mt-md">
                  Итого: {{ formatPrice(reportData.total) }} ₽
                </div>
              </template>
            </q-table>
          </div>
        </div>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="Закрыть" color="primary" v-close-popup />
        <q-btn flat label="Экспорт в PDF" color="primary" @click="exportToPDF" />
        <q-btn flat label="Экспорт в Excel" color="primary" @click="exportToExcel" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref, computed } from 'vue'
import { date } from 'quasar'
import { useBuildingsStore } from '../stores/buildings'
import { useApartmentsStore } from '../stores/apartments'
import { useResidentsStore } from '../stores/residents'

const props = defineProps({
  show: {
    type: Boolean,
    required: true
  },
  reportData: {
    type: Object,
    required: true
  },
  dateRange: {
    type: Object,
    required: true
  },
  selectedBuilding: {
    type: String,
    default: ''
  },
  selectedApartment: {
    type: String,
    default: ''
  },
  selectedResident: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:show'])

const buildingsStore = useBuildingsStore()
const apartmentsStore = useApartmentsStore()
const residentsStore = useResidentsStore()

const columns = computed(() => {
  switch (props.reportData.title) {
    case 'Отчет по платежам':
      return [
        { name: 'date', label: 'Дата', field: 'date', format: val => formatDate(val) },
        { name: 'building', label: 'Здание', field: 'buildingId', format: val => getBuildingName(val) },
        { name: 'apartment', label: 'Квартира', field: 'apartmentId', format: val => getApartmentNumber(val) },
        { name: 'resident', label: 'Жилец', field: 'residentId', format: val => getResidentName(val) },
        { name: 'amount', label: 'Сумма', field: 'amount', format: val => formatPrice(val) },
        { name: 'type', label: 'Тип платежа', field: 'type' },
        { name: 'status', label: 'Статус', field: 'status' }
      ]
    case 'Отчет по задолженностям':
      return [
        { name: 'building', label: 'Здание', field: 'buildingId', format: val => getBuildingName(val) },
        { name: 'apartment', label: 'Квартира', field: 'apartmentId', format: val => getApartmentNumber(val) },
        { name: 'resident', label: 'Жилец', field: 'residentId', format: val => getResidentName(val) },
        { name: 'amount', label: 'Сумма задолженности', field: 'amount', format: val => formatPrice(val) },
        { name: 'dueDate', label: 'Срок оплаты', field: 'dueDate', format: val => formatDate(val) }
      ]
    case 'Отчет по счетам':
      return [
        { name: 'date', label: 'Дата', field: 'date', format: val => formatDate(val) },
        { name: 'building', label: 'Здание', field: 'buildingId', format: val => getBuildingName(val) },
        { name: 'apartment', label: 'Квартира', field: 'apartmentId', format: val => getApartmentNumber(val) },
        { name: 'resident', label: 'Жилец', field: 'residentId', format: val => getResidentName(val) },
        { name: 'total', label: 'Сумма', field: 'total', format: val => formatPrice(val) },
        { name: 'status', label: 'Статус', field: 'status' }
      ]
    default:
      return []
  }
})

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('ru-RU')
}

const formatPrice = (price) => {
  return new Intl.NumberFormat('ru-RU').format(price)
}

const getBuildingName = (buildingId) => {
  const building = buildingsStore.buildings.find(b => b.id === buildingId)
  return building ? building.name : 'Неизвестное здание'
}

const getApartmentNumber = (apartmentId) => {
  const apartment = apartmentsStore.apartments.find(a => a.id === apartmentId)
  return apartment ? apartment.number : 'Неизвестная квартира'
}

const getResidentName = (residentId) => {
  const resident = residentsStore.residents.find(r => r.id === residentId)
  return resident ? `${resident.lastName} ${resident.firstName}` : 'Неизвестный жилец'
}

const exportToPDF = () => {
  // Здесь будет логика экспорта в PDF
  console.log('Экспорт в PDF')
}

const exportToExcel = () => {
  // Здесь будет логика экспорта в Excel
  console.log('Экспорт в Excel')
}
</script>

<style scoped>
.q-card {
  min-width: 800px;
}
</style> 