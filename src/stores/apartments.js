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

// Создание хранилища Pinia для управления квартирами
export const useApartmentsStore = defineStore('apartments', () => {
  // Реактивные переменные состояния
  const apartments = ref([]) // Список квартир
  const loading = ref(false) // Флаг загрузки
  const error = ref(null) // Ошибки

  // Получение списка квартир (с фильтрацией по ID дома)
  const fetchApartments = async (filters = {}) => {
    loading.value = true
    error.value = null
    try {
      console.log('Загрузка квартир с фильтрами:', filters)
      const apartmentsRef = collection(db, 'apartments')
      let q = query(apartmentsRef)

      if (filters.buildingId) {
        q = query(q, where('buildingId', '==', filters.buildingId))
      }

      const querySnapshot = await getDocs(q)
      const apartmentsList = []
      
      querySnapshot.forEach((doc) => {
        const apartment = { id: doc.id, ...doc.data() }
        apartmentsList.push(apartment)
      })

      console.log('Загружено квартир:', apartmentsList.length)
      apartments.value = apartmentsList
      return apartmentsList
    } catch (error) {
      console.error('Ошибка при загрузке квартир:', error)
      throw error
    } finally {
      loading.value = false
    }
  }

  // Добавление новой квартиры
  const addApartment = async (apartmentData) => {
    try {
      const apartmentsRef = collection(db, 'apartments')
      const docRef = await addDoc(apartmentsRef, {
        ...apartmentData,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      })
      const newApartment = { id: docRef.id, ...apartmentData }
      apartments.value.push(newApartment)
      return docRef.id
    } catch (error) {
      console.error('Ошибка при добавлении квартиры:', error)
      throw error
    }
  }

  // Обновление данных квартиры
  const updateApartment = async (id, apartmentData) => {
    try {
      const apartmentRef = doc(db, 'apartments', id)
      await updateDoc(apartmentRef, {
        ...apartmentData,
        updatedAt: new Date().toISOString()
      })
      const index = apartments.value.findIndex(a => a.id === id)
      if (index !== -1) {
        apartments.value[index] = { ...apartments.value[index], ...apartmentData }
      }
    } catch (error) {
      console.error('Ошибка при обновлении квартиры:', error)
      throw error
    }
  }

  // Удаление квартиры
  const deleteApartment = async (id) => {
    try {
      const apartmentRef = doc(db, 'apartments', id)
      await deleteDoc(apartmentRef)
      apartments.value = apartments.value.filter(a => a.id !== id)
    } catch (error) {
      console.error('Ошибка при удалении квартиры:', error)
      throw error
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