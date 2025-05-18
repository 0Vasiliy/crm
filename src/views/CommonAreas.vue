<template>
  <div class="common-areas-module">
    <h1>Общественные помещения</h1>
    
    <div class="common-areas-tabs">
      <q-tabs
        v-model="activeTab"
        class="text-primary"
        active-color="primary"
        indicator-color="primary"
        align="justify"
      >
        <q-tab name="areas" label="Помещения" />
        <q-tab name="bookings" label="Бронирование" />
        <q-tab name="maintenance" label="Обслуживание" />
      </q-tabs>

      <q-tab-panels v-model="activeTab" animated>
        <!-- Панель помещений -->
        <q-tab-panel name="areas">
          <div class="row q-col-gutter-md">
            <div class="col-12">
              <q-card>
                <q-card-section>
                  <div class="text-h6">Управление помещениями</div>
                  <div class="row q-col-gutter-md">
                    <div class="col-12 col-md-4">
                      <q-select
                        v-model="selectedType"
                        :options="areaTypes"
                        label="Тип помещения"
                      />
                    </div>
                    <div class="col-12 col-md-4">
                      <q-select
                        v-model="selectedStatus"
                        :options="areaStatuses"
                        label="Статус"
                      />
                    </div>
                    <div class="col-12 col-md-4">
                      <q-btn color="primary" label="Добавить помещение" @click="addArea" />
                    </div>
                  </div>
                  <q-table
                    :rows="commonAreas"
                    :columns="areaColumns"
                    row-key="id"
                    :loading="loading"
                  />
                </q-card-section>
              </q-card>
            </div>
          </div>
        </q-tab-panel>

        <!-- Панель бронирования -->
        <q-tab-panel name="bookings">
          <div class="row q-col-gutter-md">
            <div class="col-12">
              <q-card>
                <q-card-section>
                  <div class="text-h6">Бронирование помещений</div>
                  <div class="row q-col-gutter-md">
                    <div class="col-12 col-md-4">
                      <q-select
                        v-model="selectedArea"
                        :options="commonAreas"
                        label="Помещение"
                      />
                    </div>
                    <div class="col-12 col-md-4">
                      <q-input
                        v-model="bookingDate"
                        type="date"
                        label="Дата"
                      />
                    </div>
                    <div class="col-12 col-md-4">
                      <q-btn color="primary" label="Забронировать" @click="bookArea" />
                    </div>
                  </div>
                  <q-table
                    :rows="bookings"
                    :columns="bookingColumns"
                    row-key="id"
                    :loading="loading"
                  />
                </q-card-section>
              </q-card>
            </div>
          </div>
        </q-tab-panel>

        <!-- Панель обслуживания -->
        <q-tab-panel name="maintenance">
          <div class="row q-col-gutter-md">
            <div class="col-12">
              <q-card>
                <q-card-section>
                  <div class="text-h6">Обслуживание помещений</div>
                  <div class="row q-col-gutter-md">
                    <div class="col-12 col-md-4">
                      <q-select
                        v-model="selectedMaintenanceType"
                        :options="maintenanceTypes"
                        label="Тип обслуживания"
                      />
                    </div>
                    <div class="col-12 col-md-4">
                      <q-input
                        v-model="maintenanceDate"
                        type="date"
                        label="Дата"
                      />
                    </div>
                    <div class="col-12 col-md-4">
                      <q-btn color="primary" label="Запланировать" @click="scheduleMaintenance" />
                    </div>
                  </div>
                  <q-table
                    :rows="maintenanceSchedule"
                    :columns="maintenanceColumns"
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
  name: 'CommonAreasModule',
  setup() {
    const activeTab = ref('areas')
    const loading = ref(false)
    const selectedType = ref(null)
    const selectedStatus = ref(null)
    const selectedArea = ref(null)
    const bookingDate = ref(null)
    const selectedMaintenanceType = ref(null)
    const maintenanceDate = ref(null)

    const areaColumns = [
      { name: 'id', label: 'ID', field: 'id', sortable: true },
      { name: 'name', label: 'Название', field: 'name', sortable: true },
      { name: 'type', label: 'Тип', field: 'type', sortable: true },
      { name: 'capacity', label: 'Вместимость', field: 'capacity', sortable: true },
      { name: 'status', label: 'Статус', field: 'status', sortable: true },
      { name: 'location', label: 'Расположение', field: 'location', sortable: true }
    ]

    const bookingColumns = [
      { name: 'id', label: 'ID', field: 'id', sortable: true },
      { name: 'area', label: 'Помещение', field: 'area', sortable: true },
      { name: 'resident', label: 'Жилец', field: 'resident', sortable: true },
      { name: 'date', label: 'Дата', field: 'date', sortable: true },
      { name: 'time', label: 'Время', field: 'time', sortable: true },
      { name: 'status', label: 'Статус', field: 'status', sortable: true }
    ]

    const maintenanceColumns = [
      { name: 'id', label: 'ID', field: 'id', sortable: true },
      { name: 'area', label: 'Помещение', field: 'area', sortable: true },
      { name: 'type', label: 'Тип', field: 'type', sortable: true },
      { name: 'date', label: 'Дата', field: 'date', sortable: true },
      { name: 'status', label: 'Статус', field: 'status', sortable: true },
      { name: 'contractor', label: 'Подрядчик', field: 'contractor', sortable: true }
    ]

    const areaTypes = [
      { label: 'Клубная комната', value: 'club' },
      { label: 'Спортзал', value: 'gym' },
      { label: 'Конференц-зал', value: 'conference' },
      { label: 'Детская комната', value: 'playroom' }
    ]

    const areaStatuses = [
      { label: 'Доступно', value: 'available' },
      { label: 'Занято', value: 'occupied' },
      { label: 'На обслуживании', value: 'maintenance' }
    ]

    const maintenanceTypes = [
      { label: 'Уборка', value: 'cleaning' },
      { label: 'Ремонт', value: 'repair' },
      { label: 'Проверка', value: 'inspection' }
    ]

    const commonAreas = ref([])
    const bookings = ref([])
    const maintenanceSchedule = ref([])

    const addArea = () => {
      // Логика добавления помещения
    }

    const bookArea = () => {
      // Логика бронирования помещения
    }

    const scheduleMaintenance = () => {
      // Логика планирования обслуживания
    }

    onMounted(() => {
      // Загрузка начальных данных
    })

    return {
      activeTab,
      loading,
      selectedType,
      selectedStatus,
      selectedArea,
      bookingDate,
      selectedMaintenanceType,
      maintenanceDate,
      areaColumns,
      bookingColumns,
      maintenanceColumns,
      areaTypes,
      areaStatuses,
      maintenanceTypes,
      commonAreas,
      bookings,
      maintenanceSchedule,
      addArea,
      bookArea,
      scheduleMaintenance
    }
  }
}
</script>

<style scoped>
.common-areas-module {
  padding: 20px;
}

.common-areas-tabs {
  margin-top: 20px;
}
</style> 