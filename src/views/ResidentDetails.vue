<template>
  <div class="resident-details">
    <div class="page-header">
      <button class="btn-back" @click="goBack">
        <i class="fas fa-arrow-left"></i> Назад
      </button>
      <div class="header-actions">
        <button class="btn-primary" @click="editResident">
          Редактировать
        </button>
        <button class="btn-danger" @click="deleteResident">
          Удалить
        </button>
      </div>
    </div>

    <Transition name="fade" mode="out-in">
      <div v-if="loading" class="loading">
        <div class="loading-spinner"></div>
        Загрузка...
      </div>

      <div v-else-if="error" class="error">
        {{ error }}
      </div>

      <div v-else-if="!resident" class="not-found">
        Жилец не найден
      </div>

      <div v-else class="details-content">
        <div class="resident-info">
          <h1 class="slide-in">{{ resident.firstName }} {{ resident.lastName }}</h1>
          
          <div class="info-section slide-in" style="animation-delay: 0.1s">
            <h2>Контактная информация</h2>
            <div class="info-grid">
              <div class="info-item">
                <label>Телефон</label>
                <p>{{ resident.phone }}</p>
              </div>
              <div class="info-item">
                <label>Email</label>
                <p>{{ resident.email || 'Не указан' }}</p>
              </div>
            </div>
          </div>

          <div class="info-section slide-in" style="animation-delay: 0.2s">
            <h2>Информация о проживании</h2>
            <div class="info-grid">
              <div class="info-item">
                <label>Квартира</label>
                <p>Квартира {{ getApartmentNumber(resident.apartmentId) }}</p>
              </div>
              <div class="info-item">
                <label>Адрес</label>
                <p>{{ getBuildingAddress(resident.apartmentId) }}</p>
              </div>
              <div class="info-item">
                <label>Дата заселения</label>
                <p>{{ formatDate(resident.moveInDate) }}</p>
              </div>
              <div class="info-item">
                <label>Дата выселения</label>
                <p>{{ resident.moveOutDate ? formatDate(resident.moveOutDate) : 'Не указана' }}</p>
              </div>
            </div>
          </div>

          <div v-if="resident.notes" class="info-section slide-in" style="animation-delay: 0.3s">
            <h2>Примечания</h2>
            <p class="notes">{{ resident.notes }}</p>
          </div>
        </div>
      </div>
    </Transition>

    <Transition name="modal">
      <ResidentForm
        v-if="showForm"
        :resident-id="resident?.id"
        @submit="handleFormSubmit"
        @cancel="hideForm"
      />
    </Transition>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useResidentsStore } from '../stores/residents'
import { useApartmentsStore } from '../stores/apartments'
import { useBuildingsStore } from '../stores/buildings'
import ResidentForm from '../components/ResidentForm.vue'

const route = useRoute()
const router = useRouter()
const residentsStore = useResidentsStore()
const apartmentsStore = useApartmentsStore()
const buildingsStore = useBuildingsStore()

const loading = ref(false)
const error = ref(null)
const showForm = ref(false)

const resident = computed(() => residentsStore.getResidentById(route.params.id))
const buildings = computed(() => buildingsStore.buildings)
const apartments = computed(() => apartmentsStore.apartments)

onMounted(async () => {
  try {
    loading.value = true
    await Promise.all([
      residentsStore.fetchResidents(),
      apartmentsStore.fetchApartments(),
      buildingsStore.fetchBuildings()
    ])
  } catch (err) {
    error.value = 'Ошибка при загрузке данных'
    console.error(err)
  } finally {
    loading.value = false
  }
})

const getApartmentNumber = (apartmentId) => {
  const apartment = apartments.value.find(apt => apt.id === apartmentId)
  return apartment?.number || 'Неизвестно'
}

const getBuildingAddress = (apartmentId) => {
  const apartment = apartments.value.find(apt => apt.id === apartmentId)
  if (!apartment) return ''
  const building = buildings.value.find(b => b.id === apartment.buildingId)
  return building?.address || ''
}

const formatDate = (dateString) => {
  if (!dateString) return ''
  return new Date(dateString).toLocaleDateString('ru-RU')
}

const goBack = () => {
  router.push('/residents')
}

const editResident = () => {
  showForm.value = true
}

const deleteResident = async () => {
  if (confirm('Вы уверены, что хотите удалить этого жильца?')) {
    try {
      await residentsStore.removeResident(route.params.id)
      router.push('/residents')
    } catch (err) {
      console.error('Error deleting resident:', err)
    }
  }
}

const handleFormSubmit = () => {
  showForm.value = false
}

const hideForm = () => {
  showForm.value = false
}
</script>

<style scoped>
.resident-details {
  padding: 2rem;
}

.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.header-actions {
  display: flex;
  gap: 1rem;
}

.btn-back {
  background: none;
  border: none;
  color: #666;
  cursor: pointer;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.btn-back:hover {
  color: var(--primary-color);
}

.details-content {
  background: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.resident-info h1 {
  margin: 0 0 2rem 0;
  color: #333;
}

.info-section {
  margin-bottom: 2rem;
}

.info-section h2 {
  margin: 0 0 1rem 0;
  color: #666;
  font-size: 1.2rem;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.info-item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.info-item label {
  color: #666;
  font-size: 0.9rem;
}

.info-item p {
  margin: 0;
  color: #333;
}

.notes {
  white-space: pre-line;
  color: #666;
  line-height: 1.5;
}

.loading,
.error,
.not-found {
  text-align: center;
  padding: 2rem;
  color: #666;
}

.btn-danger {
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
}

.btn-danger:hover {
  background-color: #c82333;
}

/* Анимации */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

.slide-in {
  animation: slideIn 0.5s ease forwards;
  opacity: 0;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.loading-spinner {
  width: 40px;
  height: 40px;
  margin: 0 auto 1rem;
  border: 4px solid #f3f3f3;
  border-top: 4px solid var(--primary-color);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Улучшенные стили для кнопок */
.btn-back,
.btn-primary,
.btn-danger {
  transition: all 0.2s ease;
}

.btn-back:hover {
  transform: translateX(-5px);
}

.btn-primary:hover,
.btn-danger:hover {
  transform: translateY(-2px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Анимация для карточек информации */
.info-item {
  transition: transform 0.2s ease;
}

.info-item:hover {
  transform: translateX(5px);
}

/* Анимация для заголовков секций */
.info-section h2 {
  position: relative;
  padding-bottom: 0.5rem;
}

.info-section h2::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--primary-color);
  transition: width 0.3s ease;
}

.info-section:hover h2::after {
  width: 100%;
}
</style> 