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
            <p><i class="fas fa-calendar"></i> {{ formatDate(utility.createdAt) }}</p>
            <p><i class="fas fa-money-bill"></i> {{ formatPrice(utility.rate) }} ₽/{{ utility.unit }}</p>
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

    <!-- Модальное окно добавления/редактирования услуги -->
    <div v-if="showAddModal" class="modal">
      <div class="modal-content">
        <h3>{{ editingUtility ? 'Редактировать услугу' : 'Добавить услугу' }}</h3>
        <div class="form-group">
          <label>Название</label>
          <input v-model="utilityForm.name" type="text" required>
        </div>
        <div class="form-group">
          <label>Здание</label>
          <select v-model="utilityForm.buildingId" required>
            <option value="">Выберите здание</option>
            <option v-for="building in buildingsStore.buildings" 
                    :key="building.id" 
                    :value="building.id">
              {{ building.name }}
            </option>
          </select>
        </div>
        <div class="form-group">
          <label>Единица измерения</label>
          <select v-model="utilityForm.unit" required>
            <option value="кВт">кВт</option>
            <option value="куб.м">куб.м</option>
            <option value="шт">шт</option>
            <option value="мес">мес</option>
          </select>
        </div>
        <div class="form-group">
          <label>Тариф</label>
          <input v-model="utilityForm.rate" type="number" step="0.01" required>
        </div>
        <div class="form-group">
          <label>Дата ввода</label>
          <input v-model="utilityForm.createdAt" type="date" required>
        </div>
        <div class="form-group">
          <label>Статус</label>
          <select v-model="utilityForm.status" required>
            <option value="active">Активна</option>
            <option value="inactive">Неактивна</option>
          </select>
        </div>
        <div class="modal-actions">
          <button class="btn btn-secondary" @click="closeAddModal">Отмена</button>
          <button class="btn btn-primary" @click="saveUtility">Сохранить</button>
        </div>
      </div>
    </div>

    <!-- Модальное окно выставления счета -->
    <div v-if="showInvoiceModal" class="modal">
      <div class="modal-content invoice-modal">
        <h3>Выставить счёт</h3>
        <div class="form-row">
          <div class="form-group">
            <label>Здание</label>
            <select v-model="invoiceForm.buildingId" @change="loadApartments" required>
              <option value="">Выберите здание</option>
              <option v-for="building in buildingsStore.buildings" 
                      :key="building.id" 
                      :value="building.id">
                {{ building.name }}
              </option>
            </select>
          </div>
          <div class="form-group">
            <label>Квартира</label>
            <select v-model="invoiceForm.apartmentId" @change="loadResidents" required>
              <option value="">Выберите квартиру</option>
              <option v-for="apartment in filteredApartments" 
                      :key="apartment.id" 
                      :value="apartment.id">
                {{ apartment.number }}
              </option>
            </select>
          </div>
          <div class="form-group">
            <label>Жилец</label>
            <select v-model="invoiceForm.residentId" required>
              <option value="">Выберите жильца</option>
              <option v-for="resident in filteredResidents" 
                      :key="resident.id" 
                      :value="resident.id">
                {{ resident.lastName }} {{ resident.firstName }}
              </option>
            </select>
          </div>
        </div>
        <div class="form-row">
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
        </div>
        <div class="services-list">
          <h4>Услуги</h4>
          <div v-for="service in utilitiesStore.utilities" :key="service.id" class="service-item">
            <div class="service-info">
              <span>{{ service.name }}</span>
              <span class="service-rate">{{ formatPrice(service.rate) }} ₽/{{ service.unit }}</span>
            </div>
            <input v-model="invoiceForm.services[service.id]" 
                   type="number" 
                   :placeholder="'Количество ' + service.unit"
                   min="0"
                   step="0.01">
          </div>
        </div>
        <div class="invoice-summary">
          <div class="summary-item">
            <span>Сумма по дому:</span>
            <span class="amount">{{ formatPrice(calculateBuildingTotal) }} ₽</span>
          </div>
          <div class="summary-item">
            <span>Сумма по квартире:</span>
            <span class="amount">{{ formatPrice(calculateApartmentTotal) }} ₽</span>
          </div>
          <div class="summary-item">
            <span>Общий долг:</span>
            <span class="amount">{{ formatPrice(calculateTotalDebt) }} ₽</span>
          </div>
          <div class="summary-item total">
            <span>Итого к оплате:</span>
            <span class="amount">{{ formatPrice(calculateTotal) }} ₽</span>
          </div>
        </div>
        <div class="modal-actions">
          <button class="btn btn-secondary" @click="closeInvoiceModal">Отмена</button>
          <button class="btn btn-primary" @click="saveInvoice">Сохранить</button>
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
  buildingId: '',
  unit: '',
  rate: '',
  status: 'active',
  createdAt: new Date().toISOString().split('T')[0]
})

