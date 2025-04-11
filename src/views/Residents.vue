<template>
  <div class="residents">
    <div class="header">
      <h1>Жильцы</h1>
      <button class="add-button" @click="showAddModal = true">
        <i class="fas fa-plus"></i>
        Добавить жильца
      </button>
    </div>

    <div class="filters">
      <div class="search-box">
        <i class="fas fa-search"></i>
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Поиск по жильцам..."
          @input="filterResidents"
        >
      </div>
      <div class="filter-options">
        <select v-model="selectedBuilding" @change="handleBuildingChange">
          <option value="">Все дома</option>
          <option v-for="building in buildings" :key="building.id" :value="building.id">
            {{ building.name }}
          </option>
        </select>
        <select v-model="selectedApartment" @change="handleApartmentChange">
          <option value="">Все квартиры</option>
          <option v-for="apartment in filteredApartments" :key="apartment.id" :value="apartment.id">
            Квартира {{ apartment.number }}
          </option>
        </select>
      </div>
    </div>

    <div class="residents-list" v-if="!loading">
      <div v-if="filteredResidents.length === 0" class="no-results">
        <i class="fas fa-search"></i>
        <p>Ничего не найдено</p>
    </div>
      <div v-else class="residents-grid">
        <div v-for="resident in filteredResidents" :key="resident.id" class="resident-card">
        <div class="resident-info">
          <h3>{{ resident.firstName }} {{ resident.lastName }}</h3>
            <p><i class="fas fa-phone"></i> {{ resident.phone }}</p>
            <p v-if="resident.email"><i class="fas fa-envelope"></i> {{ resident.email }}</p>
            <p><i class="fas fa-building"></i> {{ getBuildingName(resident.apartmentId) }}</p>
            <p><i class="fas fa-door-open"></i> Квартира {{ getApartmentNumber(resident.apartmentId) }}</p>
            <p><i class="fas fa-calendar-alt"></i> Заселение: {{ formatDate(resident.moveInDate) }}</p>
            <p v-if="resident.moveOutDate">
              <i class="fas fa-calendar-times"></i> Выселение: {{ formatDate(resident.moveOutDate) }}
          </p>
        </div>
        <div class="resident-actions">
            <button @click="editResident(resident)" class="edit-button">
            <i class="fas fa-edit"></i>
          </button>
            <button @click="deleteResident(resident.id)" class="delete-button">
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

    <!-- Модальное окно для добавления/редактирования жильца -->
    <div v-if="showAddModal" class="modal">
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
            <label>Дом</label>
            <select v-model="residentForm.buildingId" @change="updateApartments" required>
              <option value="">Выберите дом</option>
              <option v-for="building in buildings" :key="building.id" :value="building.id">
                {{ building.name }}
              </option>
            </select>
          </div>
          <div class="form-group">
            <label>Квартира</label>
            <select v-model="residentForm.apartmentId" required>
              <option value="">Выберите квартиру</option>
              <option v-for="apartment in availableApartments" :key="apartment.id" :value="apartment.id">
                Квартира {{ apartment.number }}
              </option>
            </select>
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
import { useResidentsStore } from '../stores/residents'
import { useBuildingsStore } from '../stores/buildings'
import { useApartmentsStore } from '../stores/apartments'

/**
 * Инициализация хранилищ
 */
const residentsStore = useResidentsStore()
const buildingsStore = useBuildingsStore()
const apartmentsStore = useApartmentsStore()

/**
 * Состояния компонента
 */
const loading = ref(false) // Флаг загрузки данных
const showAddModal = ref(false) // Видимость модального окна добавления/редактирования
const editingResident = ref(null) // Текущий редактируемый жилец
const searchQuery = ref('') // Поисковый запрос
const selectedBuilding = ref('') // Выбранный дом для фильтрации
const selectedApartment = ref('') // Выбранная квартира для фильтрации

/**
 * Форма для добавления/редактирования жильца
 */
