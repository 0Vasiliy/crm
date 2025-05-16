<template>
  <div class="modal-overlay" v-if="show" @click="closeModal">
    <div class="modal-content" @click.stop>
      <div class="modal-header">
        <h2>Детальная информация о долгах</h2>
        <button class="close-button" @click="closeModal">
          <i class="fas fa-times"></i>
        </button>
      </div>

      <div class="modal-body">
        <!-- Фильтры -->
        <div class="filters">
          <select v-model="selectedBuilding" @change="updateBuildingStats">
            <option value="">Все дома</option>
            <option v-for="building in buildings" :key="building.id" :value="building.id">
              {{ building.name }}
            </option>
          </select>
          <select v-model="selectedApartment" :disabled="!selectedBuilding">
            <option value="">Все квартиры</option>
            <option v-for="apartment in filteredApartments" :key="apartment.id" :value="apartment.id">
              Кв. {{ apartment.number }}
            </option>
          </select>
        </div>

        <!-- Статистика -->
        <div class="stats">
          <div class="stat-card">
            <h3>Общая сумма долга</h3>
            <p class="amount" :class="{ 'has-debt': totalDebt > 0 }">
              {{ totalDebt.toLocaleString('ru-RU') }} ₽
            </p>
          </div>
          <div class="stat-card">
            <h3>Сумма по коммунальным счетам</h3>
            <p class="amount" :class="{ 'has-debt': totalInvoices > 0 }">
              {{ totalInvoices.toLocaleString('ru-RU') }} ₽
            </p>
          </div>
          <div class="stat-card">
            <h3>Общая сумма задолженности</h3>
            <p class="amount" :class="{ 'has-debt': totalCombined > 0 }">
              {{ totalCombined.toLocaleString('ru-RU') }} ₽
            </p>
          </div>
        </div>

        <!-- История долгов -->
        <div class="debt-history">
          <h3>История долгов</h3>
          <div class="table-container">
            <table>
              <thead>
                <tr>
                  <th>Дата</th>
                  <th>Дом</th>
                  <th>Квартира</th>
                  <th>Сумма</th>
                  <th>Описание</th>
                  <th>Статус</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="debt in filteredDebts" :key="debt.id">
                  <td>{{ formatDate(debt.date) }}</td>
                  <td>{{ getBuildingName(debt.buildingId) }}</td>
                  <td>{{ getApartmentNumber(debt.apartmentId) }}</td>
                  <td>{{ debt.amount.toLocaleString('ru-RU') }} ₽</td>
                  <td>{{ debt.description }}</td>
                  <td>
                    <span :class="debt.status === 'paid' ? 'status-paid' : 'status-pending'">
                      {{ debt.status === 'paid' ? 'Оплачено' : 'Ожидает оплаты' }}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- История коммунальных счетов -->
        <div class="invoices-history">
          <h3>История коммунальных счетов</h3>
          <div class="table-container">
            <table>
              <thead>
                <tr>
                  <th>Дата</th>
                  <th>Дом</th>
                  <th>Квартира</th>
                  <th>Сумма</th>
                  <th>Статус</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="invoice in filteredInvoices" :key="invoice.id">
                  <td>{{ formatDate(invoice.period.month) }} {{ invoice.period.year }}</td>
                  <td>{{ getBuildingName(invoice.buildingId) }}</td>
                  <td>{{ getApartmentNumber(invoice.apartmentId) }}</td>
                  <td>{{ invoice.total.toLocaleString('ru-RU') }} ₽</td>
                  <td>
                    <span :class="invoice.status === 'paid' ? 'status-paid' : 'status-pending'">
                      {{ invoice.status === 'paid' ? 'Оплачено' : 'Ожидает оплаты' }}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useBuildingsStore } from '../stores/buildings'
import { useApartmentsStore } from '../stores/apartments'
import { useDebtsStore } from '../stores/debts'
import { useInvoicesStore } from '../stores/invoices'

