<template>
  <div class="utilities">
    <div class="header">
      <h1>Коммунальные услуги</h1>
      <div class="actions">
        <button class="add-button" @click="showAddModal = true">
          <i class="fas fa-plus"></i>
          Добавить услугу
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

    <!-- Список услуг -->
    <div class="utilities-list">
      <div v-if="loading" class="loading">
        <i class="fas fa-spinner fa-spin"></i>
        <p>Загрузка услуг...</p>
      </div>
      
      <div v-else-if="filteredUtilities.length === 0" class="no-results">
        <i class="fas fa-search"></i>
        <p>Услуги не найдены</p>
      </div>
      
      <div v-else class="utilities-grid">
        <div v-for="utility in filteredUtilities" :key="utility.id" class="utility-card">
          <div class="utility-header">
            <h3>{{ utility.name }}</h3>
            <div class="utility-actions">
              <button @click="editUtility(utility)" class="edit-button">
                <i class="fas fa-edit"></i>
              </button>
              <button @click="deleteUtility(utility.id)" class="delete-button">
                <i class="fas fa-trash"></i>
              </button>
              <span :class="['status-badge', utility.status]">
                {{ utility.status === 'active' ? 'Активна' : 'Неактивна' }}
              </span>
            </div>
          </div>
          <div class="utility-info">
            <p><i class="fas fa-building"></i> {{ getBuildingName(utility.buildingId) }}</p>
            <p><i class="fas fa-money-bill"></i> {{ formatPrice(utility.rate) }} ₽/{{ utility.unit }}</p>
            <p><i class="fas fa-calendar"></i> Создана: {{ formatDate(utility.createdAt) }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Модальное окно добавления/редактирования услуги -->
    <div v-if="showAddModal" class="modal">
      <div class="modal-content">
        <div class="modal-header">
          <h3>{{ editingUtility ? 'Редактировать услугу' : 'Добавить услугу' }}</h3>
          <button class="close-button" @click="closeAddModal">&times;</button>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label>Название услуги</label>
            <input 
              v-model="utilityForm.name" 
              type="text" 
              placeholder="Введите название услуги"
              required
            >
          </div>
          <div class="form-group">
            <label>Здание</label>
            <select v-model="utilityForm.buildingId" required>
              <option value="">Выберите здание</option>
              <option v-for="building in buildings" :key="building.id" :value="building.id">
                {{ building.name }}
              </option>
            </select>
          </div>
          <div class="form-group">
            <label>Единица измерения</label>
            <input 
              v-model="utilityForm.unit" 
              type="text" 
              placeholder="Например: кВт⋅ч, м³"
              required
            >
          </div>
          <div class="form-group">
            <label>Тариф (₽)</label>
            <input 
              v-model="utilityForm.rate" 
              type="number" 
              step="0.01"
              min="0"
              placeholder="Введите тариф"
              required
            >
          </div>
          <div class="form-group">
            <label>Статус</label>
            <select v-model="utilityForm.status">
              <option value="active">Активна</option>
              <option value="inactive">Неактивна</option>
            </select>
          </div>
          <div class="form-group">
            <label>Дата создания</label>
            <input 
              v-model="utilityForm.createdAt" 
              type="date"
              required
            >
          </div>
        </div>
        <div class="modal-actions">
          <button class="btn btn-secondary" @click="closeAddModal">Отмена</button>
          <button class="btn btn-primary" @click="saveUtility">Сохранить</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useBuildingsStore } from '../stores/buildings'
import { useUtilitiesStore } from '../stores/utilities'

const buildingsStore = useBuildingsStore()
const utilitiesStore = useUtilitiesStore()

// Состояния
const showAddModal = ref(false)
const editingUtility = ref(null)
const searchQuery = ref('')
const selectedBuilding = ref('')
const selectedStatus = ref('')

