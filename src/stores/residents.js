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

// Создание хранилища Pinia для управления жильцами
export const useResidentsStore = defineStore('residents', () => {
  // Реактивные переменные состояния
  const residents = ref([]) // Список жильцов
  const loading = ref(false) // Флаг загрузки
  const error = ref(null) // Ошибки

  // Получение списка жильцов
  const fetchResidents = async () => {
    loading.value = true
    try {
      const querySnapshot = await getDocs(collection(db, 'residents'))
      residents.value = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
      error.value = null
    } catch (err) {
      error.value = err.message
      console.error('Error fetching residents:', err)
    } finally {
      loading.value = false
    }
  }

  // Добавление нового жильца
  const addResident = async (resident) => {
    try {
      const docRef = await addDoc(collection(db, 'residents'), resident)
      const newResident = { id: docRef.id, ...resident }
      residents.value.push(newResident) // Обновляем локальное состояние
      return newResident
    } catch (err) {
      error.value = err.message
      console.error('Error adding resident:', err)
      throw err
    }
  }

  // Обновление данных жильца
  const updateResident = async (id, updates) => {
    try {
      await updateDoc(doc(db, 'residents', id), updates)
      // Обновляем локальное состояние
      const index = residents.value.findIndex(r => r.id === id)
      if (index !== -1) {
        residents.value[index] = { ...residents.value[index], ...updates }
      }
    } catch (err) {
      error.value = err.message
      console.error('Error updating resident:', err)
      throw err
    }
  }

  // Удаление жильца
  const removeResident = async (id) => {
    try {
      await deleteDoc(doc(db, 'residents', id))
      // Обновляем локальное состояние
      residents.value = residents.value.filter(r => r.id !== id)
    } catch (err) {
      error.value = err.message
      console.error('Error removing resident:', err)
      throw err
    }
  }

  return {
    residents,
    loading,
    error,
    fetchResidents,
    addResident,
    updateResident,
    removeResident
  }
})