const residentForm = ref({
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  buildingId: '',
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
 * Вычисляемое свойство для получения доступных квартир в выбранном доме
 */
const availableApartments = computed(() => {
  if (!residentForm.value.buildingId) return []
  return apartments.value.filter(apartment => 
    apartment.buildingId === residentForm.value.buildingId && 
    apartment.status === 'active'
  )
})

/**
 * Вычисляемое свойство для фильтрации квартир по выбранному дому
 */
const filteredApartments = computed(() => {
  if (!selectedBuilding.value) return apartments.value
  return apartments.value.filter(apartment => 
    apartment.buildingId === selectedBuilding.value
  )
})

/**
 * Вычисляемое свойство для фильтрации жильцов по поисковому запросу и выбранным фильтрам
 */
const filteredResidents = computed(() => {
  let result = residents.value

  // Фильтрация по поисковому запросу
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    result = result.filter(resident => 
      resident.firstName.toLowerCase().includes(query) ||
      resident.lastName.toLowerCase().includes(query) ||
      resident.phone.includes(query)
    )
  }

  // Фильтрация по выбранной квартире или дому
  if (selectedApartment.value) {
    result = result.filter(resident => resident.apartmentId === selectedApartment.value)
  } else if (selectedBuilding.value) {
    const buildingApartments = apartments.value
      .filter(apartment => apartment.buildingId === selectedBuilding.value)
      .map(apartment => apartment.id)
    result = result.filter(resident => buildingApartments.includes(resident.apartmentId))
  }

  return result
})

/**
 * Функция для получения названия дома по ID квартиры
 */
const getBuildingName = (apartmentId) => {
  const apartment = apartments.value.find(a => a.id === apartmentId)
  if (!apartment) return 'Неизвестно'
  const building = buildings.value.find(b => b.id === apartment.buildingId)
  return building ? building.name : 'Неизвестно'
}

/**
 * Функция для получения номера квартиры по её ID
 */
const getApartmentNumber = (apartmentId) => {
  const apartment = apartments.value.find(a => a.id === apartmentId)
  return apartment ? apartment.number : 'Неизвестно'
}

/**
 * Функция форматирования даты
 */
const formatDate = (dateString) => {
  if (!dateString) return ''
  return new Date(dateString).toLocaleDateString('ru-RU')
}

/**
 * Обработчик изменения выбранного дома
 */
const handleBuildingChange = () => {
  selectedApartment.value = ''
}

/**
 * Обработчик изменения выбранной квартиры
 */
const handleApartmentChange = () => {
  // Фильтрация происходит автоматически через computed свойство
}

/**
 * Обновление списка доступных квартир при изменении выбранного дома
 */
const updateApartments = () => {
  residentForm.value.apartmentId = ''
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
    email: resident.email || '',
    buildingId: getBuildingIdFromApartment(resident.apartmentId),
    apartmentId: resident.apartmentId,
    moveInDate: resident.moveInDate,
    moveOutDate: resident.moveOutDate || ''
  }
  showAddModal.value = true
}

/**
 * Функция получения ID дома по ID квартиры
 */
const getBuildingIdFromApartment = (apartmentId) => {
  const apartment = apartments.value.find(a => a.id === apartmentId)
  return apartment ? apartment.buildingId : ''
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
      apartmentId: residentForm.value.apartmentId,
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
    showAddModal.value = false
    editingResident.value = null
    residentForm.value = {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      buildingId: '',
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
 * Функция удаления жильца
 */
const deleteResident = async (id) => {
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
 * Загрузка данных при монтировании компонента
 */
onMounted(async () => {
  try {
    await Promise.all([
      buildingsStore.fetchBuildings(),
      apartmentsStore.fetchApartments(),
      residentsStore.fetchResidents()
    ])
  } catch (error) {
    console.error('Error loading data:', error)
    alert('Ошибка при загрузке данных: ' + error.message)
  }
})
</script>

<style scoped>
.residents {
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

.residents-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}

.resident-card {
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.resident-info {
  margin-bottom: 1.5rem;
}

.resident-info h3 {
  margin: 0 0 1rem 0;
  color: #333;
}

.resident-info p {
  margin: 0.5rem 0;
  color: #666;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.resident-actions {
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
  .residents {
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

  .filter-options {
    flex-direction: column;
  }

  .filter-options select {
    width: 100%;
  }
}
</style> 