// Форма
const utilityForm = ref({
  name: '',
  buildingId: '',
  unit: '',
  rate: '',
  status: 'active',
  createdAt: new Date().toISOString().split('T')[0]
})

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

// Методы
const formatPrice = (price) => {
  return new Intl.NumberFormat('ru-RU').format(price)
}

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('ru-RU')
}

const getBuildingName = (buildingId) => {
  const building = buildings.value.find(b => b.id === buildingId)
  return building ? building.name : 'Неизвестное здание'
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
    } else {
      await utilitiesStore.addUtility(utilityData)
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

const closeAddModal = () => {
  showAddModal.value = false
  resetForm()
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

// Инициализация
onMounted(async () => {
  try {
    await Promise.all([
      buildingsStore.fetchBuildings(),
      utilitiesStore.fetchUtilities()
    ])
  } catch (error) {
    console.error('Error initializing utilities module:', error)
  }
})
</script>

<style lang="scss" scoped>
// Variables
$primary-color: #1976D2;
$primary-color-dark: color.adjust($primary-color, $lightness: -10%);
$secondary-color: #26A69A;
$accent-color: #9C27B0;
$dark-color: #1D1D1D;
$positive-color: #21BA45;
$negative-color: #C10015;
$info-color: #31CCEC;
$warning-color: #F2C037;

.utilities {
  padding: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.actions {
  display: flex;
  gap: 10px;
}

.add-button {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: var(--primary-color);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
}

.filters {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.search-box {
  flex: 1;
  min-width: 300px;
  position: relative;
  
  i {
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    color: #666;
  }
  
  input {
    width: 100%;
    padding: 10px 10px 10px 35px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 14px;
  }
}

.filter-options {
  display: flex;
  gap: 10px;
  
  select {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    background-color: white;
    min-width: 150px;
  }
}

.utilities-list {
  margin-top: 20px;
}

.utilities-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.utility-card {
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.utility-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  
  h3 {
    margin: 0;
    color: #333;
  }
}

.utility-actions {
  display: flex;
  gap: 8px;
  align-items: center;
}

.utility-info {
  display: flex;
  flex-direction: column;
  gap: 8px;
  
  p {
    margin: 0;
    color: #666;
    display: flex;
    align-items: center;
    gap: 8px;
  }
}

.edit-button,
.delete-button {
  padding: 6px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.edit-button {
  background: #e3f2fd;
  color: #1976d2;
}

.delete-button {
  background: #ffebee;
  color: #d32f2f;
}

.status-badge {
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 12px;
}

.status-badge.active {
  background: #e6f4ea;
  color: #1e7e34;
}

.status-badge.inactive {
  background: #fff3e0;
  color: #e65100;
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
  border-radius: 8px;
  width: 100%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
}

.modal-header {
  padding: 20px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  h3 {
    margin: 0;
    color: #333;
  }
}

.close-button {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #666;
}

.modal-body {
  padding: 20px;
}

.form-group {
  margin-bottom: 20px;
  
  label {
    display: block;
    margin-bottom: 8px;
    color: #333;
    font-weight: 500;
  }
  
  input,
  select {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 14px;
  }
}

.modal-actions {
  padding: 20px;
  border-top: 1px solid #eee;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  
  button {
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 500;
  }
  
  .btn-secondary {
    background: #f5f5f5;
    color: #333;
  }
  
  .btn-primary {
    background: var(--primary-color);
    color: white;
  }
}

.loading,
.no-results {
  text-align: center;
  padding: 40px;
  color: #666;
  
  i {
    font-size: 32px;
    margin-bottom: 16px;
  }
}

@media (max-width: 768px) {
  .header {
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
  }
  
  .filters {
    flex-direction: column;
  }
  
  .filter-options {
    flex-direction: column;
    
    select {
      width: 100%;
    }
  }
  
  .utilities-grid {
    grid-template-columns: 1fr;
  }
  
  .modal-content {
    margin: 20px;
  }
}
</style> 