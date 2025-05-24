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
    loading.value = true
    error.value = null
    try {
      console.log('Загрузка задолженностей с фильтрами:', filters)
      const debtsRef = collection(db, 'debts')
      let q = query(debtsRef, orderBy('date', 'desc'))

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
      const debtsList = []
      
      querySnapshot.forEach((doc) => {
        const debt = { id: doc.id, ...doc.data() }
        debtsList.push(debt)
      })

      console.log('Загружено задолженностей:', debtsList.length)
      debts.value = debtsList
      return debtsList
    } catch (error) {
      console.error('Ошибка при загрузке задолженностей:', error)
      throw error
    } finally {
      loading.value = false
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