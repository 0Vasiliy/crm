<template>
  <div class="parking-module">
    <h1>Учет парковки</h1>
    
    <div class="parking-tabs">
      <q-tabs
        v-model="activeTab"
        class="text-primary"
        active-color="primary"
        indicator-color="primary"
        align="justify"
      >
        <q-tab name="spaces" label="Парковочные места" />
        <q-tab name="access" label="Доступ" />
        <q-tab name="payments" label="Оплата" />
      </q-tabs>

      <q-tab-panels v-model="activeTab" animated>
        <!-- Панель парковочных мест -->
        <q-tab-panel name="spaces">
          <div class="row q-col-gutter-md">
            <div class="col-12">
              <q-card>
                <q-card-section>
                  <div class="text-h6">Управление парковочными местами</div>
                  <div class="row q-col-gutter-md">
                    <div class="col-12 col-md-4">
                      <q-select
                        v-model="selectedZone"
                        :options="parkingZones"
                        label="Зона парковки"
                      />
                    </div>
                    <div class="col-12 col-md-4">
                      <q-select
                        v-model="selectedStatus"
                        :options="spaceStatuses"
                        label="Статус"
                      />
                    </div>
                    <div class="col-12 col-md-4">
                      <q-btn color="primary" label="Добавить место" @click="addParkingSpace" />
                    </div>
                  </div>
                  <q-table
                    :rows="parkingSpaces"
                    :columns="spaceColumns"
                    row-key="id"
                    :loading="loading"
                  />
                </q-card-section>
              </q-card>
            </div>
          </div>
        </q-tab-panel>

        <!-- Панель доступа -->
        <q-tab-panel name="access">
          <div class="row q-col-gutter-md">
            <div class="col-12">
              <q-card>
                <q-card-section>
                  <div class="text-h6">Управление доступом</div>
                  <div class="row q-col-gutter-md">
                    <div class="col-12 col-md-6">
                      <q-select
                        v-model="selectedResident"
                        :options="residents"
                        label="Жилец"
                      />
                    </div>
                    <div class="col-12 col-md-6">
                      <q-input
                        v-model="selectedVehicle"
                        label="Номер автомобиля"
                      />
                    </div>
                  </div>
                  <q-table
                    :rows="accessList"
                    :columns="accessColumns"
                    row-key="id"
                    :loading="loading"
                  >
                    <template v-slot:top>
                      <q-btn color="primary" label="Добавить доступ" @click="addAccess" />
                    </template>
                  </q-table>
                </q-card-section>
              </q-card>
            </div>
          </div>
        </q-tab-panel>

        <!-- Панель оплаты -->
        <q-tab-panel name="payments">
          <div class="row q-col-gutter-md">
            <div class="col-12">
              <q-card>
                <q-card-section>
                  <div class="text-h6">Оплата парковки</div>
                  <div class="row q-col-gutter-md">
                    <div class="col-12 col-md-4">
                      <q-select
                        v-model="selectedPaymentType"
                        :options="paymentTypes"
                        label="Тип оплаты"
                      />
                    </div>
                    <div class="col-12 col-md-4">
                      <q-input
                        v-model="paymentPeriod"
                        type="daterange"
                        label="Период"
                      />
                    </div>
                  </div>
                  <q-table
                    :rows="payments"
                    :columns="paymentColumns"
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
  name: 'ParkingModule',
  setup() {
    const activeTab = ref('spaces')
    const loading = ref(false)
    const selectedZone = ref(null)
    const selectedStatus = ref(null)
    const selectedResident = ref(null)
    const selectedVehicle = ref(null)
    const selectedPaymentType = ref(null)
    const paymentPeriod = ref(null)

    const spaceColumns = [
      { name: 'id', label: 'ID', field: 'id', sortable: true },
      { name: 'number', label: 'Номер', field: 'number', sortable: true },
      { name: 'zone', label: 'Зона', field: 'zone', sortable: true },
      { name: 'status', label: 'Статус', field: 'status', sortable: true },
      { name: 'resident', label: 'Жилец', field: 'resident', sortable: true },
      { name: 'vehicle', label: 'Автомобиль', field: 'vehicle', sortable: true }
    ]

    const accessColumns = [
      { name: 'id', label: 'ID', field: 'id', sortable: true },
      { name: 'resident', label: 'Жилец', field: 'resident', sortable: true },
      { name: 'vehicle', label: 'Автомобиль', field: 'vehicle', sortable: true },
      { name: 'space', label: 'Место', field: 'space', sortable: true },
      { name: 'validUntil', label: 'Действителен до', field: 'validUntil', sortable: true }
    ]

    const paymentColumns = [
      { name: 'id', label: 'ID', field: 'id', sortable: true },
      { name: 'resident', label: 'Жилец', field: 'resident', sortable: true },
      { name: 'space', label: 'Место', field: 'space', sortable: true },
      { name: 'amount', label: 'Сумма', field: 'amount', sortable: true },
      { name: 'date', label: 'Дата', field: 'date', sortable: true },
      { name: 'status', label: 'Статус', field: 'status', sortable: true }
    ]

    const parkingZones = [
      { label: 'Подземная парковка', value: 'underground' },
      { label: 'Открытая парковка', value: 'open' },
      { label: 'Гостевые места', value: 'guest' }
    ]

    const spaceStatuses = [
      { label: 'Свободно', value: 'free' },
      { label: 'Занято', value: 'occupied' },
      { label: 'Забронировано', value: 'reserved' }
    ]

    const paymentTypes = [
      { label: 'Месячная оплата', value: 'monthly' },
      { label: 'Годовая оплата', value: 'yearly' },
      { label: 'Разовая оплата', value: 'one-time' }
    ]

    const parkingSpaces = ref([])
    const accessList = ref([])
    const payments = ref([])
    const residents = ref([])

    const addParkingSpace = () => {
      // Логика добавления парковочного места
    }

    const addAccess = () => {
      // Логика добавления доступа
    }

    onMounted(() => {
      // Загрузка начальных данных
    })

    return {
      activeTab,
      loading,
      selectedZone,
      selectedStatus,
      selectedResident,
      selectedVehicle,
      selectedPaymentType,
      paymentPeriod,
      spaceColumns,
      accessColumns,
      paymentColumns,
      parkingZones,
      spaceStatuses,
      paymentTypes,
      parkingSpaces,
      accessList,
      payments,
      residents,
      addParkingSpace,
      addAccess
    }
  }
}
</script>

<style scoped>
.parking-module {
  padding: 20px;
}

.parking-tabs {
  margin-top: 20px;
}
</style> 