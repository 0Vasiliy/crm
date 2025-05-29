import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { collection, query, where, getDocs, addDoc, updateDoc, deleteDoc, doc, orderBy, Timestamp } from 'firebase/firestore'
import { db } from '../firebase'

export const usePaymentsStore = defineStore('payments', () => {
  const payments = ref([])
  const loading = ref(false)
  const error = ref(null)

  // Получение платежей с фильтрами
  const fetchPayments = async (filters = {}) => {
    loading.value = true
    error.value = null
    try {
      let q = collection(db, 'payments')
      const constraints = []

      if (filters.buildingId) {
        constraints.push(where('buildingId', '==', filters.buildingId))
      }
      if (filters.apartmentId) {
        constraints.push(where('apartmentId', '==', filters.apartmentId))
      }
      if (filters.residentId) {
        constraints.push(where('residentId', '==', filters.residentId))
      }
      if (filters.status) {
        constraints.push(where('status', '==', filters.status))
      }
      if (filters.type) {
        constraints.push(where('type', '==', filters.type))
      }
      if (filters.startDate) {
        constraints.push(where('date', '>=', Timestamp.fromDate(new Date(filters.startDate))))
      }
      if (filters.endDate) {
        constraints.push(where('date', '<=', Timestamp.fromDate(new Date(filters.endDate))))
      }

      constraints.push(orderBy('date', 'desc'))
      q = query(q, ...constraints)

      const querySnapshot = await getDocs(q)
      payments.value = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        date: doc.data().date.toDate().toISOString()
      }))
    } catch (err) {
      error.value = err.message
      console.error('Ошибка при загрузке платежей:', err)
      throw err
    } finally {
      loading.value = false
    }
  }

  // Добавление нового платежа
  const addPayment = async (paymentData) => {
    try {
      const dataToSave = {
        ...paymentData,
        date: Timestamp.fromDate(new Date(paymentData.date)),
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now()
      }

      const docRef = await addDoc(collection(db, 'payments'), dataToSave)
      const newPayment = {
        id: docRef.id,
        ...dataToSave,
        date: dataToSave.date.toDate().toISOString()
      }
      payments.value.unshift(newPayment)
      return newPayment
    } catch (err) {
      error.value = err.message
      console.error('Ошибка при добавлении платежа:', err)
      throw err
    }
  }

  // Обновление платежа
  const updatePayment = async (id, paymentData) => {
    try {
      const dataToUpdate = {
        ...paymentData,
        date: Timestamp.fromDate(new Date(paymentData.date)),
        updatedAt: Timestamp.now()
      }

      const paymentRef = doc(db, 'payments', id)
      await updateDoc(paymentRef, dataToUpdate)
      
      const index = payments.value.findIndex(p => p.id === id)
      if (index !== -1) {
        payments.value[index] = {
          ...payments.value[index],
          ...dataToUpdate,
          date: dataToUpdate.date.toDate().toDate().toISOString()
        }
      }
    } catch (err) {
      error.value = err.message
      console.error('Ошибка при обновлении платежа:', err)
      throw err
    }
  }

  // Удаление платежа
  const deletePayment = async (id) => {
    try {
      await deleteDoc(doc(db, 'payments', id))
      payments.value = payments.value.filter(p => p.id !== id)
    } catch (err) {
      error.value = err.message
      console.error('Ошибка при удалении платежа:', err)
      throw err
    }
  }

  // Обновление статуса платежа
  const updatePaymentStatus = async (id, status) => {
    try {
      const paymentRef = doc(db, 'payments', id)
      await updateDoc(paymentRef, {
        status,
        updatedAt: Timestamp.now()
      })
      
      const index = payments.value.findIndex(p => p.id === id)
      if (index !== -1) {
        payments.value[index].status = status
      }
    } catch (err) {
      error.value = err.message
      console.error('Ошибка при обновлении статуса платежа:', err)
      throw err
    }
  }

  // Вычисляемые свойства
  const getPaymentsByBuilding = computed(() => (buildingId) => {
    return payments.value.filter(payment => payment.buildingId === buildingId)
  })

  const getPaymentsByApartment = computed(() => (apartmentId) => {
    return payments.value.filter(payment => payment.apartmentId === apartmentId)
  })

  const getPaymentsByResident = computed(() => (residentId) => {
    return payments.value.filter(payment => payment.residentId === residentId)
  })

  const getTotalPaymentsByBuilding = computed(() => (buildingId) => {
    const buildingPayments = getPaymentsByBuilding.value(buildingId)
    return buildingPayments.reduce((sum, payment) => sum + (payment.amount || 0), 0)
  })

  const getTotalPaymentsByApartment = computed(() => (apartmentId) => {
    const apartmentPayments = getPaymentsByApartment.value(apartmentId)
    return apartmentPayments.reduce((sum, payment) => sum + (payment.amount || 0), 0)
  })

  const getTotalPaymentsByResident = computed(() => (residentId) => {
    const residentPayments = getPaymentsByResident.value(residentId)
    return residentPayments.reduce((sum, payment) => sum + (payment.amount || 0), 0)
  })

  return {
    payments,
    loading,
    error,
    fetchPayments,
    addPayment,
    updatePayment,
    deletePayment,
    updatePaymentStatus,
    getPaymentsByBuilding,
    getPaymentsByApartment,
    getPaymentsByResident,
    getTotalPaymentsByBuilding,
    getTotalPaymentsByApartment,
    getTotalPaymentsByResident
  }
}) 