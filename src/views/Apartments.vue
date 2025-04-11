<template>
  <div class="apartments">
    <div class="header">
      <h1>Квартиры</h1>
      <button class="add-button" @click="showAddModal = true">
        <i class="fas fa-plus"></i>
        Добавить квартиру
      </button>
    </div>

    <div class="filters">
      <div class="search-box">
        <i class="fas fa-search"></i>
        <input 
          v-model="searchQuery" 
          type="text" 
          placeholder="Поиск по квартирам..."
          @input="filterApartments"
        >
      </div>
      <div class="filter-options">
        <select v-model="selectedBuilding" @change="handleBuildingChange">
          <option value="">Все дома</option>
          <option v-for="building in buildings" :key="building.id" :value="building.id">
            {{ building.name }}
          </option>
        </select>
      </div>
    </div>

    <div class="apartments-list" v-if="!loading">
      <div v-if="filteredApartments.length === 0" class="no-results">
        <i class="fas fa-search"></i>
        <p>Ничего не найдено</p>
      </div>
      <div v-else class="apartments-grid">
        <div v-for="apartment in filteredApartments" :key="apartment.id" class="apartment-card">
          <div class="apartment-header">
            <h3>Квартира {{ apartment.number }}</h3>
            <span class="status-badge" :class="{ active: apartment.status === 'active' }">
              {{ apartment.status === 'active' ? 'Активна' : 'Неактивна' }}
            </span>
          </div>
          <div class="apartment-info">
            <p><i class="fas fa-building"></i> {{ getBuildingName(apartment.buildingId) }}</p>
            <p><i class="fas fa-door-open"></i> {{ apartment.area }} м²</p>
            <p><i class="fas fa-bed"></i> {{ apartment.rooms }} комнат</p>
          </div>
          <div class="apartment-actions">
            <button @click="showResidents(apartment)" class="residents-button">
              <i class="fas fa-users"></i>
              Жильцы
            </button>
            <button @click="editApartment(apartment)" class="edit-button">
              <i class="fas fa-edit"></i>
            </button>
            <button @click="deleteApartment(apartment.id)" class="delete-button">
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

    <!-- Модальное окно для добавления/редактирования квартиры -->
    <div v-if="showAddModal" class="modal">
      <div class="modal-content">
        <h2>{{ editingApartment ? 'Редактировать квартиру' : 'Добавить квартиру' }}</h2>
        <form @submit.prevent="saveApartment">
          <div class="form-group">
            <label>Номер квартиры</label>
            <input v-model="apartmentForm.number" type="text" required>
          </div>
          <div class="form-group">
            <label>Дом</label>
            <select v-model="apartmentForm.buildingId" required>
              <option v-for="building in buildings" :key="building.id" :value="building.id">
                {{ building.name }}
              </option>
            </select>
          </div>
          <div class="form-group">
            <label>Площадь (м²)</label>
            <input v-model="apartmentForm.area" type="number" required min="1">
          </div>
          <div class="form-group">
            <label>Количество комнат</label>
            <input v-model="apartmentForm.rooms" type="number" required min="1">
          </div>
          <div class="form-group">
            <label>Статус</label>
            <select v-model="apartmentForm.status" required>
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

    <!-- Модальное окно для управления жильцами -->
    <div v-if="showResidentsModal" class="modal">
      <div class="modal-content">
        <h2>Жильцы квартиры {{ selectedApartment?.number }}</h2>
        <div class="residents-list">
          <div v-if="apartmentResidents.length === 0" class="no-residents">
            <p>В квартире нет жильцов</p>
          </div>
          <div v-else class="residents-grid">
            <div v-for="resident in apartmentResidents" :key="resident.id" class="resident-card">
              <div class="resident-info">
                <h4>{{ resident.firstName }} {{ resident.lastName }}</h4>
                <p>{{ resident.phone }}</p>
                <p>Заселение: {{ formatDate(resident.moveInDate) }}</p>
                <p v-if="resident.moveOutDate">Выселение: {{ formatDate(resident.moveOutDate) }}</p>
              </div>
              <div class="resident-actions">
                <button @click="editResident(resident)" class="edit-button">
                  <i class="fas fa-edit"></i>
                </button>
                <button @click="removeResident(resident.id)" class="delete-button">
                  <i class="fas fa-trash"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-actions">
          <button @click="showAddResidentModal = true" class="add-resident-button">
            <i class="fas fa-plus"></i>
            Добавить жильца
          </button>
          <button @click="closeResidentsModal" class="close-button">Закрыть</button>
        </div>
      </div>
    </div>

    <!-- Модальное окно для добавления/редактирования жильца -->
    <div v-if="showAddResidentModal" class="modal">
      <div class="modal-content">
        <h2>{{ editingResident ? 'Редактировать жильца' : 'Добавить жильца' }}</h2>
        <form @submit.prevent="saveResident">
          <div class="form-group">
            <label>Имя</label>
            <input v-model="residentForm.firstName" type="text" required>
          </div>
          <div class="form-group">
            <label>Фамилия</label>
            <input v-model="residentForm.lastName" type="text" required>
          </div>
          <div class="form-group">
            <label>Телефон</label>
            <input v-model="residentForm.phone" type="tel" required>
          </div>
          <div class="form-group">
            <label>Email</label>
            <input v-model="residentForm.email" type="email">
          </div>
          <div class="form-group">
            <label>Дата заселения</label>
            <input v-model="residentForm.moveInDate" type="date" required>
          </div>
          <div class="form-group">
            <label>Дата выселения</label>
            <input v-model="residentForm.moveOutDate" type="date">
          </div>
          <div class="form-actions">
            <button type="button" @click="showAddResidentModal = false">Отмена</button>
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
import { useApartmentsStore } from '../stores/apartments'
import { useBuildingsStore } from '../stores/buildings'
import { useResidentsStore } from '../stores/residents'

