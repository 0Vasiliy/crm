import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { collection, query, where, getDocs, addDoc, updateDoc, deleteDoc, doc, orderBy } from 'firebase/firestore'
import { db } from '../firebase'

export const useInvoicesStore = defineStore('invoices', () => {
  const invoices = ref([])
  const loading = ref(false)
  const error = ref(null)

  // Вычисляемые свойства для получения счетов
  const getInvoicesByBuilding = computed(() => (buildingId) => {
    return invoices.value.filter(invoice => invoice.buildingId === buildingId)
  })

  const getInvoicesByApartment = computed(() => (apartmentId) => {
    return invoices.value.filter(invoice => invoice.apartmentId === apartmentId)
  })

  const getInvoicesByResident = computed(() => (residentId) => {
    return invoices.value.filter(invoice => invoice.residentId === residentId)
  })

  // Вычисляемые свойства для расчета общей суммы счетов
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

  const fetchInvoices = async (filters = {}) => {
    loading.value = true
    error.value = null
    try {
      console.log('Загрузка счетов с фильтрами:', filters)
      const invoicesRef = collection(db, 'invoices')
      let q = query(invoicesRef)

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
      const invoices = []
      
      querySnapshot.forEach((doc) => {
        const invoice = { id: doc.id, ...doc.data() }
        invoices.push(invoice)
      })

      console.log('Загружено счетов:', invoices.length)
      invoices.value = invoices
      return invoices
    } catch (error) {
      console.error('Ошибка при загрузке счетов:', error)
      throw error
    } finally {
      loading.value = false
    }
  }

  const addInvoice = async (invoiceData) => {
    try {
      const invoicesRef = collection(db, 'invoices')
      const docRef = await addDoc(invoicesRef, {
        ...invoiceData,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      })
      const newInvoice = { id: docRef.id, ...invoiceData }
      invoices.value.unshift(newInvoice)
        return docRef.id
      } catch (error) {
      console.error('Ошибка при добавлении счета:', error)
        throw error
      }
  }

  const updateInvoice = async (id, invoiceData) => {
    try {
      const invoiceRef = doc(db, 'invoices', id)
      await updateDoc(invoiceRef, {
        ...invoiceData,
        updatedAt: new Date().toISOString()
      })
      const index = invoices.value.findIndex(i => i.id === id)
        if (index !== -1) {
        invoices.value[index] = { ...invoices.value[index], ...invoiceData }
        }
      } catch (error) {
      console.error('Ошибка при обновлении счета:', error)
        throw error
      }
  }

  const deleteInvoice = async (id) => {
    try {
      const invoiceRef = doc(db, 'invoices', id)
      await deleteDoc(invoiceRef)
      invoices.value = invoices.value.filter(i => i.id !== id)
      } catch (error) {
      console.error('Ошибка при удалении счета:', error)
        throw error
    }
  }

  return {
    invoices,
    loading,
    error,
    fetchInvoices,
    addInvoice,
    updateInvoice,
    deleteInvoice,
    getInvoicesByBuilding,
    getInvoicesByApartment,
    getInvoicesByResident,
    getTotalInvoicesByBuilding,
    getTotalInvoicesByApartment,
    getTotalInvoicesByResident,
    getTotalDebt
  }
}) 