<template>
  <div class="building-details">
    <div class="header">
      <h1>{{ building?.address }}</h1>
      <div class="actions">
        <button @click="openEditDialog" class="btn-primary">
          Редактировать
        </button>
        <button @click="goBack" class="btn-secondary">
          Назад
        </button>
      </div>
    </div>

    <div v-if="loading" class="loading">Загрузка...</div>
    <div v-else-if="error" class="error">{{ error }}</div>
    <div v-else class="content">
      <div class="info-section">
        <h2>Основная информация</h2>
        <div class="info-grid">
          <div class="info-item">
            <span class="label">Адрес:</span>
            <span class="value">{{ building?.address }}</span>
          </div>
          <div class="info-item">
            <span class="label">Количество этажей:</span>
            <span class="value">{{ building?.floors }}</span>
          </div>
          <div class="info-item">
            <span class="label">Количество квартир:</span>
            <span class="value">{{ building?.apartments }}</span>
          </div>
          <div class="info-item">
            <span class="label">Год постройки:</span>
            <span class="value">{{ building?.yearBuilt }}</span>
          </div>
          <div class="info-item">
            <span class="label">Статус:</span>
            <span class="value">{{ building?.status }}</span>
          </div>
        </div>
      </div>

      <div class="apartments-section">
        <h2>Квартиры</h2>
        <div class="apartments-grid">
          <div v-for="apartment in building?.apartmentsList" 
               :key="apartment.id" 
               class="apartment-card"
               @click="viewApartment(apartment.id)">
            <div class="apartment-header">
              <h3>Квартира {{ apartment.number }}</h3>
              <span :class="['status-badge', apartment.status]">
                {{ getStatusText(apartment.status) }}
              </span>
            </div>
            <div class="apartment-info">
              <p>Площадь: {{ apartment.area }} м²</p>
              <p>Этаж: {{ apartment.floor }}</p>
              <p>Комнат: {{ apartment.rooms }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useBuildingsStore } from '../stores/buildings'

const route = useRoute()
const router = useRouter()
const buildingsStore = useBuildingsStore()
const loading = ref(false)
const error = ref(null)

const building = ref(null)

onMounted(async () => {
  loading.value = true
  try {
    building.value = await buildingsStore.getBuildingById(route.params.id)
  } catch (err) {
    error.value = err.message
  } finally {
    loading.value = false
  }
})

const getStatusText = (status) => {
  const statusMap = {
    'free': 'Свободна',
    'sold': 'Продана',
    'reserved': 'Забронирована'
  }
  return statusMap[status] || status
}

const goBack = () => {
  router.push('/buildings')
}

const openEditDialog = () => {
  
}

const viewApartment = (id) => {
  router.push(`/apartments/${id}`)
}
</script>

<style scoped>
.building-details {
  padding: 2rem;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.actions {
  display: flex;
  gap: 1rem;
}

.btn-secondary {
  background-color: #95a5a6;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
}

.info-section {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}

.info-item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.label {
  color: #666;
  font-size: 0.9rem;
}

.value {
  font-weight: 500;
}

.apartments-section {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.apartments-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}

.apartment-card {
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}

.apartment-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.apartment-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.status-badge {
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 500;
}

.status-badge.free {
  background-color: #2ecc71;
  color: white;
}

.status-badge.sold {
  background-color: #e74c3c;
  color: white;
}

.status-badge.reserved {
  background-color: #f1c40f;
  color: white;
}

.loading, .error {
  text-align: center;
  padding: 2rem;
  font-size: 1.2rem;
}

.error {
  color: #e74c3c;
}
</style> 