/**
 * Инициализация хранилищ
 */
const apartmentsStore = useApartmentsStore()
const buildingsStore = useBuildingsStore()
const residentsStore = useResidentsStore()

/**
 * Состояния компонента
 */
const loading = ref(false) // Флаг загрузки данных
const showAddModal = ref(false) // Видимость модального окна добавления/редактирования квартиры
const showResidentsModal = ref(false) // Видимость модального окна управления жильцами
const showAddResidentModal = ref(false) // Видимость модального окна добавления/редактирования жильца
const editingApartment = ref(null) // Текущая редактируемая квартира
const editingResident = ref(null) // Текущий редактируемый жильец
const selectedApartment = ref(null) // Текущая выбранная квартира
const searchQuery = ref('') // Поисковый запрос
const selectedBuilding = ref('') // Выбранный дом для фильтрации

/**
 * Форма для добавления/редактирования квартиры
 */
const apartmentForm = ref({
  number: '',
  buildingId: '',
  area: '',
  rooms: '',
  status: 'active'
})

/**
 * Форма для добавления/редактирования жильца
 */
const residentForm = ref({
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  apartmentId: '',
  moveInDate: '',
  moveOutDate: ''
})

/**
 * Вычисляемые свойства для получения данных из хранилищ
 */
const buildings = computed(() => buildingsStore.buildings)
const apartments = computed(() => apartmentsStore.apartments)
const residents = computed(() => residentsStore.residents)

/**
 * Вычисляемое свойство для получения списка жильцов выбранной квартиры
 */
const apartmentResidents = computed(() => {
  if (!selectedApartment.value) return []
  return residents.value.filter(resident => 
    resident.apartmentId === selectedApartment.value.id
  )
})

/**
 * Вычисляемое свойство для фильтрации квартир по поисковому запросу и выбранному дому
 */
