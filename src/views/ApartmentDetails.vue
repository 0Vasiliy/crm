<template>
  <div class="apartment-details">
    <div class="header">
      <h1>Квартира {{ apartment?.number }}</h1>
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
            <span class="label">Дом:</span>
            <span class="value">{{ getBuildingAddress(apartment?.buildingId) }}</span>
          </div>
          <div class="info-item">
            <span class="label">Этаж:</span>
            <span class="value">{{ apartment?.floor }}</span>
          </div>
          <div class="info-item">
            <span class="label">Площадь:</span>
            <span class="value">{{ apartment?.area }} м²</span>
          </div>
          <div class="info-item">
            <span class="label">Комнат:</span>
            <span class="value">{{ apartment?.rooms }}</span>
          </div>
          <div class="info-item">
            <span class="label">Цена:</span>
            <span class="value">{{ formatPrice(apartment?.price) }} ₽</span>
          </div>
          <div class="info-item">
            <span class="label">Статус:</span>
            <span :class="['status-badge', apartment?.status]">
              {{ getStatusText(apartment?.status) }}
            </span>
          </div>
        </div>
      </div>

      <div class="layout-section">
        <h2>Планировка</h2>
        <div class="layout-content">
          <p>{{ apartment?.layout }}</p>
        </div>
      </div>

      <div class="features-section">
        <h2>Особенности</h2>
        <div class="features-grid">
          <div v-for="feature in apartment?.features" 
               :key="feature" 
               class="feature-tag">
            {{ getFeatureLabel(feature) }}
          </div>
        </div>
      </div>

      <div class="history-section">
        <h2>История изменений</h2>
        <div class="history-list">
          <div v-for="(change, index) in apartment?.history" 
               :key="index" 
               class="history-item">
            <div class="history-date">{{ formatDate(change.date) }}</div>
            <div class="history-description">{{ change.description }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useApartmentsStore } from '../stores/apartments'
import { useBuildingsStore } from '../stores/buildings'

const route = useRoute()
const router = useRouter()
const apartmentsStore = useApartmentsStore()
const buildingsStore = useBuildingsStore()
const loading = ref(false)
const error = ref(null)

const apartment = ref(null)

onMounted(async () => {
  loading.value = true
  try {
    apartment.value = await apartmentsStore.getApartmentById(route.params.id)
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

const getBuildingAddress = (buildingId) => {
  const building = buildingsStore.buildings.find(b => b.id === buildingId)
  return building?.address || 'Неизвестно'
}

const formatPrice = (price) => {
  return new Intl.NumberFormat('ru-RU').format(price)
}

const getFeatureLabel = (feature) => {
  const featureMap = {
    'balcony': 'Балкон',
    'loggia': 'Лоджия',
    'parking': 'Парковка',
    'storage': 'Кладовка',
    'view': 'Вид из окна'
  }
  return featureMap[feature] || feature
}

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('ru-RU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

const goBack = () => {
  router.push('/apartments')
}

const openEditDialog = () => {

}
</script>

<style scoped>
.apartment-details {
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

.info-section,
.layout-section,
.features-section,
.history-section {
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

.status-badge {
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 500;
  display: inline-block;
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

.layout-content {
  margin-top: 1rem;
}

.features-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
}

.feature-tag {
  background-color: #f1f1f1;
  color: #666;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
}

.history-list {
  margin-top: 1rem;
}

.history-item {
  padding: 1rem;
  border-bottom: 1px solid #eee;
}

.history-item:last-child {
  border-bottom: none;
}

.history-date {
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.history-description {
  font-weight: 500;
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