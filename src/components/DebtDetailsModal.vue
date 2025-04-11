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
            <h3>Средняя сумма платежа</h3>
            <p class="amount">{{ averagePayment.toLocaleString('ru-RU') }} ₽</p>
          </div>
          <div class="stat-card">
            <h3>Процент оплаты</h3>
            <p class="amount">{{ paymentPercentage }}%</p>
          </div>
        </div>

        <!-- История платежей -->
        <div class="payment-history">
          <h3>История платежей</h3>
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
                <tr v-for="payment in filteredPayments" :key="payment.id">
                  <td>{{ formatDate(payment.date) }}</td>
                  <td>{{ getBuildingName(payment.buildingId) }}</td>
                  <td>{{ getApartmentNumber(payment.apartmentId) }}</td>
                  <td>{{ payment.amount.toLocaleString('ru-RU') }} ₽</td>
                  <td>
                    <span :class="payment.status === 'paid' ? 'status-paid' : 'status-pending'">
                      {{ payment.status === 'paid' ? 'Оплачено' : 'Ожидает оплаты' }}
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

const props = defineProps({
  show: Boolean
})

const emit = defineEmits(['close'])

const buildingsStore = useBuildingsStore()
const apartmentsStore = useApartmentsStore()

// Состояния
const selectedBuilding = ref('')
const selectedApartment = ref('')
const buildings = ref([])
const apartments = ref([])
const payments = ref([])

// Временные данные для демонстрации
const mockPayments = [
  { id: 1, date: '2024-03-01', buildingId: '1', apartmentId: '1', amount: 5000, status: 'paid' },
  { id: 2, date: '2024-03-15', buildingId: '1', apartmentId: '2', amount: 6000, status: 'pending' },
  { id: 3, date: '2024-03-20', buildingId: '2', apartmentId: '3', amount: 5500, status: 'paid' },
  { id: 4, date: '2024-03-25', buildingId: '2', apartmentId: '4', amount: 7000, status: 'pending' }
]

// Вычисляемые свойства
const filteredApartments = computed(() => {
  if (!selectedBuilding.value) return []
  return apartments.value.filter(apt => apt.buildingId === selectedBuilding.value)
})

const filteredPayments = computed(() => {
  let result = payments.value
  if (selectedBuilding.value) {
    result = result.filter(p => p.buildingId === selectedBuilding.value)
  }
  if (selectedApartment.value) {
    result = result.filter(p => p.apartmentId === selectedApartment.value)
  }
  return result
})

const totalDebt = computed(() => {
  return filteredPayments.value
    .filter(p => p.status === 'pending')
    .reduce((sum, p) => sum + p.amount, 0)
})

const averagePayment = computed(() => {
  const paidPayments = filteredPayments.value.filter(p => p.status === 'paid')
  if (paidPayments.length === 0) return 0
  return paidPayments.reduce((sum, p) => sum + p.amount, 0) / paidPayments.length
})

const paymentPercentage = computed(() => {
  const total = filteredPayments.value.length
  const paid = filteredPayments.value.filter(p => p.status === 'paid').length
  return total > 0 ? Math.round((paid / total) * 100) : 0
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
    buildings.value = buildingsStore.buildings
    apartments.value = apartmentsStore.apartments
    payments.value = mockPayments
  } catch (error) {
    console.error('Error loading data:', error)
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

.table-container {
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 0.75rem;
  text-align: left;
  border-bottom: 1px solid #eee;
}

th {
  background-color: #f8f9fa;
  font-weight: 500;
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