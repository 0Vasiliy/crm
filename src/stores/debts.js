import { defineStore } from 'pinia'
import { collection, addDoc, getDocs, query, where, updateDoc, doc, deleteDoc } from 'firebase/firestore'
import { db } from '../firebase'

export const useDebtsStore = defineStore('debts', {
  state: () => ({
    debts: [],
    loading: false,
    error: null
  }),

  actions: {
    async fetchDebts() {
      this.loading = true
      try {
        const querySnapshot = await getDocs(collection(db, 'debts'))
        this.debts = querySnapshot.docs.map(doc => {
          const data = doc.data()
          return {
            id: doc.id,
            buildingId: data.buildingId,
            apartmentId: data.apartmentId,
            residentId: data.residentId,
            amount: data.amount,
            date: data.date,
            description: data.description,
            status: data.status || 'pending',
            createdAt: data.createdAt || new Date().toISOString()
          }
        })
      } catch (error) {
        console.error('Ошибка при загрузке долгов:', error)
        this.error = error.message
      } finally {
        this.loading = false
      }
    },

    async addDebt(debtData) {
      try {
        const docRef = await addDoc(collection(db, 'debts'), {
          ...debtData,
          createdAt: new Date().toISOString()
        })
        return docRef.id
      } catch (error) {
        console.error('Ошибка при добавлении долга:', error)
        throw error
      }
    },

    async updateDebt(debtId, debtData) {
      try {
        await updateDoc(doc(db, 'debts', debtId), debtData)
      } catch (error) {
        console.error('Ошибка при обновлении долга:', error)
        throw error
      }
    },

    async deleteDebt(debtId) {
      try {
        await deleteDoc(doc(db, 'debts', debtId))
      } catch (error) {
        console.error('Ошибка при удалении долга:', error)
        throw error
      }
    },

    // Получение долгов по зданию
    getDebtsByBuilding(buildingId) {
      return this.debts.filter(debt => debt.buildingId === buildingId)
    },

    // Получение долгов по квартире
    getDebtsByApartment(apartmentId) {
      return this.debts.filter(debt => debt.apartmentId === apartmentId)
    },

    // Получение долгов по жильцу
    getDebtsByResident(residentId) {
      return this.debts.filter(debt => debt.residentId === residentId)
    },

    // Получение общей суммы долга по зданию
    getTotalDebtByBuilding(buildingId) {
      const buildingDebts = this.getDebtsByBuilding(buildingId)
      return buildingDebts.reduce((sum, debt) => sum + (debt.amount || 0), 0)
    },

    // Получение общей суммы долга по квартире
    getTotalDebtByApartment(apartmentId) {
      const apartmentDebts = this.getDebtsByApartment(apartmentId)
      return apartmentDebts.reduce((sum, debt) => sum + (debt.amount || 0), 0)
    },

    // Получение общей суммы долга по жильцу
    getTotalDebtByResident(residentId) {
      const residentDebts = this.getDebtsByResident(residentId)
      return residentDebts.reduce((sum, debt) => sum + (debt.amount || 0), 0)
    },

    // Получение общей суммы всех долгов
    getTotalDebt() {
      return this.debts.reduce((sum, debt) => sum + (debt.amount || 0), 0)
    }
  }
}) 