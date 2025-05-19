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
  where
} from 'firebase/firestore'

export const useCommunicationsStore = defineStore('communications', () => {
  // Реактивные переменные состояния
  const notifications = ref([]) // Список уведомлений
  const templates = ref([]) // Шаблоны сообщений
  const scenarios = ref([]) // Сценарии чат-бота
  const loading = ref(false) // Флаг загрузки
  const error = ref(null) // Ошибки

  // Получение списка уведомлений
  const fetchNotifications = async () => {
    loading.value = true
    try {
      const querySnapshot = await getDocs(collection(db, 'notifications'))
      notifications.value = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
    } catch (err) {
      error.value = err.message
      console.error('Ошибка при загрузке уведомлений:', err)
    } finally {
      loading.value = false
    }
  }

  // Отправка уведомления
  const sendNotification = async (notificationData) => {
    try {
      const docRef = await addDoc(collection(db, 'notifications'), {
        ...notificationData,
        status: 'sent',
        createdAt: new Date().toISOString()
      })
      const newNotification = { id: docRef.id, ...notificationData }
      notifications.value.push(newNotification)
      return newNotification
    } catch (err) {
      error.value = err.message
      console.error('Ошибка при отправке уведомления:', err)
      throw err
    }
  }

  // Получение шаблонов сообщений
  const fetchTemplates = async () => {
    loading.value = true
    try {
      const querySnapshot = await getDocs(collection(db, 'messageTemplates'))
      templates.value = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
    } catch (err) {
      error.value = err.message
      console.error('Ошибка при загрузке шаблонов:', err)
    } finally {
      loading.value = false
    }
  }

  // Создание шаблона сообщения
  const createTemplate = async (templateData) => {
    try {
      const docRef = await addDoc(collection(db, 'messageTemplates'), {
        ...templateData,
        createdAt: new Date().toISOString()
      })
      const newTemplate = { id: docRef.id, ...templateData }
      templates.value.push(newTemplate)
      return newTemplate
    } catch (err) {
      error.value = err.message
      console.error('Ошибка при создании шаблона:', err)
      throw err
    }
  }

  // Получение сценариев чат-бота
  const fetchScenarios = async () => {
    loading.value = true
    try {
      const querySnapshot = await getDocs(collection(db, 'chatbotScenarios'))
      scenarios.value = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
    } catch (err) {
      error.value = err.message
      console.error('Ошибка при загрузке сценариев:', err)
    } finally {
      loading.value = false
    }
  }

  // Добавление сценария чат-бота
  const addScenario = async (scenarioData) => {
    try {
      const docRef = await addDoc(collection(db, 'chatbotScenarios'), {
        ...scenarioData,
        createdAt: new Date().toISOString()
      })
      const newScenario = { id: docRef.id, ...scenarioData }
      scenarios.value.push(newScenario)
      return newScenario
    } catch (err) {
      error.value = err.message
      console.error('Ошибка при добавлении сценария:', err)
      throw err
    }
  }

  // Обновление сценария чат-бота
  const updateScenario = async (id, scenarioData) => {
    try {
      const scenarioRef = doc(db, 'chatbotScenarios', id)
      await updateDoc(scenarioRef, {
        ...scenarioData,
        updatedAt: new Date().toISOString()
      })
      const index = scenarios.value.findIndex(s => s.id === id)
      if (index !== -1) {
        scenarios.value[index] = { ...scenarios.value[index], ...scenarioData }
      }
    } catch (err) {
      error.value = err.message
      console.error('Ошибка при обновлении сценария:', err)
      throw err
    }
  }

  // Удаление сценария чат-бота
  const deleteScenario = async (id) => {
    try {
      await deleteDoc(doc(db, 'chatbotScenarios', id))
      scenarios.value = scenarios.value.filter(s => s.id !== id)
    } catch (err) {
      error.value = err.message
      console.error('Ошибка при удалении сценария:', err)
      throw err
    }
  }

  return {
    notifications,
    templates,
    scenarios,
    loading,
    error,
    fetchNotifications,
    sendNotification,
    fetchTemplates,
    createTemplate,
    fetchScenarios,
    addScenario,
    updateScenario,
    deleteScenario
  }
}) 