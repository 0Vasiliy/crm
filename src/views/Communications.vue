<template>
  <div class="communications-module">
    <h1>Коммуникации</h1>
    
    <div class="communications-tabs">
      <q-tabs
        v-model="activeTab"
        class="text-primary"
        active-color="primary"
        indicator-color="primary"
        align="justify"
      >
        <q-tab name="notifications" label="Массовые рассылки" />
        <q-tab name="chatbot" label="Чат-бот" />
        <q-tab name="templates" label="Шаблоны" />
      </q-tabs>

      <q-tab-panels v-model="activeTab" animated>
        <!-- Панель массовых рассылок -->
        <q-tab-panel name="notifications">
          <div class="row q-col-gutter-md">
            <div class="col-12">
              <q-card>
                <q-card-section>
                  <div class="text-h6">Отправка уведомлений</div>
                  <div class="row q-col-gutter-md">
                    <div class="col-12 col-md-6">
                      <q-select
                        v-model="selectedTemplate"
                        :options="templates"
                        label="Шаблон сообщения"
                        option-label="name"
                      />
                    </div>
                    <div class="col-12 col-md-6">
                      <q-select
                        v-model="selectedRecipients"
                        :options="recipientGroups"
                        label="Группа получателей"
                        multiple
                      />
                    </div>
                    <div class="col-12">
                      <q-input
                        v-model="notificationMessage"
                        type="textarea"
                        label="Текст сообщения"
                        :disable="!!selectedTemplate"
                      />
                    </div>
                    <div class="col-12">
                      <q-btn color="primary" label="Отправить" @click="sendNotification" />
                    </div>
                  </div>
                  <q-table
                    :rows="notifications"
                    :columns="notificationColumns"
                    row-key="id"
                    :loading="loading"
                  />
                </q-card-section>
              </q-card>
            </div>
          </div>
        </q-tab-panel>

        <!-- Панель чат-бота -->
        <q-tab-panel name="chatbot">
          <div class="row q-col-gutter-md">
            <div class="col-12">
              <q-card>
                <q-card-section>
                  <div class="text-h6">Настройка чат-бота</div>
                  <div class="row q-col-gutter-md">
                    <div class="col-12 col-md-4">
                      <q-input
                        v-model="newScenario.question"
                        label="Вопрос"
                      />
                    </div>
                    <div class="col-12 col-md-8">
                      <q-input
                        v-model="newScenario.answer"
                        type="textarea"
                        label="Ответ"
                      />
                    </div>
                    <div class="col-12">
                      <q-btn color="primary" label="Добавить сценарий" @click="addScenario" />
                    </div>
                  </div>
                  <q-table
                    :rows="scenarios"
                    :columns="scenarioColumns"
                    row-key="id"
                    :loading="loading"
                  >
                    <template v-slot:body-cell-actions="props">
                      <q-td :props="props">
                        <q-btn flat color="primary" icon="edit" @click="editScenario(props.row)" />
                        <q-btn flat color="negative" icon="delete" @click="deleteScenario(props.row)" />
                      </q-td>
                    </template>
                  </q-table>
                </q-card-section>
              </q-card>
            </div>
          </div>
        </q-tab-panel>

        <!-- Панель шаблонов -->
        <q-tab-panel name="templates">
          <div class="row q-col-gutter-md">
            <div class="col-12">
              <q-card>
                <q-card-section>
                  <div class="text-h6">Шаблоны сообщений</div>
                  <div class="row q-col-gutter-md">
                    <div class="col-12 col-md-6">
                      <q-input
                        v-model="newTemplate.name"
                        label="Название шаблона"
                      />
                    </div>
                    <div class="col-12 col-md-6">
                      <q-select
                        v-model="newTemplate.type"
                        :options="templateTypes"
                        label="Тип шаблона"
                      />
                    </div>
                    <div class="col-12">
                      <q-input
                        v-model="newTemplate.content"
                        type="textarea"
                        label="Содержание"
                      />
                    </div>
                    <div class="col-12">
                      <q-btn color="primary" label="Создать шаблон" @click="createTemplate" />
                    </div>
                  </div>
                  <q-table
                    :rows="templates"
                    :columns="templateColumns"
                    row-key="id"
                    :loading="loading"
                  />
                </q-card-section>
              </q-card>
            </div>
          </div>
        </q-tab-panel>
      </q-tab-panels>
    </div>

    <div v-if="notification.show" class="notification" :class="notification.type">
      {{ notification.message }}
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useCommunicationsStore } from '../stores/communications'

