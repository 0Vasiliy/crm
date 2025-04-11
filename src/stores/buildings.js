import { defineStore } from 'pinia'
import { ref } from 'vue'
import { db } from '../firebase'
import { 
  collection, 
  getDocs, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc 
} from 'firebase/firestore'

// Создание хранилища Pinia для управления домами
export const useBuildingsStore = defineStore('buildings', () => {
  // Реактивные переменные состояния
  const buildings = ref([]) // Список домов
  const loading = ref(false) // Флаг загрузки
  const error = ref(null) // Ошибки

  // Получение списка домов
  const fetchBuildings = async () => {
    loading.value = true
    error.value = null
    try {
      const querySnapshot = await getDocs(collection(db, 'buildings'))
      buildings.value = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
    } catch (err) {
      error.value = err.message
      console.error('Error loading buildings:', err)
      throw err
    } finally {
      loading.value = false
    }
  }

  // Добавление нового дома
  const addBuilding = async (buildingData) => {
    try {
      const docRef = await addDoc(collection(db, 'buildings'), {
        ...buildingData,
        createdAt: new Date().toISOString() // Добавляем дату создания
      })
      const newBuilding = { id: docRef.id, ...buildingData }
      buildings.value.push(newBuilding) // Обновляем локальное состояние
      return newBuilding
    } catch (err) {
      error.value = err.message
      console.error('Error adding building:', err)
      throw err
    }
  }

  // Обновление данных дома
  const updateBuilding = async (id, buildingData) => {
    try {
      const buildingRef = doc(db, 'buildings', id)
      await updateDoc(buildingRef, {
        ...buildingData,
        updatedAt: new Date().toISOString() // Добавляем дату обновления
      })
      // Обновляем локальное состояние
      const index = buildings.value.findIndex(b => b.id === id)
      if (index !== -1) {
        buildings.value[index] = { ...buildings.value[index], ...buildingData }
      }
    } catch (err) {
      error.value = err.message
      console.error('Error updating building:', err)
      throw err
    }
  }

  // Удаление дома
  const deleteBuilding = async (id) => {
    try {
      await deleteDoc(doc(db, 'buildings', id))
      // Обновляем локальное состояние
      buildings.value = buildings.value.filter(b => b.id !== id)
    } catch (err) {
      error.value = err.message
      console.error('Error deleting building:', err)
      throw err
    }
  }

  return {
    buildings,
    loading,
    error,
    fetchBuildings,
    addBuilding,
    updateBuilding,
    deleteBuilding
  }
})