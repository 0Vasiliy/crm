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
  orderBy,
  where
} from 'firebase/firestore'

export const usePaymentsStore = defineStore('payments', () => {
  const payments = ref([])
  const loading = ref(false)
  const error = ref(null)

  const fetchPayments = async (filters = {}) => {
    loading.value = true
    error.value = null
    try {
      console.log('Загрузка платежей с фильтрами:', filters)
      const paymentsRef = collection(db, 'payments')
      let q = query(paymentsRef, orderBy('date', 'desc'))

      // Применяем все фильтры на уровне Firestore
      if (filters.buildingId) {
        q = query(q, where('buildingId', '==', filters.buildingId))
      }
      if (filters.apartmentId) {
        q = query(q, where('apartmentId', '==', filters.apartmentId))
      }
      if (filters.residentId) {
        q = query(q, where('residentId', '==', filters.residentId))
      }

      const querySnapshot = await getDocs(q)
      const paymentsList = []
      
      querySnapshot.forEach((doc) => {
        const payment = { id: doc.id, ...doc.data() }
        paymentsList.push(payment)
      })

      console.log('Загружено платежей:', paymentsList.length)
      payments.value = paymentsList
      return paymentsList
    } catch (error) {
      console.error('Ошибка при загрузке платежей:', error)
      throw error
    } finally {
      loading.value = false
    }
  }

  const addPayment = async (paymentData) => {
    try {
      const paymentsRef = collection(db, 'payments')
      const docRef = await addDoc(paymentsRef, {
        ...paymentData,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      })
      const newPayment = { id: docRef.id, ...paymentData }
      payments.value.push(newPayment)
      return docRef.id
    } catch (error) {
      console.error('Ошибка при добавлении платежа:', error)
      throw error
    }
  }

  const updatePayment = async (id, paymentData) => {
    try {
      const paymentRef = doc(db, 'payments', id)
      await updateDoc(paymentRef, {
        ...paymentData,
        updatedAt: new Date().toISOString()
      })
      const index = payments.value.findIndex(p => p.id === id)
      if (index !== -1) {
        payments.value[index] = { ...payments.value[index], ...paymentData }
      }
    } catch (error) {
      console.error('Ошибка при обновлении платежа:', error)
      throw error
    }
  }

  const deletePayment = async (id) => {
    try {
      const paymentRef = doc(db, 'payments', id)
      await deleteDoc(paymentRef)
      payments.value = payments.value.filter(p => p.id !== id)
    } catch (error) {
      console.error('Ошибка при удалении платежа:', error)
      throw error
    }
  }

  return {
    payments,
    loading,
    error,
    fetchPayments,
    addPayment,
    updatePayment,
    deletePayment
  }
}) 