export default {
  name: 'CommunicationsModule',
  setup() {
    const communicationsStore = useCommunicationsStore()
    const activeTab = ref('notifications')
    const loading = ref(false)
    const notification = ref({ show: false, message: '', type: '' })

    // Данные для уведомлений
    const selectedTemplate = ref(null)
    const selectedRecipients = ref([])
    const notificationMessage = ref('')

    // Данные для чат-бота
    const newScenario = ref({
      question: '',
      answer: ''
    })

    // Данные для шаблонов
    const newTemplate = ref({
      name: '',
      type: '',
      content: ''
    })

    // Колонки для таблиц
    const notificationColumns = [
      { name: 'id', label: 'ID', field: 'id', sortable: true },
      { name: 'template', label: 'Шаблон', field: 'template', sortable: true },
      { name: 'recipients', label: 'Получатели', field: 'recipients', sortable: true },
      { name: 'status', label: 'Статус', field: 'status', sortable: true },
      { name: 'createdAt', label: 'Дата отправки', field: 'createdAt', sortable: true }
    ]

    const scenarioColumns = [
      { name: 'question', label: 'Вопрос', field: 'question', sortable: true },
      { name: 'answer', label: 'Ответ', field: 'answer', sortable: true },
      { name: 'actions', label: 'Действия', field: 'actions', align: 'center' }
    ]

    const templateColumns = [
      { name: 'name', label: 'Название', field: 'name', sortable: true },
      { name: 'type', label: 'Тип', field: 'type', sortable: true },
      { name: 'content', label: 'Содержание', field: 'content', sortable: true }
    ]

    // Опции для селектов
    const recipientGroups = [
      { label: 'Все жильцы', value: 'all' },
      { label: 'Должники', value: 'debtors' },
      { label: 'Новые жильцы', value: 'new' }
    ]

    const templateTypes = [
      { label: 'Уведомление', value: 'notification' },
      { label: 'Напоминание', value: 'reminder' },
      { label: 'Информационное', value: 'info' }
    ]

    // Функция показа уведомлений
    const showNotification = (message, type = 'success') => {
      notification.value = { show: true, message, type }
      setTimeout(() => {
        notification.value.show = false
      }, 3000)
    }

    // Отправка уведомления
    const sendNotification = async () => {
      if (!selectedTemplate.value && !notificationMessage.value) {
        showNotification('Пожалуйста, выберите шаблон или введите текст сообщения', 'error')
        return
      }

      if (!selectedRecipients.value.length) {
        showNotification('Пожалуйста, выберите получателей', 'error')
        return
      }

      try {
        const notificationData = {
          template: selectedTemplate.value?.name || 'Пользовательский шаблон',
          message: selectedTemplate.value?.content || notificationMessage.value,
          recipients: selectedRecipients.value,
          status: 'pending'
        }
        await communicationsStore.sendNotification(notificationData)
        showNotification('Уведомление успешно отправлено')
        selectedTemplate.value = null
        selectedRecipients.value = []
        notificationMessage.value = ''
      } catch (error) {
        showNotification('Ошибка при отправке уведомления', 'error')
      }
    }

    // Создание шаблона
    const createTemplate = async () => {
      if (!newTemplate.value.name || !newTemplate.value.type || !newTemplate.value.content) {
        showNotification('Пожалуйста, заполните все поля шаблона', 'error')
        return
      }

      try {
        await communicationsStore.createTemplate(newTemplate.value)
        showNotification('Шаблон успешно создан')
        newTemplate.value = {
          name: '',
          type: '',
          content: ''
        }
      } catch (error) {
        showNotification('Ошибка при создании шаблона', 'error')
      }
    }

    // Добавление сценария чат-бота
    const addScenario = async () => {
      if (!newScenario.value.question || !newScenario.value.answer) {
        showNotification('Пожалуйста, заполните вопрос и ответ', 'error')
        return
      }

      try {
        await communicationsStore.addScenario(newScenario.value)
        showNotification('Сценарий успешно добавлен')
        newScenario.value = {
          question: '',
          answer: ''
        }
      } catch (error) {
        showNotification('Ошибка при добавлении сценария', 'error')
      }
    }

    // Редактирование сценария
    const editScenario = (scenario) => {
      newScenario.value = { ...scenario }
    }

    // Удаление сценария
    const deleteScenario = async (scenario) => {
      try {
        await communicationsStore.deleteScenario(scenario.id)
        showNotification('Сценарий успешно удален')
      } catch (error) {
        showNotification('Ошибка при удалении сценария', 'error')
      }
    }

    onMounted(async () => {
      loading.value = true
      try {
        await Promise.all([
          communicationsStore.fetchNotifications(),
          communicationsStore.fetchTemplates(),
          communicationsStore.fetchScenarios()
        ])
      } catch (error) {
        showNotification('Ошибка при загрузке данных', 'error')
      } finally {
        loading.value = false
      }
    })

    return {
      activeTab,
      loading,
      notification,
      selectedTemplate,
      selectedRecipients,
      notificationMessage,
      newScenario,
      newTemplate,
      notifications: communicationsStore.notifications,
      templates: communicationsStore.templates,
      scenarios: communicationsStore.scenarios,
      notificationColumns,
      scenarioColumns,
      templateColumns,
      recipientGroups,
      templateTypes,
      sendNotification,
      createTemplate,
      addScenario,
      editScenario,
      deleteScenario
    }
  }
}
</script>

<style scoped>
.communications-module {
  padding: 20px;
}

.communications-tabs {
  margin-top: 20px;
}

.notification {
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 15px 25px;
  border-radius: 4px;
  color: white;
  z-index: 1000;
  transition: opacity 0.3s ease;
}

.notification.success {
  background-color: #4caf50;
}

.notification.error {
  background-color: #f44336;
}
</style> 