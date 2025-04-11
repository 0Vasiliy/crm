<template>
  <div class="modal-overlay" @click.self="handleCancel">
    <div class="modal-content">
      <div class="modal-header">
        <h2>{{ residentId ? 'Редактировать жильца' : 'Добавить жильца' }}</h2>
        <button class="btn-close" @click="handleCancel">
          <i class="fas fa-times"></i>
        </button>
      </div>

      <form @submit.prevent="handleSubmit" class="resident-form">
        <div class="form-grid">
          <div class="form-group">
            <label for="firstName">Имя *</label>
            <input
              id="firstName"
              v-model="formData.firstName"
              type="text"
              required
              class="form-input"
            >
          </div>

          <div class="form-group">
            <label for="lastName">Фамилия *</label>
            <input
              id="lastName"
              v-model="formData.lastName"
              type="text"
              required
              class="form-input"
            >
          </div>

          <div class="form-group">
            <label for="phone">Телефон *</label>
            <input
              id="phone"
              v-model="formData.phone"
              type="tel"
              required
              class="form-input"
            >
          </div>

          <div class="form-group">
            <label for="email">Email</label>
            <input
              id="email"
              v-model="formData.email"
              type="email"
              class="form-input"
            >
          </div>

          <div class="form-group">
            <label for="apartmentId">Квартира *</label>
            <select
              id="apartmentId"
              v-model="formData.apartmentId"
              required
              class="form-input"
            >
              <option value="">Выберите квартиру</option>
              <option
                v-for="apartment in availableApartments"
                :key="apartment.id"
                :value="apartment.id"
              >
                Квартира {{ apartment.number }} ({{ getBuildingAddress(apartment.buildingId) }})
              </option>
            </select>
          </div>

          <div class="form-group">
            <label for="moveInDate">Дата заселения *</label>
            <input
              id="moveInDate"
              v-model="formData.moveInDate"
              type="date"
              required
              class="form-input"
            >
          </div>

          <div class="form-group">
            <label for="moveOutDate">Дата выселения</label>
            <input
              id="moveOutDate"
              v-model="formData.moveOutDate"
              type="date"
              class="form-input"
            >
          </div>

          <div class="form-group full-width">
            <label for="notes">Примечания</label>
            <textarea
              id="notes"
              v-model="formData.notes"
              class="form-input"
              rows="3"
            ></textarea>
          </div>
        </div>

        <div class="form-actions">
          <button type="button" class="btn-secondary" @click="handleCancel">
            Отмена
          </button>
          <button type="submit" class="btn-primary">
            {{ residentId ? 'Сохранить' : 'Добавить' }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useResidentsStore } from '../stores/residents'
import { useApartmentsStore } from '../stores/apartments'
import { useBuildingsStore } from '../stores/buildings'

const props = defineProps({
  residentId: {
    type: String,
    default: null
  }
})

const emit = defineEmits(['submit', 'cancel'])

const residentsStore = useResidentsStore()
const apartmentsStore = useApartmentsStore()
const buildingsStore = useBuildingsStore()
const isEdit = ref(false)

const formData = ref({
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  apartmentId: '',
  moveInDate: '',
  moveOutDate: '',
  notes: ''
})

const availableApartments = computed(() => apartmentsStore.apartments)

const getBuildingAddress = (buildingId) => {
  const building = buildingsStore.buildings.find(b => b.id === buildingId)
  return building?.address || 'Неизвестно'
}

onMounted(async () => {
  if (props.residentId) {
    isEdit.value = true
    const resident = await residentsStore.getResidentById(props.residentId)
    if (resident) {
      formData.value = { ...resident }
    }
  }
})

const handleSubmit = async () => {
  try {
    if (isEdit.value) {
      await residentsStore.updateResident(props.residentId, formData.value)
    } else {
      await residentsStore.addResident(formData.value)
    }
    emit('submit')
  } catch (error) {
    console.error('Error saving resident:', error)
  }
}

const handleCancel = () => {
  emit('cancel')
}
</script>

<style scoped>
.resident-form {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  color: #666;
  font-weight: 500;
}

input,
select,
textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

input:focus,
select:focus,
textarea:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 2rem;
}

/* Анимации для модального окна */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  animation: fadeIn 0.3s ease;
}

.modal-content {
  background: white;
  border-radius: 8px;
  width: 90%;
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
  animation: slideIn 0.3s ease;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Анимации для формы */
.form-input {
  transition: all 0.2s ease;
}

.form-input:focus {
  transform: translateY(-1px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.form-group {
  animation: fadeInUp 0.5s ease forwards;
  opacity: 0;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Добавляем задержку для каждого поля формы */
.form-group:nth-child(1) { animation-delay: 0.1s; }
.form-group:nth-child(2) { animation-delay: 0.2s; }
.form-group:nth-child(3) { animation-delay: 0.3s; }
.form-group:nth-child(4) { animation-delay: 0.4s; }
.form-group:nth-child(5) { animation-delay: 0.5s; }
.form-group:nth-child(6) { animation-delay: 0.6s; }
.form-group:nth-child(7) { animation-delay: 0.7s; }
.form-group:nth-child(8) { animation-delay: 0.8s; }

/* Анимации для кнопок */
.btn-close {
  transition: all 0.2s ease;
}

.btn-close:hover {
  transform: rotate(90deg);
}

.form-actions {
  animation: fadeIn 0.5s ease forwards;
  animation-delay: 0.9s;
  opacity: 0;
}

.btn-secondary,
.btn-primary {
  transition: all 0.2s ease;
}

.btn-secondary:hover,
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style> 