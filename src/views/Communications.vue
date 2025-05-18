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
        <q-tab name="notifications" label="Уведомления" />
        <q-tab name="chatbot" label="Чат-бот" />
        <q-tab name="templates" label="Шаблоны" />
        <q-tab name="settings" label="Настройки" />
      </q-tabs>

      <q-tab-panels v-model="activeTab" animated>
        <!-- Панель уведомлений -->
        <q-tab-panel name="notifications">
          <div class="row q-col-gutter-md">
            <div class="col-12">
              <q-card>
                <q-card-section>
                  <div class="text-h6">Массовые рассылки</div>
                  <div class="row q-col-gutter-md">
                    <div class="col-12 col-md-4">
                      <q-select
                        v-model="selectedTemplate"
                        :options="notificationTemplates"
                        label="Шаблон уведомления"
                      />
                    </div>
                    <div class="col-12 col-md-4">
                      <q-select
                        v-model="selectedAudience"
                        :options="audienceTypes"
                        label="Целевая аудитория"
                      />
                    </div>
                    <div class="col-12 col-md-4">
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
                    <div class="col-12">
                      <q-list>
                        <q-item v-for="scenario in chatbotScenarios" :key="scenario.id">
                          <q-item-section>
                            <q-item-label>{{ scenario.question }}</q-item-label>
                            <q-item-label caption>{{ scenario.answer }}</q-item-label>
                          </q-item-section>
                          <q-item-section side>
                            <q-btn flat round color="primary" icon="edit" @click="editScenario(scenario)" />
                            <q-btn flat round color="negative" icon="delete" @click="deleteScenario(scenario)" />
                          </q-item-section>
                        </q-item>
                      </q-list>
                      <q-btn color="primary" label="Добавить сценарий" @click="addScenario" class="q-mt-md" />
                    </div>
                  </div>
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
                  <q-table
                    :rows="templates"
                    :columns="templateColumns"
                    row-key="id"
                    :loading="loading"
                  >
                    <template v-slot:top>
                      <q-btn color="primary" label="Создать шаблон" @click="createTemplate" />
                    </template>
                  </q-table>
                </q-card-section>
              </q-card>
            </div>
          </div>
        </q-tab-panel>

        <!-- Панель настроек -->
        <q-tab-panel name="settings">
          <div class="row q-col-gutter-md">
            <div class="col-12">
              <q-card>
                <q-card-section>
                  <div class="text-h6">Настройки коммуникаций</div>
                  <div class="row q-col-gutter-md">
                    <div class="col-12 col-md-6">
                      <q-toggle
                        v-model="settings.emailEnabled"
                        label="Включить email-уведомления"
                      />
                    </div>
                    <div class="col-12 col-md-6">
                      <q-toggle
                        v-model="settings.smsEnabled"
                        label="Включить SMS-уведомления"
                      />
                    </div>
                    <div class="col-12 col-md-6">
                      <q-toggle
                        v-model="settings.pushEnabled"
                        label="Включить push-уведомления"
                      />
                    </div>
                    <div class="col-12 col-md-6">
                      <q-toggle
                        v-model="settings.chatbotEnabled"
                        label="Включить чат-бот"
                      />
                    </div>
                  </div>
                </q-card-section>
              </q-card>
            </div>
          </div>
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  name: 'CommunicationsModule',
  setup() {
    const activeTab = ref('notifications')
    const loading = ref(false)
    const selectedTemplate = ref(null)
    const selectedAudience = ref(null)

    const notificationColumns = [
      { name: 'id', label: 'ID', field: 'id', sortable: true },
      { name: 'date', label: 'Дата', field: 'date', sortable: true },
      { name: 'template', label: 'Шаблон', field: 'template', sortable: true },
      { name: 'audience', label: 'Аудитория', field: 'audience', sortable: true },
      { name: 'status', label: 'Статус', field: 'status', sortable: true }
    ]

    const templateColumns = [
      { name: 'id', label: 'ID', field: 'id', sortable: true },
      { name: 'name', label: 'Название', field: 'name', sortable: true },
      { name: 'type', label: 'Тип', field: 'type', sortable: true },
      { name: 'lastUsed', label: 'Последнее использование', field: 'lastUsed', sortable: true }
    ]

    const notificationTemplates = [
      { label: 'Оплата коммунальных услуг', value: 'payment' },
      { label: 'Плановые работы', value: 'maintenance' },
      { label: 'Экстренное уведомление', value: 'emergency' }
    ]

    const audienceTypes = [
      { label: 'Все жильцы', value: 'all' },
      { label: 'По зданиям', value: 'buildings' },
      { label: 'По квартирам', value: 'apartments' },
      { label: 'По задолженностям', value: 'debts' }
    ]

    const notifications = ref([])
    const templates = ref([])
    const chatbotScenarios = ref([
      {
        id: 1,
        question: 'Как оплатить коммунальные услуги?',
        answer: 'Вы можете оплатить коммунальные услуги через личный кабинет, в офисе ЖКХ или через банк.'
      },
      {
        id: 2,
        question: 'Как подать заявку на ремонт?',
        answer: 'Для подачи заявки на ремонт воспользуйтесь формой в личном кабинете или позвоните в диспетчерскую.'
      }
    ])

    const settings = ref({
      emailEnabled: true,
      smsEnabled: true,
      pushEnabled: true,
      chatbotEnabled: true
    })

    const sendNotification = () => {
      // Логика отправки уведомления
    }

    const createTemplate = () => {
      // Логика создания шаблона
    }

    const addScenario = () => {
      // Логика добавления сценария
    }

    const editScenario = (scenario) => {
      // Логика редактирования сценария
    }

    const deleteScenario = (scenario) => {
      // Логика удаления сценария
    }

    onMounted(() => {
      // Загрузка начальных данных
    })

    return {
      activeTab,
      loading,
      selectedTemplate,
      selectedAudience,
      notificationColumns,
      templateColumns,
      notificationTemplates,
      audienceTypes,
      notifications,
      templates,
      chatbotScenarios,
      settings,
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
</style> 