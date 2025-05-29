import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { collection, query, where, getDocs, addDoc, updateDoc, deleteDoc, doc, orderBy, Timestamp } from 'firebase/firestore'
import { db } from '../firebase'

export const useInvoicesStore = defineStore('invoices', () => {
  const invoices = ref([])
  const loading = ref(false)
  const error = ref(null)

  // Получение счетов с фильтрами
  const fetchInvoices = async (filters = {}) => {
    loading.value = true
    error.value = null
    try {
      const constraints = []
      const invoicesRef = collection(db, 'invoices')
      
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
        if (Array.isArray(filters.status)) {
          constraints.push(where('status', 'in', filters.status))
        } else {
          constraints.push(where('status', '==', filters.status))
        }
      }
      
      // Добавляем сортировку по дате
      constraints.push(orderBy('date', 'desc'))
      
      const q = query(invoicesRef, ...constraints)
      const snapshot = await getDocs(q)
      
      invoices.value = snapshot.docs.map(doc => {
        const data = doc.data()
        return {
          id: doc.id,
          ...data,
          date: data.date?.toDate ? data.date.toDate().toISOString() : data.date
        }
      })
    } catch (error) {
      error.value = error.message
      console.error('Ошибка при загрузке счетов:', error)
      throw error
    } finally {
      loading.value = false
    }
  }

  // Добавление нового счета
  const addInvoice = async (invoiceData) => {
    try {
      const dataToSave = {
        ...invoiceData,
        date: Timestamp.fromDate(new Date(invoiceData.date)),
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now()
      }

      const docRef = await addDoc(collection(db, 'invoices'), dataToSave)
      const newInvoice = {
        id: docRef.id,
        ...dataToSave,
        date: dataToSave.date.toDate().toISOString()
      }
      invoices.value.unshift(newInvoice)
      return newInvoice
    } catch (err) {
      error.value = err.message
      console.error('Ошибка при добавлении счета:', err)
      throw err
    }
  }

  // Обновление счета
  const updateInvoice = async (id, invoiceData) => {
    try {
      const dataToUpdate = {
        ...invoiceData,
        date: Timestamp.fromDate(new Date(invoiceData.date)),
        updatedAt: Timestamp.now()
      }

      const invoiceRef = doc(db, 'invoices', id)
      await updateDoc(invoiceRef, dataToUpdate)
      
      const index = invoices.value.findIndex(i => i.id === id)
      if (index !== -1) {
        invoices.value[index] = {
          ...invoices.value[index],
          ...dataToUpdate,
          date: dataToUpdate.date.toDate().toISOString()
        }
      }
    } catch (err) {
      error.value = err.message
      console.error('Ошибка при обновлении счета:', err)
      throw err
    }
  }

  // Удаление счета
  const deleteInvoice = async (id) => {
    try {
      await deleteDoc(doc(db, 'invoices', id))
      invoices.value = invoices.value.filter(i => i.id !== id)
    } catch (err) {
      error.value = err.message
      console.error('Ошибка при удалении счета:', err)
      throw err
    }
  }

  // Обновление статуса счета при оплате
  const updateInvoiceStatus = async (id, status) => {
    try {
      const invoiceRef = doc(db, 'invoices', id)
      await updateDoc(invoiceRef, {
        status,
        updatedAt: Timestamp.now()
      })
      
      const index = invoices.value.findIndex(i => i.id === id)
      if (index !== -1) {
        invoices.value[index].status = status
      }
    } catch (err) {
      error.value = err.message
      console.error('Ошибка при обновлении статуса счета:', err)
      throw err
    }
  }

  // Вычисляемые свойства
  const getInvoicesByBuilding = computed(() => (buildingId) => {
    return invoices.value.filter(invoice => invoice.buildingId === buildingId)
  })

  const getInvoicesByApartment = computed(() => (apartmentId) => {
    return invoices.value.filter(invoice => invoice.apartmentId === apartmentId)
  })

  const getInvoicesByResident = computed(() => (residentId) => {
    return invoices.value.filter(invoice => invoice.residentId === residentId)
  })

  const getTotalInvoicesByBuilding = computed(() => (buildingId) => {
    const buildingInvoices = getInvoicesByBuilding.value(buildingId)
    return buildingInvoices.reduce((sum, invoice) => sum + (invoice.total || 0), 0)
  })

  const getTotalInvoicesByApartment = computed(() => (apartmentId) => {
    const apartmentInvoices = getInvoicesByApartment.value(apartmentId)
    return apartmentInvoices.reduce((sum, invoice) => sum + (invoice.total || 0), 0)
  })

  const getTotalInvoicesByResident = computed(() => (residentId) => {
    const residentInvoices = getInvoicesByResident.value(residentId)
    return residentInvoices.reduce((sum, invoice) => sum + (invoice.total || 0), 0)
  })

  const getTotalDebt = computed(() => {
    return invoices.value
      .filter(invoice => invoice.status === 'pending' || invoice.status === 'overdue')
      .reduce((sum, invoice) => sum + (invoice.total || 0), 0)
  })

  return {
    invoices,
    loading,
    error,
    fetchInvoices,
    addInvoice,
    updateInvoice,
    deleteInvoice,
    updateInvoiceStatus,
    getInvoicesByBuilding,
    getInvoicesByApartment,
    getInvoicesByResident,
    getTotalInvoicesByBuilding,
    getTotalInvoicesByApartment,
    getTotalInvoicesByResident,
    getTotalDebt
  }
}) 