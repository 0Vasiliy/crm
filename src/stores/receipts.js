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
  where,
  orderBy
} from 'firebase/firestore'

export const useReceiptsStore = defineStore('receipts', () => {
  const receipts = ref([])
  const loading = ref(false)
  const error = ref(null)

  const fetchReceipts = async (filters = {}) => {
    loading.value = true
    error.value = null
    try {
      console.log('Загрузка квитанций с фильтрами:', filters)
      const receiptsRef = collection(db, 'receipts')
      let q = query(receiptsRef)

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

      const querySnapshot = await getDocs(q)
      const receipts = []
      
      querySnapshot.forEach((doc) => {
        const receipt = { id: doc.id, ...doc.data() }
        // Фильтруем по дате на стороне клиента
        if (filters.from && filters.to) {
          const receiptDate = new Date(receipt.date)
          const fromDate = new Date(filters.from)
          const toDate = new Date(filters.to)
          if (receiptDate >= fromDate && receiptDate <= toDate) {
            receipts.push(receipt)
          }
        } else {
          receipts.push(receipt)
        }
      })

      // Сортируем по дате на стороне клиента
      receipts.sort((a, b) => new Date(b.date) - new Date(a.date))

      console.log('Загружено квитанций:', receipts.length)
      receipts.value = receipts
      return receipts
    } catch (error) {
      console.error('Ошибка при загрузке квитанций:', error)
      throw error
    } finally {
      loading.value = false
    }
  }

  const addReceipt = async (receiptData) => {
    try {
      const receiptsRef = collection(db, 'receipts')
      const docRef = await addDoc(receiptsRef, {
        ...receiptData,
        date: new Date().toISOString()
      })
      const newReceipt = { id: docRef.id, ...receiptData }
      receipts.value.unshift(newReceipt)
      return docRef.id
    } catch (error) {
      console.error('Ошибка при добавлении квитанции:', error)
      throw error
    }
  }

  const updateReceipt = async (id, receiptData) => {
    try {
      const receiptRef = doc(db, 'receipts', id)
      await updateDoc(receiptRef, receiptData)
      const index = receipts.value.findIndex(r => r.id === id)
      if (index !== -1) {
        receipts.value[index] = { ...receipts.value[index], ...receiptData }
      }
    } catch (error) {
      console.error('Ошибка при обновлении квитанции:', error)
      throw error
    }
  }

  const deleteReceipt = async (id) => {
    try {
      const receiptRef = doc(db, 'receipts', id)
      await deleteDoc(receiptRef)
      receipts.value = receipts.value.filter(r => r.id !== id)
    } catch (error) {
      console.error('Ошибка при удалении квитанции:', error)
      throw error
    }
  }

  // Получение квитанций по ID платежа
  const getReceiptsByPayment = (paymentId) => {
    return receipts.value.filter(receipt => receipt.paymentId === paymentId)
  }

  // Получение квитанций по ID счета
  const getReceiptsByInvoice = (invoiceId) => {
    return receipts.value.filter(receipt => receipt.invoiceId === invoiceId)
  }

  return {
    receipts,
    loading,
    error,
    fetchReceipts,
    addReceipt,
    updateReceipt,
    deleteReceipt,
    getReceiptsByPayment,
    getReceiptsByInvoice
  }
}) 