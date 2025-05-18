<template>
  <div class="documents-module">
    <h1>Документооборот</h1>
    
    <div class="documents-tabs">
      <q-tabs
        v-model="activeTab"
        class="text-primary"
        active-color="primary"
        indicator-color="primary"
        align="justify"
      >
        <q-tab name="documents" label="Документы" />
        <q-tab name="templates" label="Шаблоны" />
        <q-tab name="workflow" label="Маршруты" />
      </q-tabs>

      <q-tab-panels v-model="activeTab" animated>
        <!-- Панель документов -->
        <q-tab-panel name="documents">
          <div class="row q-col-gutter-md">
            <div class="col-12">
              <q-card>
                <q-card-section>
                  <div class="text-h6">Управление документами</div>
                  <div class="row q-col-gutter-md">
                    <div class="col-12 col-md-4">
                      <q-select
                        v-model="selectedDocumentType"
                        :options="documentTypes"
                        label="Тип документа"
                      />
                    </div>
                    <div class="col-12 col-md-4">
                      <q-select
                        v-model="selectedStatus"
                        :options="documentStatuses"
                        label="Статус"
                      />
                    </div>
                    <div class="col-12 col-md-4">
                      <q-btn color="primary" label="Создать документ" @click="createDocument" />
                    </div>
                  </div>
                  <q-table
                    :rows="documents"
                    :columns="documentColumns"
                    row-key="id"
                    :loading="loading"
                  />
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
                  <div class="text-h6">Шаблоны документов</div>
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

        <!-- Панель маршрутов -->
        <q-tab-panel name="workflow">
          <div class="row q-col-gutter-md">
            <div class="col-12">
              <q-card>
                <q-card-section>
                  <div class="text-h6">Маршруты согласования</div>
                  <div class="row q-col-gutter-md">
                    <div class="col-12">
                      <q-list>
                        <q-item v-for="workflow in workflows" :key="workflow.id">
                          <q-item-section>
                            <q-item-label>{{ workflow.name }}</q-item-label>
                            <q-item-label caption>{{ workflow.description }}</q-item-label>
                          </q-item-section>
                          <q-item-section side>
                            <q-btn flat round color="primary" icon="edit" @click="editWorkflow(workflow)" />
                            <q-btn flat round color="negative" icon="delete" @click="deleteWorkflow(workflow)" />
                          </q-item-section>
                        </q-item>
                      </q-list>
                      <q-btn color="primary" label="Создать маршрут" @click="createWorkflow" class="q-mt-md" />
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
  name: 'DocumentsModule',
  setup() {
    const activeTab = ref('documents')
    const loading = ref(false)
    const selectedDocumentType = ref(null)
    const selectedStatus = ref(null)

    const documentColumns = [
      { name: 'id', label: 'ID', field: 'id', sortable: true },
      { name: 'name', label: 'Название', field: 'name', sortable: true },
      { name: 'type', label: 'Тип', field: 'type', sortable: true },
      { name: 'status', label: 'Статус', field: 'status', sortable: true },
      { name: 'created', label: 'Создан', field: 'created', sortable: true },
      { name: 'author', label: 'Автор', field: 'author', sortable: true }
    ]

    const templateColumns = [
      { name: 'id', label: 'ID', field: 'id', sortable: true },
      { name: 'name', label: 'Название', field: 'name', sortable: true },
      { name: 'type', label: 'Тип', field: 'type', sortable: true },
      { name: 'lastModified', label: 'Изменен', field: 'lastModified', sortable: true }
    ]

    const documentTypes = [
      { label: 'Договоры', value: 'contracts' },
      { label: 'Акты', value: 'acts' },
      { label: 'Приказы', value: 'orders' },
      { label: 'Отчеты', value: 'reports' }
    ]

    const documentStatuses = [
      { label: 'Черновик', value: 'draft' },
      { label: 'На согласовании', value: 'review' },
      { label: 'Утвержден', value: 'approved' },
      { label: 'Архив', value: 'archived' }
    ]

    const documents = ref([])
    const templates = ref([])
    const workflows = ref([
      {
        id: 1,
        name: 'Стандартный маршрут',
        description: 'Руководитель -> Бухгалтерия -> Архив'
      },
      {
        id: 2,
        name: 'Срочный маршрут',
        description: 'Руководитель -> Архив'
      }
    ])

    const createDocument = () => {
      // Логика создания документа
    }

    const createTemplate = () => {
      // Логика создания шаблона
    }

    const createWorkflow = () => {
      // Логика создания маршрута
    }

    const editWorkflow = (workflow) => {
      // Логика редактирования маршрута
    }

    const deleteWorkflow = (workflow) => {
      // Логика удаления маршрута
    }

    onMounted(() => {
      // Загрузка начальных данных
    })

    return {
      activeTab,
      loading,
      selectedDocumentType,
      selectedStatus,
      documentColumns,
      templateColumns,
      documentTypes,
      documentStatuses,
      documents,
      templates,
      workflows,
      createDocument,
      createTemplate,
      createWorkflow,
      editWorkflow,
      deleteWorkflow
    }
  }
}
</script>

<style scoped>
.documents-module {
  padding: 20px;
}

.documents-tabs {
  margin-top: 20px;
}
</style> 