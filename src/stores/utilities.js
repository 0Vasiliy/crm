import { ref } from 'vue'
import { db } from '../firebase'
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore'

export const useUtilitiesStore = () => {
  const utilities = ref([])
  const loading = ref(false)
  const error = ref(null)

  const fetchUtilities = async () => {
    loading.value = true
    error.value = null
    try {
      const querySnapshot = await getDocs(collection(db, 'utilities'))
      utilities.value = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
    } catch (err) {
      error.value = err.message
      console.error('Error fetching utilities:', err)
    } finally {
      loading.value = false
    }
  }

  const addUtility = async (utilityData) => {
    loading.value = true
    error.value = null
    try {
      const docRef = await addDoc(collection(db, 'utilities'), {
        ...utilityData,
        createdAt: new Date().toISOString()
      })
      const newUtility = {
        id: docRef.id,
        ...utilityData
      }
      utilities.value.push(newUtility)
      return newUtility
    } catch (err) {
      error.value = err.message
      console.error('Error adding utility:', err)
      throw err
    } finally {
      loading.value = false
    }
  }

  const updateUtility = async (id, utilityData) => {
    loading.value = true
    error.value = null
    try {
      const utilityRef = doc(db, 'utilities', id)
      await updateDoc(utilityRef, {
        ...utilityData,
        updatedAt: new Date().toISOString()
      })
      const index = utilities.value.findIndex(u => u.id === id)
      if (index !== -1) {
        utilities.value[index] = {
          ...utilities.value[index],
          ...utilityData
        }
      }
    } catch (err) {
      error.value = err.message
      console.error('Error updating utility:', err)
      throw err
    } finally {
      loading.value = false
    }
  }

  const deleteUtility = async (id) => {
    loading.value = true
    error.value = null
    try {
      await deleteDoc(doc(db, 'utilities', id))
      utilities.value = utilities.value.filter(u => u.id !== id)
    } catch (err) {
      error.value = err.message
      console.error('Error deleting utility:', err)
      throw err
    } finally {
      loading.value = false
    }
  }

  return {
    utilities,
    loading,
    error,
    fetchUtilities,
    addUtility,
    updateUtility,
    deleteUtility
  }
} 