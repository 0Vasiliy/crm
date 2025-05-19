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

    <div v-if="notification.show" class="notification" :class="notification.type">
      {{ notification.message }}
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useCommonAreasStore } from '../stores/commonAreas'

export default {
  name: 'CommonAreasModule',
  setup() {
    const commonAreasStore = useCommonAreasStore()
    const activeTab = ref('areas')
    const loading = ref(false)
    const selectedType = ref(null)
    const selectedStatus = ref(null)
    const selectedArea = ref(null)
    const bookingDate = ref(null)
    const selectedMaintenanceType = ref(null)
    const maintenanceDate = ref(null)
    const notification = ref({ show: false, message: '', type: '' })

    const showNotification = (message, type = 'success') => {
      notification.value = { show: true, message, type }
      setTimeout(() => {
        notification.value.show = false
      }, 3000)
    }

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

    const addArea = async () => {
      if (!selectedType.value || !selectedStatus.value) {
        showNotification('Пожалуйста, заполните все обязательные поля', 'error')
        return
      }

      try {
        const newArea = {
          type: selectedType.value,
          status: selectedStatus.value,
          name: `Помещение ${commonAreas.value.length + 1}`,
          capacity: 0,
          location: 'Не указано'
        }
        await commonAreasStore.addCommonArea(newArea)
        showNotification('Помещение успешно добавлено')
        selectedType.value = null
        selectedStatus.value = null
      } catch (error) {
        showNotification('Ошибка при добавлении помещения', 'error')
      }
    }

    const bookArea = async () => {
      if (!selectedArea.value || !bookingDate.value) {
        showNotification('Пожалуйста, выберите помещение и дату', 'error')
        return
      }

      try {
        const newBooking = {
          areaId: selectedArea.value.id,
          areaName: selectedArea.value.name,
          date: bookingDate.value,
          status: 'pending',
          residentId: 'current-user-id',
          residentName: 'Текущий пользователь'
        }
        await commonAreasStore.addBooking(newBooking)
        showNotification('Помещение успешно забронировано')
        selectedArea.value = null
        bookingDate.value = null
      } catch (error) {
        showNotification('Ошибка при бронировании помещения', 'error')
      }
    }

    const scheduleMaintenance = async () => {
      if (!selectedMaintenanceType.value || !maintenanceDate.value) {
        showNotification('Пожалуйста, выберите тип обслуживания и дату', 'error')
        return
      }

      try {
        const newMaintenance = {
          type: selectedMaintenanceType.value,
          date: maintenanceDate.value,
          status: 'scheduled',
          contractor: 'Не назначен',
          areaId: selectedArea.value?.id,
          areaName: selectedArea.value?.name
        }
        await commonAreasStore.addMaintenanceRecord(newMaintenance)
        showNotification('Обслуживание успешно запланировано')
        selectedMaintenanceType.value = null
        maintenanceDate.value = null
      } catch (error) {
        showNotification('Ошибка при планировании обслуживания', 'error')
      }
    }

    onMounted(async () => {
      loading.value = true
      try {
        await Promise.all([
          commonAreasStore.fetchCommonAreas(),
          commonAreasStore.fetchBookings(),
          commonAreasStore.fetchMaintenanceSchedule()
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
      commonAreas: commonAreasStore.commonAreas,
      bookings: commonAreasStore.bookings,
      maintenanceSchedule: commonAreasStore.maintenanceSchedule,
      notification,
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