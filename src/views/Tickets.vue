<template>
  <div class="tickets">
    <div class="header">
      <h1>Заявки</h1>
      <button class="add-button" @click="showAddModal = true">
        <i class="fas fa-plus"></i>
        Создать заявку
      </button>
    </div>

    <div class="filters">
      <div class="search-box">
        <i class="fas fa-search"></i>
        <input 
          v-model="searchQuery" 
          type="text" 
          placeholder="Поиск по заявкам..."
          @input="filterTickets"
        >
      </div>
      <div class="filter-options">
        <select v-model="selectedBuilding" @change="filterTickets">
          <option value="">Все дома</option>
          <option v-for="building in buildings" :key="building.id" :value="building.id">
            {{ building.name }}
          </option>
        </select>
        <select v-model="selectedStatus" @change="filterTickets">
          <option value="">Все статусы</option>
          <option value="open">Открытые</option>
          <option value="in_progress">В работе</option>
          <option value="resolved">Решенные</option>
          <option value="closed">Закрытые</option>
        </select>
      </div>
    </div>

    <div class="tickets-list" v-if="!loading">
      <div v-if="filteredTickets.length === 0" class="no-results">
        <i class="fas fa-search"></i>
        <p>Ничего не найдено</p>
      </div>
      <div v-else class="tickets-grid">
        <div v-for="ticket in filteredTickets" :key="ticket.id" class="ticket-card">
          <div class="ticket-header">
            <h3>{{ ticket.title }}</h3>
            <span :class="['status-badge', ticket.status]">
              {{ getStatusText(ticket.status) }}
            </span>
          </div>
          <div class="ticket-info">
            <p><i class="fas fa-building"></i> {{ getBuildingName(ticket.buildingId) }}</p>
            <p><i class="fas fa-user"></i> {{ ticket.residentName }}</p>
            <p><i class="fas fa-calendar"></i> {{ formatDate(ticket.createdAt) }}</p>
            <p><i class="fas fa-tag"></i> {{ ticket.category }}</p>
          </div>
          <div class="ticket-description">
            <p>{{ ticket.description }}</p>
          </div>
          <div class="ticket-actions">
            <button @click="editTicket(ticket)" class="edit-button">
              <i class="fas fa-edit"></i>
            </button>
            <button @click="deleteTicket(ticket.id)" class="delete-button">
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

    <!-- Модальное окно для создания/редактирования заявки -->
    <div v-if="showAddModal" class="modal">
      <div class="modal-content">
        <h2>{{ editingTicket ? 'Редактировать заявку' : 'Создать заявку' }}</h2>
        <form @submit.prevent="saveTicket">
          <div class="form-group">
            <label>Заголовок</label>
            <input v-model="ticketForm.title" type="text" required>
          </div>
          <div class="form-group">
            <label>Дом</label>
            <select v-model="ticketForm.buildingId" required>
              <option v-for="building in buildings" :key="building.id" :value="building.id">
                {{ building.name }}
              </option>
            </select>
          </div>
          <div class="form-group">
            <label>Житель</label>
            <select v-model="ticketForm.residentId" required>
              <option v-for="resident in residents" :key="resident.id" :value="resident.id">
                {{ resident.firstName }} {{ resident.lastName }}
              </option>
            </select>
          </div>
          <div class="form-group">
            <label>Категория</label>
            <select v-model="ticketForm.category" required>
              <option value="repair">Ремонт</option>
              <option value="cleaning">Уборка</option>
              <option value="security">Безопасность</option>
              <option value="other">Другое</option>
            </select>
          </div>
          <div class="form-group">
            <label>Описание</label>
            <textarea v-model="ticketForm.description" required></textarea>
          </div>
          <div class="form-group">
            <label>Статус</label>
            <select v-model="ticketForm.status" required>
              <option value="open">Открытая</option>
              <option value="in_progress">В работе</option>
              <option value="resolved">Решенная</option>
              <option value="closed">Закрытая</option>
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
import { useResidentsStore } from '../stores/residents'
import { db } from '../firebase'
import { 
  collection, 
  getDocs, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc 
} from 'firebase/firestore'

