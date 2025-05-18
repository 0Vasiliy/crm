<template>
  <div class="ecology-module">
    <h1>Экология</h1>
    
    <div class="ecology-tabs">
      <q-tabs
        v-model="activeTab"
        class="text-primary"
        active-color="primary"
        indicator-color="primary"
        align="justify"
      >
        <q-tab name="monitoring" label="Мониторинг" />
        <q-tab name="waste" label="Утилизация" />
        <q-tab name="reports" label="Отчеты" />
      </q-tabs>

      <q-tab-panels v-model="activeTab" animated>
        <!-- Панель мониторинга -->
        <q-tab-panel name="monitoring">
          <div class="row q-col-gutter-md">
            <div class="col-12 col-md-6">
              <q-card>
                <q-card-section>
                  <div class="text-h6">Показатели качества</div>
                  <div class="row q-col-gutter-md">
                    <div class="col-6">
                      <div class="text-subtitle2">Воздух</div>
                      <div class="text-h4">{{ metrics.airQuality }}%</div>
                    </div>
                    <div class="col-6">
                      <div class="text-subtitle2">Вода</div>
                      <div class="text-h4">{{ metrics.waterQuality }}%</div>
                    </div>
                    <div class="col-6">
                      <div class="text-subtitle2">Шум</div>
                      <div class="text-h4">{{ metrics.noiseLevel }} дБ</div>
                    </div>
                    <div class="col-6">
                      <div class="text-subtitle2">Энергоэффективность</div>
                      <div class="text-h4">{{ metrics.energyEfficiency }}%</div>
                    </div>
                  </div>
                </q-card-section>
              </q-card>
            </div>
            <div class="col-12 col-md-6">
              <q-card>
                <q-card-section>
                  <div class="text-h6">График показателей</div>
                  <div class="chart-container">
                    <!-- Здесь будет график показателей -->
                  </div>
                </q-card-section>
              </q-card>
            </div>
          </div>
        </q-tab-panel>

        <!-- Панель утилизации -->
        <q-tab-panel name="waste">
          <div class="row q-col-gutter-md">
            <div class="col-12">
              <q-card>
                <q-card-section>
                  <div class="text-h6">Управление отходами</div>
                  <div class="row q-col-gutter-md">
                    <div class="col-12 col-md-4">
                      <q-select
                        v-model="selectedWasteType"
                        :options="wasteTypes"
                        label="Тип отходов"
                      />
                    </div>
                    <div class="col-12 col-md-4">
                      <q-input
                        v-model="wasteAmount"
                        type="number"
                        label="Количество (кг)"
                      />
                    </div>
                    <div class="col-12 col-md-4">
                      <q-btn color="primary" label="Добавить запись" @click="addWasteRecord" />
                    </div>
                  </div>
                  <q-table
                    :rows="wasteRecords"
                    :columns="wasteColumns"
                    row-key="id"
                    :loading="loading"
                  />
                </q-card-section>
              </q-card>
            </div>
          </div>
        </q-tab-panel>

        <!-- Панель отчетов -->
        <q-tab-panel name="reports">
          <div class="row q-col-gutter-md">
            <div class="col-12">
              <q-card>
                <q-card-section>
                  <div class="text-h6">Экологические отчеты</div>
                  <div class="row q-col-gutter-md">
                    <div class="col-12 col-md-6">
                      <q-select
                        v-model="selectedReport"
                        :options="reportTypes"
                        label="Тип отчета"
                      />
                    </div>
                    <div class="col-12 col-md-6">
                      <q-btn color="primary" label="Сформировать отчет" @click="generateReport" />
                    </div>
                  </div>
                  <q-table
                    :rows="reports"
                    :columns="reportColumns"
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
  name: 'EcologyModule',
  setup() {
    const activeTab = ref('monitoring')
    const loading = ref(false)
    const selectedWasteType = ref(null)
    const wasteAmount = ref(null)
    const selectedReport = ref(null)

    const metrics = ref({
      airQuality: 95,
      waterQuality: 98,
      noiseLevel: 45,
      energyEfficiency: 85
    })

    const wasteColumns = [
      { name: 'id', label: 'ID', field: 'id', sortable: true },
      { name: 'date', label: 'Дата', field: 'date', sortable: true },
      { name: 'type', label: 'Тип', field: 'type', sortable: true },
      { name: 'amount', label: 'Количество', field: 'amount', sortable: true },
      { name: 'disposal', label: 'Способ утилизации', field: 'disposal', sortable: true },
      { name: 'contractor', label: 'Подрядчик', field: 'contractor', sortable: true }
    ]

    const reportColumns = [
      { name: 'id', label: 'ID', field: 'id', sortable: true },
      { name: 'date', label: 'Дата', field: 'date', sortable: true },
      { name: 'type', label: 'Тип', field: 'type', sortable: true },
      { name: 'status', label: 'Статус', field: 'status', sortable: true }
    ]

    const wasteTypes = [
      { label: 'Твердые бытовые отходы', value: 'msw' },
      { label: 'Строительный мусор', value: 'construction' },
      { label: 'Опасные отходы', value: 'hazardous' },
      { label: 'Перерабатываемые отходы', value: 'recyclable' }
    ]

    const reportTypes = [
      { label: 'Отчет по отходам', value: 'waste' },
      { label: 'Отчет по качеству среды', value: 'environment' },
      { label: 'Отчет по энергоэффективности', value: 'energy' }
    ]

    const wasteRecords = ref([])
    const reports = ref([])

    const addWasteRecord = () => {
      // Логика добавления записи об отходах
    }

    const generateReport = () => {
      // Логика генерации отчета
    }

    onMounted(() => {
      // Загрузка начальных данных
    })

    return {
      activeTab,
      loading,
      metrics,
      selectedWasteType,
      wasteAmount,
      selectedReport,
      wasteColumns,
      reportColumns,
      wasteTypes,
      reportTypes,
      wasteRecords,
      reports,
      addWasteRecord,
      generateReport
    }
  }
}
</script>

<style scoped>
.ecology-module {
  padding: 20px;
}

.ecology-tabs {
  margin-top: 20px;
}

.chart-container {
  height: 400px;
  margin-top: 20px;
}
</style> 