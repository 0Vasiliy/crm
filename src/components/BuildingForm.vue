<template>
  <div class="building-form">
    <h2>{{ isEdit ? 'Редактирование дома' : 'Добавление нового дома' }}</h2>
    
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="address">Адрес</label>
        <input
          id="address"
          v-model="formData.address"
          type="text"
          required
          placeholder="Введите адрес"
        >
      </div>

      <div class="form-row">
        <div class="form-group">
          <label for="floors">Количество этажей</label>
          <input
            id="floors"
            v-model.number="formData.floors"
            type="number"
            required
            min="1"
          >
        </div>

        <div class="form-group">
          <label for="apartments">Количество квартир</label>
          <input
            id="apartments"
            v-model.number="formData.apartments"
            type="number"
            required
            min="1"
          >
        </div>
      </div>

      <div class="form-row">
        <div class="form-group">
          <label for="yearBuilt">Год постройки</label>
          <input
            id="yearBuilt"
            v-model.number="formData.yearBuilt"
            type="number"
            required
            :min="1900"
            :max="new Date().getFullYear()"
          >
        </div>

        <div class="form-group">
          <label for="status">Статус</label>
          <select
            id="status"
            v-model="formData.status"
            required
          >
            <option value="active">Активен</option>
            <option value="inactive">Неактивен</option>
            <option value="construction">В строительстве</option>
          </select>
        </div>
      </div>

      <div class="form-group">
        <label for="description">Описание</label>
        <textarea
          id="description"
          v-model="formData.description"
          rows="4"
          placeholder="Введите описание дома"
        ></textarea>
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
import { useBuildingsStore } from '../stores/buildings'

const props = defineProps({
  buildingId: {
    type: String,
    default: null
  }
})

const emit = defineEmits(['submit', 'cancel'])

const buildingsStore = useBuildingsStore()
const isEdit = ref(false)

const formData = ref({
  address: '',
  floors: 1,
  apartments: 1,
  yearBuilt: new Date().getFullYear(),
  status: 'active',
  description: ''
})

onMounted(async () => {
  if (props.buildingId) {
    isEdit.value = true
    const building = await buildingsStore.getBuildingById(props.buildingId)
    if (building) {
      formData.value = { ...building }
    }
  }
})

const handleSubmit = async () => {
  try {
    if (isEdit.value) {
      await buildingsStore.updateBuilding(props.buildingId, formData.value)
    } else {
      await buildingsStore.addBuilding(formData.value)
    }
    emit('submit')
  } catch (error) {
    console.error('Error saving building:', error)
  }
}

const cancel = () => {
  emit('cancel')
}
</script>

<style scoped>
.building-form {
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

textarea {
  resize: vertical;
  min-height: 100px;
}
</style> 