const filteredApartments = computed(() => {
  let result = apartments.value

  // Фильтрация по поисковому запросу
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    result = result.filter(apartment => 
      apartment.number.toLowerCase().includes(query)
    )
  }

  // Фильтрация по выбранному дому
  if (selectedBuilding.value) {
    result = result.filter(apartment => 
      apartment.buildingId === selectedBuilding.value
    )
  }

  return result
})

/**
 * Функция получения названия дома по ID
 */
const getBuildingName = (buildingId) => {
  const building = buildings.value.find(b => b.id === buildingId)
  return building ? building.name : 'Неизвестно'
}

/**
 * Функция форматирования даты
 */
const formatDate = (dateString) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  return date.toLocaleDateString('ru-RU')
}

/**
 * Функция открытия модального окна управления жильцами
 */
const showResidents = (apartment) => {
  selectedApartment.value = apartment
  showResidentsModal.value = true
}

/**
 * Функция закрытия модального окна управления жильцами
 */
const closeResidentsModal = () => {
  showResidentsModal.value = false
  selectedApartment.value = null
}

/**
 * Функция редактирования квартиры
 */
const editApartment = (apartment) => {
  editingApartment.value = apartment
  apartmentForm.value = {
    number: apartment.number,
    buildingId: apartment.buildingId,
    area: apartment.area,
    rooms: apartment.rooms,
    status: apartment.status
  }
  showAddModal.value = true
}

/**
 * Функция редактирования жильца
 */
const editResident = (resident) => {
  editingResident.value = resident
  residentForm.value = {
    firstName: resident.firstName,
    lastName: resident.lastName,
    phone: resident.phone,
    email: resident.email,
    apartmentId: resident.apartmentId,
    moveInDate: resident.moveInDate,
    moveOutDate: resident.moveOutDate || ''
  }
  showAddResidentModal.value = true
}

/**
 * Функция сохранения квартиры
 */
const saveApartment = async () => {
  try {
    const apartmentData = {
      number: apartmentForm.value.number,
      buildingId: apartmentForm.value.buildingId,
      area: parseFloat(apartmentForm.value.area),
      rooms: parseInt(apartmentForm.value.rooms),
      status: apartmentForm.value.status
    }

    // Обновление или добавление квартиры
    if (editingApartment.value) {
      await apartmentsStore.updateApartment(editingApartment.value.id, apartmentData)
    } else {
      await apartmentsStore.addApartment(apartmentData)
    }

    // Сброс формы и закрытие модального окна
    showAddModal.value = false
    editingApartment.value = null
    apartmentForm.value = {
      number: '',
      buildingId: '',
      area: '',
      rooms: '',
      status: 'active'
    }
  } catch (error) {
    console.error('Error saving apartment:', error)
    alert('Ошибка при сохранении квартиры: ' + error.message)
  }
}

/**
 * Функция сохранения жильца
 */
const saveResident = async () => {
  try {
    const residentData = {
      firstName: residentForm.value.firstName,
      lastName: residentForm.value.lastName,
      phone: residentForm.value.phone,
      email: residentForm.value.email,
      apartmentId: selectedApartment.value.id,
      moveInDate: residentForm.value.moveInDate,
      moveOutDate: residentForm.value.moveOutDate || null
    }

    // Обновление или добавление жильца
    if (editingResident.value) {
      await residentsStore.updateResident(editingResident.value.id, residentData)
    } else {
      await residentsStore.addResident(residentData)
    }

    // Сброс формы и закрытие модального окна
    showAddResidentModal.value = false
    editingResident.value = null
    residentForm.value = {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      apartmentId: '',
      moveInDate: '',
      moveOutDate: ''
    }
  } catch (error) {
    console.error('Error saving resident:', error)
    alert('Ошибка при сохранении жильца: ' + error.message)
  }
}

/**
 * Функция удаления квартиры
 */
