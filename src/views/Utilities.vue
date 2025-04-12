<template>
  <div class="utilities">
    <div class="header">
      <h1>Коммунальные услуги</h1>
      <div class="actions">
        <button class="add-button" @click="showAddModal = true">
          <i class="fas fa-plus"></i>
          Добавить услугу
        </button>
        <button class="btn btn-success" @click="showInvoiceModal = true">
          <i class="fas fa-file-invoice"></i> Выставить счёт
        </button>
      </div>
    </div>

    <div class="filters">
      <div class="search-box">
        <i class="fas fa-search"></i>
        <input 
          v-model="searchQuery" 
          type="text" 
          placeholder="Поиск по услугам..."
          @input="filterUtilities"
        >
      </div>
      <div class="filter-options">
        <select v-model="selectedBuilding" @change="filterUtilities">
          <option value="">Все дома</option>
          <option v-for="building in buildings" :key="building.id" :value="building.id">
            {{ building.name }}
          </option>
        </select>
        <select v-model="selectedStatus" @change="filterUtilities">
          <option value="">Все статусы</option>
          <option value="active">Активные</option>
          <option value="inactive">Неактивные</option>
        </select>
      </div>
    </div>

    <div class="utilities-list" v-if="!loading">
      <div v-if="filteredUtilities.length === 0" class="no-results">
        <i class="fas fa-search"></i>
        <p>Ничего не найдено</p>
      </div>
      <div v-else class="utilities-grid">
        <div v-for="utility in filteredUtilities" :key="utility.id" class="utility-card">
          <div class="utility-header">
            <h3>{{ utility.name }}</h3>
            <span :class="['status-badge', utility.status]">
              {{ utility.status === 'active' ? 'Активна' : 'Неактивна' }}
            </span>
          </div>
          <div class="utility-info">
            <p><i class="fas fa-building"></i> {{ getBuildingName(utility.buildingId) }}</p>
            <p><i class="fas fa-calendar"></i> {{ formatDate(utility.startDate) }}</p>
            <p><i class="fas fa-money-bill"></i> {{ formatPrice(utility.rate) }} ₽</p>
          </div>
          <div class="utility-actions">
            <button @click="editUtility(utility)" class="edit-button">
              <i class="fas fa-edit"></i>
            </button>
            <button @click="deleteUtility(utility.id)" class="delete-button">
              <i class="fas fa-trash"></i>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="loading">
      <i class="fas fa-spinner fa-spin"></i>
      <p>Загрузка...</p>
    </div>

    <!-- Модальное окно для добавления/редактирования -->
    <div v-if="showAddModal" class="modal">
      <div class="modal-content">
        <div class="modal-header">
          <h2>{{ editingUtility ? 'Редактировать услугу' : 'Добавить услугу' }}</h2>
          <button class="close-button" @click="showAddModal = false">
            <i class="fas fa-times"></i>
          </button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="saveUtility">
            <div class="form-group">
              <label>Название услуги</label>
              <input v-model="utilityForm.name" type="text" required>
            </div>
            <div class="form-group">
              <label>Дом</label>
              <select v-model="utilityForm.buildingId" required>
                <option v-for="building in buildings" :key="building.id" :value="building.id">
                  {{ building.name }}
                </option>
              </select>
            </div>
            <div class="form-group">
              <label>Дата начала</label>
              <input v-model="utilityForm.startDate" type="date" required>
            </div>
            <div class="form-group">
              <label>Тариф</label>
              <input v-model="utilityForm.rate" type="number" required>
            </div>
            <div class="form-group">
              <label>Статус</label>
              <select v-model="utilityForm.status" required>
                <option value="active">Активна</option>
                <option value="inactive">Неактивна</option>
              </select>
            </div>
            <div class="form-actions">
              <button type="button" class="btn btn-secondary" @click="showAddModal = false">Отмена</button>
              <button type="submit" class="btn btn-primary">Сохранить</button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <!-- Модальное окно выставления счета -->
    <div v-if="showInvoiceModal" class="modal">
      <div class="modal-content">
        <div class="modal-header">
          <h2>Выставить счёт</h2>
          <button class="close-button" @click="showInvoiceModal = false">
            <i class="fas fa-times"></i>
          </button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="saveInvoice">
            <div class="form-group">
              <label>Дом</label>
              <select v-model="invoiceForm.buildingId" @change="updateApartments" required>
                <option value="">Выберите дом</option>
                <option v-for="building in buildings" :key="building.id" :value="building.id">
                  {{ building.name }}
                </option>
              </select>
            </div>
            <div class="form-group">
              <label>Квартира</label>
              <select v-model="invoiceForm.apartmentId" @change="updateResidents" required>
                <option value="">Выберите квартиру</option>
                <option v-for="apartment in filteredApartments" :key="apartment.id" :value="apartment.id">
                  Кв. {{ apartment.number }}
                </option>
              </select>
            </div>
            <div class="form-group">
              <label>Жилец</label>
              <select v-model="invoiceForm.residentId" required>
                <option value="">Выберите жильца</option>
                <option v-for="resident in filteredResidents" :key="resident.id" :value="resident.id">
                  {{ resident.firstName }} {{ resident.lastName }}
                </option>
              </select>
            </div>
            <div class="form-group">
              <label>Период</label>
              <div class="period-select">
                <select v-model="invoiceForm.period.month" required>
                  <option v-for="(month, index) in months" :key="index" :value="index + 1">
                    {{ month }}
                  </option>
                </select>
                <select v-model="invoiceForm.period.year" required>
                  <option v-for="year in years" :key="year" :value="year">
                    {{ year }}
                  </option>
                </select>
              </div>
            </div>
            <div class="services-list">
              <h3>Услуги</h3>
              <div v-for="utility in utilities" :key="utility.id" class="service-item">
                <div class="service-info">
                  <span>{{ utility.name }}</span>
                  <span class="rate">{{ utility.rate }} ₽/{{ utility.unit }}</span>
                </div>
                <div class="service-input">
                  <input 
                    type="number" 
                    v-model="invoiceForm.services[utility.id]" 
                    :placeholder="`Количество ${utility.unit}`"
                    min="0"
                    step="0.01"
                  >
                </div>
              </div>
            </div>
            <div class="form-actions">
              <button type="button" class="btn btn-secondary" @click="showInvoiceModal = false">Отмена</button>
              <button type="submit" class="btn btn-primary">Выставить счёт</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useBuildingsStore } from '../stores/buildings'
