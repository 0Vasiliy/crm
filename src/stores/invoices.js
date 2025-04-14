import { defineStore } from 'pinia'
import { collection, addDoc, getDocs, query, where, updateDoc, doc, deleteDoc } from 'firebase/firestore'
import { db } from '../firebase'

export const useInvoicesStore = defineStore('invoices', {
  state: () => ({
    invoices: [],
    loading: false,
    error: null
  }),

  actions: {
    async fetchInvoices() {
      this.loading = true
      try {
        console.log('Fetching invoices...')
        const querySnapshot = await getDocs(collection(db, 'invoices'))
        this.invoices = querySnapshot.docs.map(doc => {
          const data = doc.data()
          return {
            id: doc.id,
            buildingId: data.buildingId || '',
            apartmentId: data.apartmentId || '',
            residentId: data.residentId || '',
            period: data.period || { month: 1, year: new Date().getFullYear() },
            services: data.services || {},
            buildingTotal: data.buildingTotal || 0,
            apartmentTotal: data.apartmentTotal || 0,
            totalDebt: data.totalDebt || 0,
            total: data.total || 0,
            status: data.status || 'pending',
            createdAt: data.createdAt || new Date().toISOString()
          }
        })
        console.log('Invoices fetched:', this.invoices)
      } catch (error) {
        console.error('Error fetching invoices:', error)
        this.error = error.message
      } finally {
        this.loading = false
      }
    },

    async addInvoice(invoiceData) {
      try {
        console.log('Adding invoice:', invoiceData)
        const docRef = await addDoc(collection(db, 'invoices'), {
          buildingId: invoiceData.buildingId,
          apartmentId: invoiceData.apartmentId,
          residentId: invoiceData.residentId,
          period: invoiceData.period,
          services: invoiceData.services,
          buildingTotal: invoiceData.buildingTotal,
          apartmentTotal: invoiceData.apartmentTotal,
          totalDebt: invoiceData.totalDebt,
          total: invoiceData.total,
          status: 'pending',
          createdAt: new Date().toISOString()
        })
        
        const newInvoice = {
          id: docRef.id,
          ...invoiceData
        }
        
        // Добавляем новый счет в локальное состояние
        this.invoices = [...this.invoices, newInvoice]
        console.log('Invoice added:', newInvoice)
        
        return docRef.id
      } catch (error) {
        console.error('Error adding invoice:', error)
        throw error
      }
    },

    async updateInvoice(id, data) {
      try {
        console.log('Updating invoice:', id, data)
        await updateDoc(doc(db, 'invoices', id), data)
        
        // Обновляем счет в локальном состоянии
        const index = this.invoices.findIndex(invoice => invoice.id === id)
        if (index !== -1) {
          this.invoices[index] = {
            ...this.invoices[index],
            ...data
          }
        }
      } catch (error) {
        console.error('Error updating invoice:', error)
        throw error
      }
    },

    async deleteInvoice(id) {
      try {
        console.log('Deleting invoice:', id)
        await deleteDoc(doc(db, 'invoices', id))
        
        // Удаляем счет из локального состояния
        this.invoices = this.invoices.filter(invoice => invoice.id !== id)
      } catch (error) {
        console.error('Error deleting invoice:', error)
        throw error
      }
    },

    getInvoicesByBuilding(buildingId) {
      if (!buildingId) return []
      const invoices = this.invoices.filter(invoice => invoice.buildingId === buildingId)
      console.log('Invoices for building', buildingId, ':', invoices)
      return invoices
    },

    getInvoicesByApartment(apartmentId) {
      if (!apartmentId) return []
      const invoices = this.invoices.filter(invoice => invoice.apartmentId === apartmentId)
      console.log('Invoices for apartment', apartmentId, ':', invoices)
      return invoices
    },

    getInvoicesByResident(residentId) {
      if (!residentId) return []
      const invoices = this.invoices.filter(invoice => invoice.residentId === residentId)
      console.log('Invoices for resident', residentId, ':', invoices)
      return invoices
    },

    getTotalDebtByBuilding(buildingId) {
      const buildingInvoices = this.getInvoicesByBuilding(buildingId)
      const total = buildingInvoices.reduce((sum, invoice) => sum + (invoice.total || 0), 0)
      console.log('Total debt for building', buildingId, ':', total)
      return total
    },

    getTotalDebtByApartment(apartmentId) {
      const apartmentInvoices = this.getInvoicesByApartment(apartmentId)
      const total = apartmentInvoices.reduce((sum, invoice) => sum + (invoice.total || 0), 0)
      console.log('Total debt for apartment', apartmentId, ':', total)
      return total
    },

    getTotalDebtByResident(residentId) {
      const residentInvoices = this.getInvoicesByResident(residentId)
      const total = residentInvoices.reduce((sum, invoice) => sum + (invoice.total || 0), 0)
      console.log('Total debt for resident', residentId, ':', total)
      return total
    },

    getTotalDebt() {
      const total = this.invoices.reduce((sum, invoice) => sum + (invoice.total || 0), 0)
      console.log('Total debt:', total)
      return total
    }
  }
}) 