const invoiceForm = ref({
  buildingId: '',
  apartmentId: '',
  residentId: '',
  period: {
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear()
  },
  services: {}
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
  if (!date) return 'Дата не указана'
  try {
    return new Date(date).toLocaleDateString('ru-RU')
  } catch (error) {
    console.error('Error formatting date:', error)
    return 'Неверный формат даты'
  }
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
    buildingId: '',
    unit: '',
    rate: '',
    status: 'active',
    createdAt: new Date().toISOString().split('T')[0]
  }
}

const editUtility = (utility) => {
  editingUtility.value = utility
  utilityForm.value = {
    name: utility.name,
    buildingId: utility.buildingId,
    unit: utility.unit,
    rate: utility.rate,
    status: utility.status,
    createdAt: utility.createdAt ? new Date(utility.createdAt).toISOString().split('T')[0] : new Date().toISOString().split('T')[0]
  }
  showAddModal.value = true
}

const saveUtility = async () => {

  try {
    const utilityData = {
      name: utilityForm.value.name.trim(),
      buildingId: utilityForm.value.buildingId,
      unit: utilityForm.value.unit.trim(),
      rate: parseFloat(utilityForm.value.rate),
      status: utilityForm.value.status,
      createdAt: new Date(utilityForm.value.createdAt).toISOString()
    }

    if (editingUtility.value) {
      await utilitiesStore.updateUtility(editingUtility.value.id, utilityData)
      console.log('Utility updated:', utilityData)
    } else {
      await utilitiesStore.addUtility(utilityData)
      console.log('Utility added:', utilityData)
    }

    showAddModal.value = false
    resetForm()
  } catch (error) {
    console.error('Error saving utility:', error)
    alert('Ошибка при сохранении услуги: ' + error.message)
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
    services: {}
  }
}

const loadApartments = () => {
  invoiceForm.value.apartmentId = ''
  invoiceForm.value.residentId = ''
}

const loadResidents = () => {
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
    buildingId: '',
    unit: '',
    rate: '',
    status: 'active',
    createdAt: new Date().toISOString().split('T')[0]
  }
  editingUtility.value = null
}

const filterUtilities = () => {
  // Implementation of filterUtilities method
}

// Вычисляемые свойства для сумм
const calculateBuildingTotal = computed(() => {
  // Здесь будет логика расчета суммы по дому
  return 0
})

const calculateApartmentTotal = computed(() => {
  // Здесь будет логика расчета суммы по квартире
  return 0
})

const calculateTotalDebt = computed(() => {
  // Здесь будет логика расчета общего долга
  return 0
})

const calculateTotal = computed(() => {
  // Здесь будет логика расчета итоговой суммы
  return 0
})

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

.invoice-modal {
  max-width: 1620px;
  max-height: 600px;
  overflow-y: auto;
  padding: 20px;
}

.form-row {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
}

.form-row .form-group {
  flex: 1;
  min-width: 200px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: #333;
}

.form-group select,
.form-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
}

.period-select {
  display: flex;
  gap: 10px;
}

.period-select select {
  flex: 1;
}

.services-list {
  margin: 20px 0;
  max-height: 300px;
  overflow-y: auto;
}

.service-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid #eee;
  gap: 20px;
}

.service-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.service-rate {
  color: #666;
  font-size: 0.9em;
}

.service-item input {
  width: 150px;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.invoice-summary {
  margin-top: 20px;
  padding: 20px;
  background: #f5f5f5;
  border-radius: 8px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.summary-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background: white;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.summary-item.total {
  grid-column: 1 / -1;
  font-weight: bold;
  font-size: 1.2em;
  padding: 15px;
  background: #e3f2fd;
}

.amount {
  font-weight: bold;
  color: #1976d2;
}

.modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #eee;
}

.modal-actions button {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
}

.modal-actions .btn-secondary {
  background: #f5f5f5;
  color: #333;
}

.modal-actions .btn-primary {
  background: var(--primary-color);
  color: white;
}

@media (max-width: 1700px) {
  .invoice-modal {
    max-width: 95vw;
  }
  
  .services-list {
    max-height: 250px;
  }
}

@media (max-width: 1200px) {
  .invoice-summary {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .form-row {
    flex-direction: column;
  }
  
  .service-item {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .service-item input {
    width: 100%;
  }
}
</style> 