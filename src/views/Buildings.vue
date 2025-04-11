<template>
  <div class="buildings">
    <div class="header">
      <h1>Дома</h1>
      <button class="add-button" @click="showAddModal = true">
        <i class="fas fa-plus"></i>
        Добавить дом
      </button>
    </div>

    <div class="filters">
      <div class="search-box">
        <i class="fas fa-search"></i>
        <input 
          v-model="searchQuery" 
          type="text" 
          placeholder="Поиск по домам..."
          @input="filterBuildings"
        >
      </div>
    </div>

    <div class="buildings-list" v-if="!loading">
      <div v-if="filteredBuildings.length === 0" class="no-results">
        <i class="fas fa-search"></i>
        <p>Ничего не найдено</p>
      </div>
      <div v-else class="buildings-grid">
        <div v-for="building in filteredBuildings" :key="building.id" class="building-card">
          <div class="building-header">
            <h3>{{ building.name }}</h3>
            <span class="status-badge" :class="{ active: building.status === 'active' }">
              {{ building.status === 'active' ? 'Активен' : 'Неактивен' }}
            </span>
          </div>
          <div class="building-info">
            <p><i class="fas fa-map-marker-alt"></i> {{ building.address }}</p>
            <p><i class="fas fa-building"></i> {{ building.floors }} этажей</p>
            <p><i class="fas fa-door-open"></i> {{ building.apartmentsCount }} квартир</p>
          </div>
          <div class="building-actions">
            <button @click="editBuilding(building)" class="edit-button">
              <i class="fas fa-edit"></i>
            </button>
            <button @click="deleteBuilding(building.id)" class="delete-button">
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

    <!-- Модальное окно для добавления/редактирования дома -->
    <div v-if="showAddModal" class="modal">
      <div class="modal-content">
        <h2>{{ editingBuilding ? 'Редактировать дом' : 'Добавить дом' }}</h2>
        <form @submit.prevent="saveBuilding">
          <div class="form-group">
            <label>Название</label>
            <input v-model="buildingForm.name" type="text" required>
          </div>
          <div class="form-group">
            <label>Адрес</label>
            <input v-model="buildingForm.address" type="text" required>
          </div>
          <div class="form-group">
            <label>Количество этажей</label>
            <input v-model="buildingForm.floors" type="number" required min="1">
          </div>
          <div class="form-group">
            <label>Количество квартир</label>
            <input v-model="buildingForm.apartmentsCount" type="number" required min="1">
          </div>
          <div class="form-group">
            <label>Статус</label>
            <select v-model="buildingForm.status" required>
              <option value="active">Активен</option>
              <option value="inactive">Неактивен</option>
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
/**
 * Импорты необходимых функций и хранилищ
 */
import { ref, computed, onMounted } from 'vue'
import { useBuildingsStore } from '../stores/buildings'

/**
 * Инициализация хранилища
 */
const buildingsStore = useBuildingsStore()

/**
 * Состояния компонента
 */
const loading = ref(false) // Флаг загрузки данных
const showAddModal = ref(false) // Видимость модального окна добавления/редактирования
const editingBuilding = ref(null) // Текущий редактируемый дом
const searchQuery = ref('') // Поисковый запрос

/**
 * Форма для добавления/редактирования дома
 */
const buildingForm = ref({
  name: '',
  address: '',
  floors: '',
  apartmentsCount: '',
  status: 'active'
})

/**
 * Вычисляемое свойство для получения списка домов
 */
const buildings = computed(() => buildingsStore.buildings)

/**
 * Вычисляемое свойство для фильтрации домов по поисковому запросу
 */
const filteredBuildings = computed(() => {
  if (!searchQuery.value) return buildings.value
  const query = searchQuery.value.toLowerCase()
  return buildings.value.filter(building => 
    building.name.toLowerCase().includes(query) ||
    building.address.toLowerCase().includes(query)
  )
})

/**
 * Функция редактирования дома
 */
const editBuilding = (building) => {
  editingBuilding.value = building
  buildingForm.value = {
    name: building.name,
    address: building.address,
    floors: building.floors,
    apartmentsCount: building.apartmentsCount,
    status: building.status
  }
  showAddModal.value = true
}

/**
 * Функция сохранения дома
 */
const saveBuilding = async () => {
  try {
    const buildingData = {
      name: buildingForm.value.name,
      address: buildingForm.value.address,
      floors: parseInt(buildingForm.value.floors),
      apartmentsCount: parseInt(buildingForm.value.apartmentsCount),
      status: buildingForm.value.status
    }

    // Обновление или добавление дома
    if (editingBuilding.value) {
      await buildingsStore.updateBuilding(editingBuilding.value.id, buildingData)
    } else {
      await buildingsStore.addBuilding(buildingData)
    }

    // Сброс формы и закрытие модального окна
    showAddModal.value = false
    editingBuilding.value = null
    buildingForm.value = {
      name: '',
      address: '',
      floors: '',
      apartmentsCount: '',
      status: 'active'
    }
  } catch (error) {
    console.error('Error saving building:', error)
    alert('Ошибка при сохранении дома: ' + error.message)
  }
}

/**
 * Функция удаления дома
 */
const deleteBuilding = async (id) => {
  if (confirm('Вы уверены, что хотите удалить этот дом?')) {
    try {
      await buildingsStore.deleteBuilding(id)
    } catch (error) {
      console.error('Error deleting building:', error)
      alert('Ошибка при удалении дома: ' + error.message)
    }
  }
}

/**
 * Загрузка данных при монтировании компонента
 */
onMounted(async () => {
  try {
    await buildingsStore.fetchBuildings()
  } catch (error) {
    console.error('Error loading buildings:', error)
    alert('Ошибка при загрузке домов: ' + error.message)
  }
})
</script>

<style scoped>
.buildings {
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
  margin-bottom: 2rem;
}

.search-box {
  position: relative;
  max-width: 400px;
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

.buildings-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}

.building-card {
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.building-header {
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

.status-badge:not(.active) {
  background: #f8d7da;
  color: #dc3545;
}

.building-info {
  margin-bottom: 1.5rem;
}

.building-info p {
  margin: 0.5rem 0;
  color: #666;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.building-actions {
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
  .buildings {
    padding: 1rem;
  }

  .header {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }

  .search-box {
    max-width: 100%;
  }
}
</style> 