const props = defineProps({
  show: Boolean
})

const emit = defineEmits(['close'])

const buildingsStore = useBuildingsStore()
const apartmentsStore = useApartmentsStore()
const debtsStore = useDebtsStore()
const invoicesStore = useInvoicesStore()

// Состояния
const selectedBuilding = ref('')
const selectedApartment = ref('')
const buildings = ref([])
const apartments = ref([])
const debts = ref([])
const invoices = ref([])

// Вычисляемые свойства
const filteredApartments = computed(() => {
  if (!selectedBuilding.value) return []
  return apartments.value.filter(apt => apt.buildingId === selectedBuilding.value)
})

const filteredDebts = computed(() => {
  let result = debts.value
  if (selectedBuilding.value) {
    result = result.filter(d => d.buildingId === selectedBuilding.value)
  }
  if (selectedApartment.value) {
    result = result.filter(d => d.apartmentId === selectedApartment.value)
  }
  return result
})

const filteredInvoices = computed(() => {
  let result = invoices.value
  if (selectedBuilding.value) {
    result = result.filter(i => i.buildingId === selectedBuilding.value)
  }
  if (selectedApartment.value) {
    result = result.filter(i => i.apartmentId === selectedApartment.value)
  }
  return result
})

const totalDebt = computed(() => {
  return filteredDebts.value.reduce((sum, debt) => sum + (debt.amount || 0), 0)
})

const totalInvoices = computed(() => {
  return filteredInvoices.value.reduce((sum, invoice) => sum + (invoice.total || 0), 0)
})

const totalCombined = computed(() => {
  return totalDebt.value + totalInvoices.value
})

// Методы
const closeModal = () => {
  emit('close')
}

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('ru-RU')
}

const getBuildingName = (buildingId) => {
  const building = buildings.value.find(b => b.id === buildingId)
  return building ? building.name : 'Неизвестно'
}

const getApartmentNumber = (apartmentId) => {
  const apartment = apartments.value.find(a => a.id === apartmentId)
  return apartment ? apartment.number : 'Неизвестно'
}

const updateBuildingStats = () => {
  selectedApartment.value = ''
}

// Загрузка данных
onMounted(async () => {
  try {
    await buildingsStore.fetchBuildings()
    await apartmentsStore.fetchApartments()
    await debtsStore.fetchDebts()
    await invoicesStore.fetchInvoices()
    
    buildings.value = buildingsStore.buildings
    apartments.value = apartmentsStore.apartments
    debts.value = debtsStore.debts
    invoices.value = invoicesStore.invoices
  } catch (error) {
    console.error('Ошибка при загрузке данных:', error)
  }
})
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background-color: white;
  border-radius: 8px;
  width: 90%;
  max-width: 1000px;
  max-height: 90vh;
  overflow-y: auto;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #eee;
}

.close-button {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #666;
}

.modal-body {
  padding: 1rem;
}

.filters {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

.filters select {
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ddd;
}

.stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
}

.stat-card {
  background-color: #f8f9fa;
  padding: 1rem;
  border-radius: 4px;
  text-align: center;
}

.stat-card h3 {
  margin: 0 0 0.5rem 0;
  color: #666;
  font-size: 0.9rem;
}

.amount {
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
}

.amount.has-debt {
  color: #e74c3c;
}

.debt-history,
.invoices-history {
  margin-top: 2rem;
}

.debt-history h3,
.invoices-history h3 {
  margin-bottom: 1rem;
  color: #2c3e50;
}

.table-container {
  overflow-x: auto;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 1rem;
  text-align: left;
  border-bottom: 1px solid #eee;
}

th {
  background-color: #f8f9fa;
  font-weight: 500;
  color: #2c3e50;
}

.status-paid {
  color: #27ae60;
  font-weight: 500;
}

.status-pending {
  color: #e74c3c;
  font-weight: 500;
}
</style> 