import { useUtilitiesStore } from '../stores/utilities'
import { useApartmentsStore } from '../stores/apartments'
import { useResidentsStore } from '../stores/residents'

const buildingsStore = useBuildingsStore()
const utilitiesStore = useUtilitiesStore()
const apartmentsStore = useApartmentsStore()
const residentsStore = useResidentsStore()

// Состояния для модальных окон
const showAddModal = ref(false)
const showInvoiceModal = ref(false)
const editingUtility = ref(null)

// Состояния для фильтров
const searchQuery = ref('')
const selectedBuilding = ref('')
const selectedStatus = ref('')

// Формы
const utilityForm = ref({
  name: '',
  unit: '',
  rate: '',
  status: 'active'
})

const invoiceForm = ref({
  buildingId: '',
  apartmentId: '',
  residentId: '',
  period: {
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear()
  },
  services: []
})

// Списки для выбора периода
const months = [
  'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
  'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
]
const years = Array.from({ length: 5 }, (_, i) => new Date().getFullYear() - i)

// Вычисляемые свойства
const utilities = computed(() => utilitiesStore.utilities)
const loading = computed(() => utilitiesStore.loading)
const buildings = computed(() => buildingsStore.buildings)

const filteredUtilities = computed(() => {
  return utilities.value.filter(utility => {
    const matchesSearch = utility.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    const matchesBuilding = !selectedBuilding.value || utility.buildingId === selectedBuilding.value
    const matchesStatus = !selectedStatus.value || utility.status === selectedStatus.value
    return matchesSearch && matchesBuilding && matchesStatus
  })
})

const getBuildingName = (buildingId) => {
  const building = buildings.value.find(b => b.id === buildingId)
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

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('ru-RU')
}

const formatPrice = (value) => {
  if (value === undefined || value === null) return '0.00'
  const num = typeof value === 'string' ? parseFloat(value) : value
  return isNaN(num) ? '0.00' : num.toLocaleString('ru-RU', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })
}

const filteredApartments = computed(() => {
  if (!invoiceForm.value.buildingId) return []
  return apartmentsStore.apartments.filter(apt => 
    apt.buildingId === invoiceForm.value.buildingId
  )
})

const filteredResidents = computed(() => {
  if (!invoiceForm.value.apartmentId) return []
  return residentsStore.residents.filter(resident => 
    resident.apartmentId === invoiceForm.value.apartmentId
  )
})

const closeAddModal = () => {
  showAddModal.value = false
  editingUtility.value = null
  utilityForm.value = {
    name: '',
    unit: '',
    rate: '',
    status: 'active'
  }
}

const editUtility = (utility) => {
  editingUtility.value = utility
  utilityForm.value = {
    name: utility.name,
    unit: utility.unit,
    rate: utility.rate,
    status: utility.status
  }
  showAddModal.value = true
}

