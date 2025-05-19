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

// Создание хранилища Pinia для управления общественными помещениями
export const useCommonAreasStore = defineStore('commonAreas', () => {
  // Реактивные переменные состояния
  const commonAreas = ref([]) // Список помещений
  const bookings = ref([]) // Список бронирований
  const maintenanceSchedule = ref([]) // График обслуживания
  const loading = ref(false) // Флаг загрузки
  const error = ref(null) // Ошибки

  // Получение списка помещений
  const fetchCommonAreas = async () => {
    loading.value = true
    error.value = null
    try {
      const querySnapshot = await getDocs(collection(db, 'commonAreas'))
      commonAreas.value = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
    } catch (err) {
      error.value = err.message
      console.error('Ошибка при загрузке помещений:', err)
    } finally {
      loading.value = false
    }
  }

  // Добавление нового помещения
  const addCommonArea = async (areaData) => {
    try {
      const docRef = await addDoc(collection(db, 'commonAreas'), {
        ...areaData,
        createdAt: new Date().toISOString()
      })
      const newArea = { id: docRef.id, ...areaData }
      commonAreas.value.push(newArea)
      return newArea
    } catch (err) {
      error.value = err.message
      console.error('Ошибка при добавлении помещения:', err)
      throw err
    }
  }

  // Обновление данных помещения
  const updateCommonArea = async (id, areaData) => {
    try {
      const areaRef = doc(db, 'commonAreas', id)
      await updateDoc(areaRef, {
        ...areaData,
        updatedAt: new Date().toISOString()
      })
      const index = commonAreas.value.findIndex(a => a.id === id)
      if (index !== -1) {
        commonAreas.value[index] = { ...commonAreas.value[index], ...areaData }
      }
    } catch (err) {
      error.value = err.message
      console.error('Ошибка при обновлении помещения:', err)
      throw err
    }
  }

  // Удаление помещения
  const deleteCommonArea = async (id) => {
    try {
      await deleteDoc(doc(db, 'commonAreas', id))
      commonAreas.value = commonAreas.value.filter(a => a.id !== id)
    } catch (err) {
      error.value = err.message
      console.error('Ошибка при удалении помещения:', err)
      throw err
    }
  }

  // Получение списка бронирований
  const fetchBookings = async () => {
    loading.value = true
    try {
      const querySnapshot = await getDocs(collection(db, 'bookings'))
      bookings.value = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
    } catch (err) {
      error.value = err.message
      console.error('Ошибка при загрузке бронирований:', err)
    } finally {
      loading.value = false
    }
  }

  // Добавление нового бронирования
  const addBooking = async (bookingData) => {
    try {
      const docRef = await addDoc(collection(db, 'bookings'), {
        ...bookingData,
        createdAt: new Date().toISOString()
      })
      const newBooking = { id: docRef.id, ...bookingData }
      bookings.value.push(newBooking)
      return newBooking
    } catch (err) {
      error.value = err.message
      console.error('Ошибка при добавлении бронирования:', err)
      throw err
    }
  }

  // Получение графика обслуживания
  const fetchMaintenanceSchedule = async () => {
    loading.value = true
    try {
      const querySnapshot = await getDocs(collection(db, 'maintenanceSchedule'))
      maintenanceSchedule.value = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
    } catch (err) {
      error.value = err.message
      console.error('Ошибка при загрузке графика обслуживания:', err)
    } finally {
      loading.value = false
    }
  }

  // Добавление записи в график обслуживания
  const addMaintenanceRecord = async (maintenanceData) => {
    try {
      const docRef = await addDoc(collection(db, 'maintenanceSchedule'), {
        ...maintenanceData,
        createdAt: new Date().toISOString()
      })
      const newRecord = { id: docRef.id, ...maintenanceData }
      maintenanceSchedule.value.push(newRecord)
      return newRecord
    } catch (err) {
      error.value = err.message
      console.error('Ошибка при добавлении записи обслуживания:', err)
      throw err
    }
  }

  return {
    commonAreas,
    bookings,
    maintenanceSchedule,
    loading,
    error,
    fetchCommonAreas,
    addCommonArea,
    updateCommonArea,
    deleteCommonArea,
    fetchBookings,
    addBooking,
    fetchMaintenanceSchedule,
    addMaintenanceRecord
  }
}) 