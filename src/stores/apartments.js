import { defineStore } from 'pinia'
import { ref } from 'vue'
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

// Создание хранилища Pinia для управления квартирами
export const useApartmentsStore = defineStore('apartments', () => {
  // Реактивные переменные состояния
  const apartments = ref([]) // Список квартир
  const loading = ref(false) // Флаг загрузки
  const error = ref(null) // Ошибки

  // Получение списка квартир (с фильтрацией по ID дома)
  const fetchApartments = async (buildingId = null) => {
    loading.value = true
    error.value = null
    try {
      let q = collection(db, 'apartments')
      // Добавляем фильтр по ID дома, если он передан
      if (buildingId) {
        q = query(q, where('buildingId', '==', buildingId))
      }
      const querySnapshot = await getDocs(q)
      apartments.value = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
    } catch (err) {
      error.value = err.message
      console.error('Error loading apartments:', err)
      throw err
    } finally {
      loading.value = false
    }
  }

  // Добавление новой квартиры
  const addApartment = async (apartmentData) => {
    try {
      const docRef = await addDoc(collection(db, 'apartments'), {
        ...apartmentData,
        createdAt: new Date().toISOString() // Добавляем дату создания
      })
      const newApartment = { id: docRef.id, ...apartmentData }
      apartments.value.push(newApartment) // Обновляем локальное состояние
      return newApartment
    } catch (err) {
      error.value = err.message
      console.error('Error adding apartment:', err)
      throw err
    }
  }

  // Обновление данных квартиры
  const updateApartment = async (id, apartmentData) => {
    try {
      const apartmentRef = doc(db, 'apartments', id)
      await updateDoc(apartmentRef, {
        ...apartmentData,
        updatedAt: new Date().toISOString() // Добавляем дату обновления
      })
      // Обновляем локальное состояние
      const index = apartments.value.findIndex(a => a.id === id)
        if (index !== -1) {
        apartments.value[index] = { ...apartments.value[index], ...apartmentData }
      }
    } catch (err) {
      error.value = err.message
      console.error('Error updating apartment:', err)
      throw err
    }
  }

  // Удаление квартиры
  const deleteApartment = async (id) => {
    try {
      await deleteDoc(doc(db, 'apartments', id))
      // Обновляем локальное состояние
      apartments.value = apartments.value.filter(a => a.id !== id)
    } catch (err) {
      error.value = err.message
      console.error('Error deleting apartment:', err)
      throw err
    }
  }

  // Получение квартир по ID дома
  const getApartmentsByBuilding = (buildingId) => {
    return apartments.value.filter(apartment => apartment.buildingId === buildingId)
  }

  return {
    apartments,
    loading,
    error,
    fetchApartments,
    addApartment,
    updateApartment,
    deleteApartment,
    getApartmentsByBuilding
  }
}) 