const saveUtility = async () => {
 
  try {
    const utilityData = {
      name: utilityForm.value.name.trim(),
      unit: utilityForm.value.unit.trim(),
      rate: parseFloat(utilityForm.value.rate),
      status: utilityForm.value.status
    }

    if (editingUtility.value) {
      await utilitiesStore.updateUtility(editingUtility.value.id, utilityData)
    } else {
      await utilitiesStore.addUtility(utilityData)
    }

    showAddModal.value = false
    resetForm()
  } catch (error) {
    console.error('Error saving utility:', error)
    alert('Ошибка при сохранении услуги')
  }
}

const deleteUtility = async (id) => {
  if (confirm('Вы уверены, что хотите удалить эту услугу?')) {
    try {
      await utilitiesStore.deleteUtility(id)
    } catch (error) {
      console.error('Error deleting utility:', error)
      alert('Ошибка при удалении услуги')
    }
  }
}

const closeInvoiceModal = () => {
  showInvoiceModal.value = false
  invoiceForm.value = {
    buildingId: '',
    apartmentId: '',
    residentId: '',
    period: {
      month: new Date().getMonth() + 1,
      year: new Date().getFullYear()
    },
    services: []
  }
}

const updateApartments = () => {
  invoiceForm.value.apartmentId = ''
  invoiceForm.value.residentId = ''
}

const updateResidents = () => {
  invoiceForm.value.residentId = ''
}

const saveInvoice = async () => {
  try {
    console.log('Saving invoice:', invoiceForm.value)
    closeInvoiceModal()
  } catch (error) {
    console.error('Error saving invoice:', error)
    alert('Ошибка при сохранении счета: ' + error.message)
  }
}

const resetForm = () => {
  utilityForm.value = {
    name: '',
    unit: '',
    rate: '',
    status: 'active'
  }
  editingUtility.value = null
}

const filterUtilities = () => {
  // Implementation of filterUtilities method
}

onMounted(async () => {
  try {
    // Загружаем данные последовательно
    console.log('Loading utilities...')
    await utilitiesStore.fetchUtilities()
    console.log('Utilities loaded:', utilitiesStore.utilities.value)
    
    await buildingsStore.fetchBuildings()
    await apartmentsStore.fetchApartments()
    await residentsStore.fetchResidents()
  } catch (error) {
    console.error('Error loading data:', error)
    alert('Ошибка при загрузке данных: ' + error.message)
  }
})
</script>

<style scoped>
.utilities {
  padding: 2rem;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.add-button {
  background: var(--primary-color);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: background-color 0.2s;
}

.add-button:hover {
  background: var(--primary-color-dark);
}

.filters {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.search-box {
  flex: 1;
  min-width: 200px;
  position: relative;
}

.search-box input {
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 2.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.search-box i {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #666;
}

.filter-options {
  display: flex;
  gap: 1rem;
}

.filter-options select {
  padding: 0.75rem 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-width: 150px;
}

.utilities-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}

.utility-card {
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.utility-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.status-badge {
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.875rem;
}

.status-badge.active {
  background: #e6f4ea;
  color: #1e7e34;
}

.status-badge.inactive {
  background: #f8d7da;
  color: #dc3545;
}

.utility-info {
  margin-bottom: 1.5rem;
}

.utility-info p {
  margin: 0.5rem 0;
  color: #666;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.utility-actions {
  display: flex;
  gap: 0.5rem;
  justify-content: flex-end;
}

.edit-button, .delete-button {
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.edit-button {
  background: #e3f2fd;
  color: #1976d2;
}

.delete-button {
  background: #ffebee;
  color: #d32f2f;
}

.edit-button:hover {
  background: #bbdefb;
}

.delete-button:hover {
  background: #ffcdd2;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  width: 100%;
  max-width: 500px;
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

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: #333;
}

.form-group input,
.form-group select {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 2rem;
}

.form-actions button {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.form-actions button[type="button"] {
  background: #f5f5f5;
  color: #333;
}

.form-actions button[type="submit"] {
  background: var(--primary-color);
  color: white;
}

.loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  color: #666;
}

.loading i {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.no-results {
  text-align: center;
  padding: 2rem;
  color: #666;
}

.no-results i {
  font-size: 2rem;
  margin-bottom: 1rem;
}

@media (max-width: 768px) {
  .utilities {
    padding: 1rem;
  }

  .header {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }

  .filters {
    flex-direction: column;
  }

  .filter-options {
    flex-direction: column;
  }

  .filter-options select {
    width: 100%;
  }
}
</style> 