const deleteApartment = async (id) => {
  if (confirm('Вы уверены, что хотите удалить эту квартиру?')) {
    try {
      await apartmentsStore.deleteApartment(id)
    } catch (error) {
      console.error('Error deleting apartment:', error)
      alert('Ошибка при удалении квартиры: ' + error.message)
    }
  }
}

/**
 * Функция удаления жильца
 */
const removeResident = async (id) => {
  if (confirm('Вы уверены, что хотите удалить этого жильца?')) {
    try {
      await residentsStore.removeResident(id)
    } catch (error) {
      console.error('Error deleting resident:', error)
      alert('Ошибка при удалении жильца: ' + error.message)
    }
  }
}

/**
 * Функция изменения выбранного дома для фильтрации
 */
const handleBuildingChange = async () => {
  if (selectedBuilding.value) {
    await apartmentsStore.fetchApartments(selectedBuilding.value)
  } else {
    await apartmentsStore.fetchApartments()
  }
}

/**
 * Загрузка данных при монтировании компонента
 */
onMounted(async () => {
  try {
    loading.value = true
    await Promise.all([
      buildingsStore.fetchBuildings(),
      apartmentsStore.fetchApartments(),
      residentsStore.fetchResidents()
    ])
  } catch (error) {
    console.error('Error loading data:', error)
    alert('Ошибка при загрузке данных: ' + error.message)
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
.apartments {
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
  display: flex;
  gap: 1rem;
}

.search-box {
  position: relative;
  flex: 1;
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

.filter-options {
  display: flex;
  gap: 1rem;
}

.filter-options select {
  padding: 0.75rem 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-width: 200px;
}

.apartments-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}

.apartment-card {
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.apartment-header {
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

.apartment-info {
  margin-bottom: 1.5rem;
}

.apartment-info p {
  margin: 0.5rem 0;
  color: #666;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.apartment-actions {
  display: flex;
  gap: 0.5rem;
  justify-content: flex-end;
}

.residents-button, .edit-button, .delete-button {
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.residents-button {
  background: #e3f2fd;
  color: #1976d2;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.edit-button {
  background: #e3f2fd;
  color: #1976d2;
}

.delete-button {
  background: #ffebee;
  color: #d32f2f;
}

.residents-button:hover {
  background: #bbdefb;
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
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.modal-content h2 {
  margin: 0 0 1.5rem 0;
  color: #333;
  font-size: 1.5rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: #666;
  font-weight: 500;
}

.form-group input,
.form-group select {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

.form-group input:focus,
.form-group select:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 2px rgba(var(--primary-color-rgb), 0.1);
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 2rem;
}

.form-actions button {
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.form-actions button[type="button"] {
  background: #f5f5f5;
  color: #333;
  border: 1px solid #ddd;
}

.form-actions button[type="submit"] {
  background: var(--primary-color);
  color: white;
  border: none;
}

.form-actions button:hover {
  opacity: 0.9;
}

.residents-list {
  margin: 1.5rem 0;
}

.residents-grid {
  display: grid;
  gap: 1rem;
}

.resident-card {
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #eee;
}

.resident-info h4 {
  margin: 0 0 0.5rem 0;
  color: #333;
}

.resident-info p {
  margin: 0.25rem 0;
  color: #666;
  font-size: 0.875rem;
}

.modal-actions {
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid #eee;
}

.add-resident-button {
  background: var(--primary-color);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
}

.close-button {
  background: #f5f5f5;
  color: #333;
  border: 1px solid #ddd;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
}

.add-resident-button:hover,
.close-button:hover {
  opacity: 0.9;
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

.no-results, .no-residents {
  text-align: center;
  padding: 2rem;
  color: #666;
}

.no-results i, .no-residents i {
  font-size: 2rem;
  margin-bottom: 1rem;
}

@media (max-width: 768px) {
  .apartments {
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

  .search-box {
    max-width: 100%;
  }

  .filter-options select {
    width: 100%;
  }
}
</style> 