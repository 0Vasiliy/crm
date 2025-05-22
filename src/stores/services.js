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
  where,
  orderBy
} from 'firebase/firestore'

export const useServicesStore = defineStore('services', () => {
  const services = ref([])
  const loading = ref(false)
  const error = ref(null)

  // Вычисляемые свойства для получения услуг
  const getServicesByBuilding = computed(() => (buildingId) => {
    return services.value.filter(service => service.buildingId === buildingId)
  })

  const getServicesByApartment = computed(() => (apartmentId) => {
    return services.value.filter(service => service.apartmentId === apartmentId)
  })

  const getServicesByResident = computed(() => (residentId) => {
    return services.value.filter(service => service.residentId === residentId)
  })

  // Вычисляемые свойства для расчета общей суммы услуг
  const getTotalServicesByBuilding = computed(() => (buildingId) => {
    const buildingServices = getServicesByBuilding.value(buildingId)
    return buildingServices.reduce((sum, service) => sum + (service.amount || 0), 0)
  })

  const getTotalServicesByApartment = computed(() => (apartmentId) => {
    const apartmentServices = getServicesByApartment.value(apartmentId)
    return apartmentServices.reduce((sum, service) => sum + (service.amount || 0), 0)
  })

  const getTotalServicesByResident = computed(() => (residentId) => {
    const residentServices = getServicesByResident.value(residentId)
    return residentServices.reduce((sum, service) => sum + (service.amount || 0), 0)
  })

  const fetchServices = async (filters = {}) => {
    loading.value = true
    error.value = null
    try {
      console.log('Загрузка услуг с фильтрами:', filters)
      const servicesRef = collection(db, 'services')
      let q = query(servicesRef)

      // Применяем фильтры последовательно
      if (filters.buildingId) {
        q = query(q, where('buildingId', '==', filters.buildingId))
      }
      
      if (filters.apartmentId) {
        q = query(q, where('apartmentId', '==', filters.apartmentId))
      }
      
      if (filters.residentId) {
        q = query(q, where('residentId', '==', filters.residentId))
      }

      // Добавляем сортировку по дате
      q = query(q, orderBy('date', 'desc'))

      const querySnapshot = await getDocs(q)
      const services = []
      
      querySnapshot.forEach((doc) => {
        const service = { id: doc.id, ...doc.data() }
        services.push(service)
      })

      console.log('Загружено услуг:', services.length)
      services.value = services
      return services
    } catch (error) {
      console.error('Ошибка при загрузке услуг:', error)
      throw error
    } finally {
      loading.value = false
    }
  }

  const addService = async (serviceData) => {
    try {
      const servicesRef = collection(db, 'services')
      const docRef = await addDoc(servicesRef, {
        ...serviceData,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      })
      const newService = { id: docRef.id, ...serviceData }
      services.value.unshift(newService)
      return docRef.id
    } catch (error) {
      console.error('Ошибка при добавлении услуги:', error)
      throw error
    }
  }

  const updateService = async (id, serviceData) => {
    try {
      const serviceRef = doc(db, 'services', id)
      await updateDoc(serviceRef, {
        ...serviceData,
        updatedAt: new Date().toISOString()
      })
      const index = services.value.findIndex(s => s.id === id)
      if (index !== -1) {
        services.value[index] = { ...services.value[index], ...serviceData }
      }
    } catch (error) {
      console.error('Ошибка при обновлении услуги:', error)
      throw error
    }
  }

  const deleteService = async (id) => {
    try {
      const serviceRef = doc(db, 'services', id)
      await deleteDoc(serviceRef)
      services.value = services.value.filter(s => s.id !== id)
    } catch (error) {
      console.error('Ошибка при удалении услуги:', error)
      throw error
    }
  }

  return {
    services,
    loading,
    error,
    fetchServices,
    addService,
    updateService,
    deleteService,
    getServicesByBuilding,
    getServicesByApartment,
    getServicesByResident,
    getTotalServicesByBuilding,
    getTotalServicesByApartment,
    getTotalServicesByResident
  }
}) 