const buildingsStore = useBuildingsStore()
const residentsStore = useResidentsStore()
const loading = ref(false)
const showAddModal = ref(false)
const editingTicket = ref(null)
const searchQuery = ref('')
const selectedBuilding = ref('')
const selectedStatus = ref('')

const ticketForm = ref({
  title: '',
  buildingId: '',
  residentId: '',
  category: '',
  description: '',
  status: 'open'
})

const tickets = ref([])

// Загрузка заявок из Firebase
const loadTickets = () => {
  loading.value = true
  const ticketsRef = collection(db, 'tickets')
  getDocs(ticketsRef)
    .then((snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }))
      tickets.value = data
      loading.value = false
    })
    .catch((error) => {
      console.error('Error loading tickets:', error)
      loading.value = false
    })
}

const filteredTickets = computed(() => {
  return tickets.value.filter(ticket => {
    const matchesSearch = ticket.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                         ticket.description.toLowerCase().includes(searchQuery.value.toLowerCase())
    const matchesBuilding = !selectedBuilding.value || ticket.buildingId === selectedBuilding.value
    const matchesStatus = !selectedStatus.value || ticket.status === selectedStatus.value
    return matchesSearch && matchesBuilding && matchesStatus
  })
})

const buildings = computed(() => buildingsStore.buildings)
const residents = computed(() => residentsStore.residents)

const getBuildingName = (buildingId) => {
  const building = buildings.value.find(b => b.id === buildingId)
  return building ? building.name : 'Неизвестный дом'
}

const getStatusText = (status) => {
  const statusMap = {
    open: 'Открытая',
    in_progress: 'В работе',
    resolved: 'Решенная',
    closed: 'Закрытая'
  }
  return statusMap[status] || status
}

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('ru-RU')
}

const editTicket = (ticket) => {
  editingTicket.value = ticket
  ticketForm.value = { ...ticket }
  showAddModal.value = true
}

// Сохранение заявки в Firebase
const saveTicket = async () => {
  try {
    const ticketData = { ...ticketForm.value }
    const ticketsRef = collection(db, 'tickets')
    
    if (editingTicket.value) {
      // Обновление существующей заявки
      await updateDoc(doc(ticketsRef, editingTicket.value.id), ticketData)
    } else {
      // Создание новой заявки
      await addDoc(ticketsRef, ticketData)
    }
    
    showAddModal.value = false
    editingTicket.value = null
    ticketForm.value = {
      title: '',
      buildingId: '',
      residentId: '',
      category: '',
      description: '',
      status: 'open'
    }
  } catch (error) {
    console.error('Error saving ticket:', error)
    alert('Ошибка при сохранении заявки')
  }
}

// Удаление заявки из Firebase
const deleteTicket = async (id) => {
  if (confirm('Вы уверены, что хотите удалить эту заявку?')) {
    try {
      await deleteDoc(doc(collection(db, 'tickets'), id))
    } catch (error) {
      console.error('Error deleting ticket:', error)
      alert('Ошибка при удалении заявки')
    }
  }
}

onMounted(async () => {
  try {
    await Promise.all([
      buildingsStore.fetchBuildings(),
      residentsStore.fetchResidents()
    ])
    loadTickets()
  } catch (error) {
    console.error('Error loading data:', error)
  }
})
</script>

<style scoped>
.tickets {
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

.tickets-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}

.ticket-card {
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.ticket-header {
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

.status-badge.open {
  background: #e3f2fd;
  color: #1976d2;
}

.status-badge.in_progress {
  background: #fff3e0;
  color: #f57c00;
}

.status-badge.resolved {
  background: #e6f4ea;
  color: #1e7e34;
}

.status-badge.closed {
  background: #f5f5f5;
  color: #666;
}

.ticket-info {
  margin-bottom: 1rem;
}

.ticket-info p {
  margin: 0.5rem 0;
  color: #666;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.ticket-description {
  margin-bottom: 1.5rem;
  color: #333;
}

.ticket-actions {
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
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.form-group textarea {
  min-height: 100px;
  resize: vertical;
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
  .tickets {
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