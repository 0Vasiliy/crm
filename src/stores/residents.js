import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { db } from '../firebase'
import { 
  collection, 
  getDocs, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc,
  query,
  where
} from 'firebase/firestore'

// Создание хранилища Pinia для управления жильцами
export const useResidentsStore = defineStore('residents', () => {
  // Реактивные переменные состояния
  const residents = ref([]) // Список жильцов
  const loading = ref(false) // Флаг загрузки
  const error = ref(null) // Ошибки

  // Получение списка жильцов
  const fetchResidents = async (filters = {}) => {
    loading.value = true
    error.value = null
    try {
      console.log('Загрузка жильцов с фильтрами:', filters)
      const residentsRef = collection(db, 'residents')
      let q = query(residentsRef)

      if (filters.apartmentId) {
        q = query(q, where('apartmentId', '==', filters.apartmentId))
      }

      const querySnapshot = await getDocs(q)
      const residentsList = []
      
      querySnapshot.forEach((doc) => {
        const resident = { id: doc.id, ...doc.data() }
        residentsList.push(resident)
      })

      console.log('Загружено жильцов:', residentsList.length)
      residents.value = residentsList
      return residentsList
    } catch (error) {
      console.error('Ошибка при загрузке жильцов:', error)
      throw error
    } finally {
      loading.value = false
    }
  }

  // Добавление нового жильца
  const addResident = async (residentData) => {
    try {
      const residentsRef = collection(db, 'residents')
      const docRef = await addDoc(residentsRef, {
        ...residentData,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      })
      const newResident = { id: docRef.id, ...residentData }
      residents.value.push(newResident)
      return docRef.id
    } catch (error) {
      console.error('Ошибка при добавлении жильца:', error)
      throw error
    }
  }

  // Обновление данных жильца
  const updateResident = async (id, residentData) => {
    try {
      const residentRef = doc(db, 'residents', id)
      await updateDoc(residentRef, {
        ...residentData,
        updatedAt: new Date().toISOString()
      })
      const index = residents.value.findIndex(r => r.id === id)
      if (index !== -1) {
        residents.value[index] = { ...residents.value[index], ...residentData }
      }
    } catch (error) {
      console.error('Ошибка при обновлении жильца:', error)
      throw error
    }
  }

  // Удаление жильца
  const deleteResident = async (id) => {
    try {
      const residentRef = doc(db, 'residents', id)
      await deleteDoc(residentRef)
      residents.value = residents.value.filter(r => r.id !== id)
    } catch (error) {
      console.error('Ошибка при удалении жильца:', error)
      throw error
    }
  }

  return {
    residents,
    loading,
    error,
    fetchResidents,
    addResident,
    updateResident,
    deleteResident
  }
})