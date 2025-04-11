<template>
  <div class="utilities">
    <div class="header">
      <h1>Коммунальные услуги</h1>
      <button class="add-button" @click="showAddModal = true">
        <i class="fas fa-plus"></i>
        Добавить услугу
      </button>
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
            <p><i class="fas fa-money-bill"></i> {{ formatPrice(utility.price) }} ₽</p>
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
        <h2>{{ editingUtility ? 'Редактировать услугу' : 'Добавить услугу' }}</h2>
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
            <label>Стоимость</label>
            <input v-model="utilityForm.price" type="number" required>
          </div>
          <div class="form-group">
            <label>Статус</label>
            <select v-model="utilityForm.status" required>
              <option value="active">Активна</option>
              <option value="inactive">Неактивна</option>
            </select>
          </div>
          <div class="form-actions">
            <button type="button" @click="showAddModal = false">Отмена</button>
            <button type="submit">Сохранить</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useBuildingsStore } from '../stores/buildings'

const buildingsStore = useBuildingsStore()
const loading = ref(false)
const showAddModal = ref(false)
const editingUtility = ref(null)
const searchQuery = ref('')
const selectedBuilding = ref('')
const selectedStatus = ref('')

const utilityForm = ref({
  name: '',
  buildingId: '',
  startDate: '',
  price: '',
  status: 'active'
})

const utilities = ref([
  {
    id: 1,
    name: 'Отопление',
    buildingId: 1,
    startDate: '2024-01-01',
    price: 1500,
    status: 'active'
  },
  {
    id: 2,
    name: 'Водоснабжение',
    buildingId: 1,
    startDate: '2024-01-01',
    price: 800,
    status: 'active'
  }
])

const filteredUtilities = computed(() => {
  return utilities.value.filter(utility => {
    const matchesSearch = utility.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    const matchesBuilding = !selectedBuilding.value || utility.buildingId === selectedBuilding.value
    const matchesStatus = !selectedStatus.value || utility.status === selectedStatus.value
    return matchesSearch && matchesBuilding && matchesStatus
  })
})

const buildings = computed(() => buildingsStore.buildings)

const getBuildingName = (buildingId) => {
  const building = buildings.value.find(b => b.id === buildingId)
  return building ? building.name : 'Неизвестный дом'
}

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('ru-RU')
}

const formatPrice = (price) => {
  return price.toLocaleString('ru-RU')
}

const editUtility = (utility) => {
  editingUtility.value = utility
  utilityForm.value = { ...utility }
  showAddModal.value = true
}

const saveUtility = () => {
  if (editingUtility.value) {
    const index = utilities.value.findIndex(u => u.id === editingUtility.value.id)
    if (index !== -1) {
      utilities.value[index] = { ...utilityForm.value, id: editingUtility.value.id }
    }
  } else {
    const newId = Math.max(...utilities.value.map(u => u.id), 0) + 1
    utilities.value.push({ ...utilityForm.value, id: newId })
  }
  showAddModal.value = false
  editingUtility.value = null
  utilityForm.value = {
    name: '',
    buildingId: '',
    startDate: '',
    price: '',
    status: 'active'
  }
}

const deleteUtility = (id) => {
  if (confirm('Вы уверены, что хотите удалить эту услугу?')) {
    utilities.value = utilities.value.filter(u => u.id !== id)
  }
}

onMounted(async () => {
  loading.value = true
  try {
    await buildingsStore.fetchBuildings()
  } catch (error) {
    console.error('Error loading buildings:', error)
  } finally {
    loading.value = false
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