<template>
  <div class="maintenance-module">
    <h1>Обслуживание</h1>
    
    <div class="maintenance-tabs">
      <q-tabs
        v-model="activeTab"
        class="text-primary"
        active-color="primary"
        indicator-color="primary"
        align="justify"
      >
        <q-tab name="schedule" label="Расписание" />
        <q-tab name="inventory" label="Инвентарь" />
        <q-tab name="contractors" label="Подрядчики" />
        <q-tab name="history" label="История работ" />
      </q-tabs>

      <q-tab-panels v-model="activeTab" animated>
        <!-- Панель расписания -->
        <q-tab-panel name="schedule">
          <div class="row q-col-gutter-md">
            <div class="col-12">
              <q-card>
                <q-card-section>
                  <div class="text-h6">Планировщик технического обслуживания</div>
                  <div class="row q-col-gutter-md">
                    <div class="col-12 col-md-4">
                      <q-select
                        v-model="selectedBuilding"
                        :options="buildings"
                        label="Здание"
                      />
                    </div>
                    <div class="col-12 col-md-4">
                      <q-select
                        v-model="selectedType"
                        :options="maintenanceTypes"
                        label="Тип обслуживания"
                      />
                    </div>
                    <div class="col-12 col-md-4">
                      <q-btn color="primary" label="Добавить задачу" @click="addMaintenanceTask" />
                    </div>
                  </div>
                  <q-table
                    :rows="maintenanceTasks"
                    :columns="taskColumns"
                    row-key="id"
                    :loading="loading"
                  />
                </q-card-section>
              </q-card>
            </div>
          </div>
        </q-tab-panel>

        <!-- Панель инвентаря -->
        <q-tab-panel name="inventory">
          <div class="row q-col-gutter-md">
            <div class="col-12">
              <q-card>
                <q-card-section>
                  <div class="text-h6">Учет инвентаря и материалов</div>
                  <q-table
                    :rows="inventory"
                    :columns="inventoryColumns"
                    row-key="id"
                    :loading="loading"
                  >
                    <template v-slot:top>
                      <q-btn color="primary" label="Добавить позицию" @click="addInventoryItem" />
                    </template>
                  </q-table>
                </q-card-section>
              </q-card>
            </div>
          </div>
        </q-tab-panel>

        <!-- Панель подрядчиков -->
        <q-tab-panel name="contractors">
          <div class="row q-col-gutter-md">
            <div class="col-12">
              <q-card>
                <q-card-section>
                  <div class="text-h6">Управление подрядчиками</div>
                  <q-table
                    :rows="contractors"
                    :columns="contractorColumns"
                    row-key="id"
                    :loading="loading"
                  >
                    <template v-slot:top>
                      <q-btn color="primary" label="Добавить подрядчика" @click="addContractor" />
                    </template>
                  </q-table>
                </q-card-section>
              </q-card>
            </div>
          </div>
        </q-tab-panel>

        <!-- Панель истории работ -->
        <q-tab-panel name="history">
          <div class="row q-col-gutter-md">
            <div class="col-12">
              <q-card>
                <q-card-section>
                  <div class="text-h6">История ремонтных работ</div>
                  <div class="row q-col-gutter-md">
                    <div class="col-12 col-md-4">
                      <q-select
                        v-model="selectedPeriod"
                        :options="periodTypes"
                        label="Период"
                      />
                    </div>
                    <div class="col-12 col-md-4">
                      <q-select
                        v-model="selectedStatus"
                        :options="statusTypes"
                        label="Статус"
                      />
                    </div>
                  </div>
                  <q-table
                    :rows="workHistory"
                    :columns="historyColumns"
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
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  name: 'MaintenanceModule',
  setup() {
    const activeTab = ref('schedule')
    const loading = ref(false)
    const selectedBuilding = ref(null)
    const selectedType = ref(null)
    const selectedPeriod = ref(null)
    const selectedStatus = ref(null)

    const taskColumns = [
      { name: 'id', label: 'ID', field: 'id', sortable: true },
      { name: 'building', label: 'Здание', field: 'building', sortable: true },
      { name: 'type', label: 'Тип работы', field: 'type', sortable: true },
      { name: 'date', label: 'Дата', field: 'date', sortable: true },
      { name: 'status', label: 'Статус', field: 'status', sortable: true },
      { name: 'contractor', label: 'Подрядчик', field: 'contractor', sortable: true }
    ]

    const inventoryColumns = [
      { name: 'id', label: 'ID', field: 'id', sortable: true },
      { name: 'name', label: 'Наименование', field: 'name', sortable: true },
      { name: 'category', label: 'Категория', field: 'category', sortable: true },
      { name: 'quantity', label: 'Количество', field: 'quantity', sortable: true },
      { name: 'location', label: 'Место хранения', field: 'location', sortable: true }
    ]

    const contractorColumns = [
      { name: 'id', label: 'ID', field: 'id', sortable: true },
      { name: 'name', label: 'Название', field: 'name', sortable: true },
      { name: 'type', label: 'Тип работ', field: 'type', sortable: true },
      { name: 'contact', label: 'Контакт', field: 'contact', sortable: true },
      { name: 'rating', label: 'Рейтинг', field: 'rating', sortable: true }
    ]

    const historyColumns = [
      { name: 'id', label: 'ID', field: 'id', sortable: true },
      { name: 'date', label: 'Дата', field: 'date', sortable: true },
      { name: 'type', label: 'Тип работы', field: 'type', sortable: true },
      { name: 'location', label: 'Место', field: 'location', sortable: true },
      { name: 'contractor', label: 'Подрядчик', field: 'contractor', sortable: true },
      { name: 'status', label: 'Статус', field: 'status', sortable: true }
    ]

    const maintenanceTypes = [
      { label: 'Плановый осмотр', value: 'inspection' },
      { label: 'Ремонт', value: 'repair' },
      { label: 'Замена оборудования', value: 'replacement' },
      { label: 'Уборка', value: 'cleaning' }
    ]

    const periodTypes = [
      { label: 'Неделя', value: 'week' },
      { label: 'Месяц', value: 'month' },
      { label: 'Квартал', value: 'quarter' },
      { label: 'Год', value: 'year' }
    ]

    const statusTypes = [
      { label: 'Запланировано', value: 'planned' },
      { label: 'В процессе', value: 'in_progress' },
      { label: 'Завершено', value: 'completed' },
      { label: 'Отменено', value: 'cancelled' }
    ]

    const maintenanceTasks = ref([])
    const inventory = ref([])
    const contractors = ref([])
    const workHistory = ref([])
    const buildings = ref([])

    const addMaintenanceTask = () => {
      // Логика добавления задачи обслуживания
    }

    const addInventoryItem = () => {
      // Логика добавления позиции инвентаря
    }

    const addContractor = () => {
      // Логика добавления подрядчика
    }

    onMounted(() => {
      // Загрузка начальных данных
    })

    return {
      activeTab,
      loading,
      selectedBuilding,
      selectedType,
      selectedPeriod,
      selectedStatus,
      taskColumns,
      inventoryColumns,
      contractorColumns,
      historyColumns,
      maintenanceTypes,
      periodTypes,
      statusTypes,
      maintenanceTasks,
      inventory,
      contractors,
      workHistory,
      buildings,
      addMaintenanceTask,
      addInventoryItem,
      addContractor
    }
  }
}
</script>

<style scoped>
.maintenance-module {
  padding: 20px;
}

.maintenance-tabs {
  margin-top: 20px;
}
</style> 