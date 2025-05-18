<template>
  <div class="resources-module">
    <h1>Учет ресурсов</h1>
    
    <div class="resources-tabs">
      <q-tabs
        v-model="activeTab"
        class="text-primary"
        active-color="primary"
        indicator-color="primary"
        align="justify"
      >
        <q-tab name="meters" label="Счетчики" />
        <q-tab name="consumption" label="Потребление" />
        <q-tab name="alerts" label="Оповещения" />
        <q-tab name="statistics" label="Статистика" />
      </q-tabs>

      <q-tab-panels v-model="activeTab" animated>
        <!-- Панель счетчиков -->
        <q-tab-panel name="meters">
          <div class="row q-col-gutter-md">
            <div class="col-12">
              <q-card>
                <q-card-section>
                  <div class="text-h6">Учет показаний счетчиков</div>
                  <q-table
                    :rows="meters"
                    :columns="meterColumns"
                    row-key="id"
                    :loading="loading"
                  >
                    <template v-slot:top>
                      <q-btn color="primary" label="Добавить показания" @click="addMeterReading" />
                    </template>
                  </q-table>
                </q-card-section>
              </q-card>
            </div>
          </div>
        </q-tab-panel>

        <!-- Панель потребления -->
        <q-tab-panel name="consumption">
          <div class="row q-col-gutter-md">
            <div class="col-12">
              <q-card>
                <q-card-section>
                  <div class="text-h6">Потребление ресурсов</div>
                  <div class="row q-col-gutter-md">
                    <div class="col-12 col-md-4">
                      <q-select
                        v-model="selectedResource"
                        :options="resourceTypes"
                        label="Тип ресурса"
                      />
                    </div>
                    <div class="col-12 col-md-4">
                      <q-select
                        v-model="selectedPeriod"
                        :options="periodTypes"
                        label="Период"
                      />
                    </div>
                  </div>
                  <div class="chart-container">
                    <!-- Здесь будет график потребления -->
                  </div>
                </q-card-section>
              </q-card>
            </div>
          </div>
        </q-tab-panel>

        <!-- Панель оповещений -->
        <q-tab-panel name="alerts">
          <div class="row q-col-gutter-md">
            <div class="col-12">
              <q-card>
                <q-card-section>
                  <div class="text-h6">Настройка оповещений</div>
                  <q-list>
                    <q-item v-for="alert in alerts" :key="alert.id">
                      <q-item-section>
                        <q-item-label>{{ alert.title }}</q-item-label>
                        <q-item-label caption>{{ alert.description }}</q-item-label>
                      </q-item-section>
                      <q-item-section side>
                        <q-toggle v-model="alert.enabled" />
                      </q-item-section>
                    </q-item>
                  </q-list>
                </q-card-section>
              </q-card>
            </div>
          </div>
        </q-tab-panel>

        <!-- Панель статистики -->
        <q-tab-panel name="statistics">
          <div class="row q-col-gutter-md">
            <div class="col-12">
              <q-card>
                <q-card-section>
                  <div class="text-h6">Статистика потребления</div>
                  <div class="row q-col-gutter-md">
                    <div class="col-12 col-md-6">
                      <q-select
                        v-model="selectedStatistic"
                        :options="statisticTypes"
                        label="Тип статистики"
                      />
                    </div>
                    <div class="col-12 col-md-6">
                      <q-btn color="primary" label="Сформировать отчет" @click="generateStatistic" />
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
  name: 'ResourcesModule',
  setup() {
    const activeTab = ref('meters')
    const loading = ref(false)
    const selectedResource = ref(null)
    const selectedPeriod = ref(null)
    const selectedStatistic = ref(null)

    const meterColumns = [
      { name: 'id', label: 'ID', field: 'id', sortable: true },
      { name: 'type', label: 'Тип счетчика', field: 'type', sortable: true },
      { name: 'apartment', label: 'Квартира', field: 'apartment', sortable: true },
      { name: 'reading', label: 'Показания', field: 'reading', sortable: true },
      { name: 'date', label: 'Дата', field: 'date', sortable: true }
    ]

    const resourceTypes = [
      { label: 'Вода', value: 'water' },
      { label: 'Газ', value: 'gas' },
      { label: 'Электричество', value: 'electricity' }
    ]

    const periodTypes = [
      { label: 'День', value: 'day' },
      { label: 'Неделя', value: 'week' },
      { label: 'Месяц', value: 'month' },
      { label: 'Год', value: 'year' }
    ]

    const statisticTypes = [
      { label: 'По квартирам', value: 'apartments' },
      { label: 'По этажам', value: 'floors' },
      { label: 'По зданиям', value: 'buildings' }
    ]

    const meters = ref([])
    const alerts = ref([
      {
        id: 1,
        title: 'Превышение нормы потребления',
        description: 'Оповещение при превышении среднего потребления на 20%',
        enabled: true
      },
      {
        id: 2,
        title: 'Необычное потребление',
        description: 'Оповещение при резком изменении показаний',
        enabled: true
      }
    ])

    const addMeterReading = () => {
      // Логика добавления показаний счетчика
    }

    const generateStatistic = () => {
      // Логика генерации статистики
    }

    onMounted(() => {
      // Загрузка начальных данных
    })

    return {
      activeTab,
      loading,
      selectedResource,
      selectedPeriod,
      selectedStatistic,
      meterColumns,
      resourceTypes,
      periodTypes,
      statisticTypes,
      meters,
      alerts,
      addMeterReading,
      generateStatistic
    }
  }
}
</script>

<style scoped>
.resources-module {
  padding: 20px;
}

.resources-tabs {
  margin-top: 20px;
}

.chart-container {
  height: 400px;
  margin-top: 20px;
}
</style> 