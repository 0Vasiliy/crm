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

// Создание хранилища Pinia для управления услугами
export const useUtilitiesStore = defineStore('utilities', () => {
  // Реактивные переменные состояния
  const utilities = ref([]) // Список услуг
  const loading = ref(false) // Флаг загрузки
  const error = ref(null) // Ошибки

  // Получение списка услуг
  const fetchUtilities = async () => {
    loading.value = true
    error.value = null
    try {
      const querySnapshot = await getDocs(collection(db, 'utilities'))
      utilities.value = querySnapshot.docs.map(doc => {
        const data = doc.data()
        return {
          id: doc.id,
          name: data.name || '',
          unit: data.unit || '',
          rate: data.rate || 0,
          status: data.status || 'active',
          createdAt: data.createdAt || new Date().toISOString()
        }
      })
      console.log('Loaded utilities:', utilities.value) // Для отладки
    } catch (err) {
      error.value = err.message
      console.error('Error loading utilities:', err)
      throw err
    } finally {
      loading.value = false
    }
  }

  // Добавление новой услуги
  const addUtility = async (utilityData) => {
    try {
      const dataToSave = {
        name: utilityData.name.trim(),
        unit: utilityData.unit.trim(),
        rate: parseFloat(utilityData.rate),
        status: utilityData.status || 'active',
        createdAt: new Date().toISOString()
      }

      const docRef = await addDoc(collection(db, 'utilities'), dataToSave)
      const newUtility = { id: docRef.id, ...dataToSave }
      utilities.value.push(newUtility)
      console.log('Added new utility:', newUtility) // Для отладки
      return newUtility
    } catch (err) {
      error.value = err.message
      console.error('Error adding utility:', err)
      throw err
    }
  }

  // Обновление данных услуги
  const updateUtility = async (id, utilityData) => {
    try {
      const dataToUpdate = {
        name: utilityData.name.trim(),
        unit: utilityData.unit.trim(),
        rate: parseFloat(utilityData.rate),
        status: utilityData.status,
        updatedAt: new Date().toISOString()
      }

      const utilityRef = doc(db, 'utilities', id)
      await updateDoc(utilityRef, dataToUpdate)
      
      const index = utilities.value.findIndex(u => u.id === id)
      if (index !== -1) {
        utilities.value[index] = { ...utilities.value[index], ...dataToUpdate }
      }
      console.log('Updated utility:', { id, ...dataToUpdate }) // Для отладки
    } catch (err) {
      error.value = err.message
      console.error('Error updating utility:', err)
      throw err
    }
  }

  // Удаление услуги
  const deleteUtility = async (id) => {
    try {
      await deleteDoc(doc(db, 'utilities', id))
      utilities.value = utilities.value.filter(u => u.id !== id)
      console.log('Deleted utility:', id) // Для отладки
    } catch (err) {
      error.value = err.message
      console.error('Error deleting utility:', err)
      throw err
    }
  }

  return {
    utilities,
    loading,
    error,
    fetchUtilities,
    addUtility,
    updateUtility,
    deleteUtility
  }
}) 