<template>
  <div class="apartment-form">
    <h2>{{ isEdit ? 'Редактирование квартиры' : 'Добавление новой квартиры' }}</h2>
    
    <form @submit.prevent="handleSubmit">
      <div class="form-row">
        <div class="form-group">
          <label for="number">Номер квартиры</label>
          <input
            id="number"
            v-model="formData.number"
            type="text"
            required
            placeholder="Введите номер квартиры"
          >
        </div>

        <div class="form-group">
          <label for="floor">Этаж</label>
          <input
            id="floor"
            v-model.number="formData.floor"
            type="number"
            required
            :min="1"
            :max="maxFloor"
          >
        </div>
      </div>

      <div class="form-row">
        <div class="form-group">
          <label for="area">Площадь (м²)</label>
          <input
            id="area"
            v-model.number="formData.area"
            type="number"
            required
            min="0"
            step="0.01"
          >
        </div>

        <div class="form-group">
          <label for="rooms">Количество комнат</label>
          <input
            id="rooms"
            v-model.number="formData.rooms"
            type="number"
            required
            min="1"
          >
        </div>
      </div>

      <div class="form-row">
        <div class="form-group">
          <label for="status">Статус</label>
          <select
            id="status"
            v-model="formData.status"
            required
          >
            <option value="free">Свободна</option>
            <option value="sold">Продана</option>
            <option value="reserved">Забронирована</option>
          </select>
        </div>

        <div class="form-group">
          <label for="price">Цена (₽)</label>
          <input
            id="price"
            v-model.number="formData.price"
            type="number"
            required
            min="0"
          >
        </div>
      </div>

      <div class="form-group">
        <label for="layout">Планировка</label>
        <textarea
          id="layout"
          v-model="formData.layout"
          rows="4"
          placeholder="Описание планировки"
        ></textarea>
      </div>

      <div class="form-group">
        <label for="features">Особенности</label>
        <div class="features-grid">
          <label v-for="feature in availableFeatures" :key="feature.value" class="feature-checkbox">
            <input
              type="checkbox"
              :value="feature.value"
              v-model="formData.features"
            >
            {{ feature.label }}
          </label>
        </div>
      </div>

      <div class="form-actions">
        <button type="button" class="btn-secondary" @click="cancel">
          Отмена
        </button>
        <button type="submit" class="btn-primary">
          {{ isEdit ? 'Сохранить' : 'Добавить' }}
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useApartmentsStore } from '../stores/apartments'

const props = defineProps({
  apartmentId: {
    type: String,
    default: null
  },
  buildingId: {
    type: String,
    required: true
  },
  maxFloor: {
    type: Number,
    required: true
  }
})

const emit = defineEmits(['submit', 'cancel'])

const apartmentsStore = useApartmentsStore()
const isEdit = ref(false)

const formData = ref({
  number: '',
  floor: 1,
  area: 0,
  rooms: 1,
  status: 'free',
  price: 0,
  layout: '',
  features: [],
  buildingId: props.buildingId
})

const availableFeatures = [
  { value: 'balcony', label: 'Балкон' },
  { value: 'loggia', label: 'Лоджия' },
  { value: 'parking', label: 'Парковка' },
  { value: 'storage', label: 'Кладовка' },
  { value: 'view', label: 'Вид из окна' }
]

onMounted(async () => {
  if (props.apartmentId) {
    isEdit.value = true
    const apartment = await apartmentsStore.getApartmentById(props.apartmentId)
    if (apartment) {
      formData.value = { ...apartment }
    }
  }
})

const handleSubmit = async () => {
  try {
    if (isEdit.value) {
      await apartmentsStore.updateApartment(props.apartmentId, formData.value)
    } else {
      await apartmentsStore.addApartment(formData.value)
    }
    emit('submit')
  } catch (error) {
    console.error('Error saving apartment:', error)
  }
}

const cancel = () => {
  emit('cancel')
}
</script>

<style scoped>
.apartment-form {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 1.5rem;
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

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;
  margin-top: 0.5rem;
}

.feature-checkbox {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
}

.feature-checkbox input[type="checkbox"] {
  width: auto;
  margin: 0;
}
</style> 