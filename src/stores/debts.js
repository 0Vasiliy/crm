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

export const useDebtsStore = defineStore('debts', () => {
  const debts = ref([])
  const loading = ref(false)
  const error = ref(null)

  const fetchDebts = async (filters = {}) => {
    try {
      const constraints = []
      const debtsRef = collection(db, 'debts')
      
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
      
      const q = query(debtsRef, ...constraints)
      const snapshot = await getDocs(q)
      
      debts.value = snapshot.docs.map(doc => {
        const data = doc.data()
        return {
          id: doc.id,
          ...data,
          date: data.date?.toDate ? data.date.toDate().toISOString() : data.date,
          dueDate: data.dueDate?.toDate ? data.dueDate.toDate().toISOString() : data.dueDate
        }
      })
    } catch (error) {
      console.error('Ошибка при загрузке задолженностей:', error)
      throw error
    }
  }

  const addDebt = async (debtData) => {
    try {
      const debtsRef = collection(db, 'debts')
      const docRef = await addDoc(debtsRef, {
        ...debtData,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      })
      const newDebt = { id: docRef.id, ...debtData }
      debts.value.push(newDebt)
      return docRef.id
    } catch (error) {
      console.error('Ошибка при добавлении задолженности:', error)
      throw error
    }
  }

  const updateDebt = async (id, debtData) => {
    try {
      const debtRef = doc(db, 'debts', id)
      await updateDoc(debtRef, {
        ...debtData,
        updatedAt: new Date().toISOString()
      })
      const index = debts.value.findIndex(d => d.id === id)
      if (index !== -1) {
        debts.value[index] = { ...debts.value[index], ...debtData }
      }
    } catch (error) {
      console.error('Ошибка при обновлении задолженности:', error)
      throw error
    }
  }

  const deleteDebt = async (id) => {
    try {
      const debtRef = doc(db, 'debts', id)
      await deleteDoc(debtRef)
      debts.value = debts.value.filter(d => d.id !== id)
    } catch (error) {
      console.error('Ошибка при удалении задолженности:', error)
      throw error
    }
  }

  return {
    debts,
    loading,
    error,
    fetchDebts,
    addDebt,
    updateDebt,
    deleteDebt
  }
}) 