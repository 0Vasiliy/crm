<template>
  <div class="finance-module">
    <h1>Финансовый модуль</h1>
    
    <div class="finance-tabs">
      <q-tabs
        v-model="activeTab"
        class="text-primary"
        active-color="primary"
        indicator-color="primary"
        align="justify"
      >
        <q-tab name="payments" label="Платежи" />
        <q-tab name="receipts" label="Квитанции" />
        <q-tab name="debts" label="Задолженности" />
        <q-tab name="reports" label="Отчеты" />
      </q-tabs>

      <q-tab-panels v-model="activeTab" animated>
        <!-- Панель платежей -->
        <q-tab-panel name="payments">
          <div class="row q-col-gutter-md">
            <div class="col-12">
              <q-card>
                <q-card-section>
                  <div class="text-h6">Платежи за коммунальные услуги</div>
                  <q-table
                    :rows="payments"
                    :columns="paymentColumns"
                    row-key="id"
                    :loading="loading"
                  >
                    <template v-slot:top>
                      <q-btn color="primary" label="Добавить платеж" @click="addPayment" />
                    </template>
                  </q-table>
                </q-card-section>
              </q-card>
            </div>
          </div>
        </q-tab-panel>

        <!-- Панель квитанций -->
        <q-tab-panel name="receipts">
          <div class="row q-col-gutter-md">
            <div class="col-12">
              <q-card>
                <q-card-section>
                  <div class="text-h6">Квитанции</div>
                  <q-table
                    :rows="receipts"
                    :columns="receiptColumns"
                    row-key="id"
                    :loading="loading"
                  >
                    <template v-slot:top>
                      <q-btn color="primary" label="Сформировать квитанции" @click="generateReceipts" />
                    </template>
                  </q-table>
                </q-card-section>
              </q-card>
            </div>
          </div>
        </q-tab-panel>

        <!-- Панель задолженностей -->
        <q-tab-panel name="debts">
          <div class="row q-col-gutter-md">
            <div class="col-12">
              <q-card>
                <q-card-section>
                  <div class="text-h6">Задолженности</div>
                  <q-table
                    :rows="debts"
                    :columns="debtColumns"
                    row-key="id"
                    :loading="loading"
                  >
                    <template v-slot:top>
                      <q-btn color="primary" label="Обновить данные" @click="updateDebts" />
                    </template>
                  </q-table>
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
                  <div class="text-h6">Финансовые отчеты</div>
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
  name: 'FinanceModule',
  setup() {
    const activeTab = ref('payments')
    const loading = ref(false)
    const selectedReport = ref(null)

    const paymentColumns = [
      { name: 'id', label: 'ID', field: 'id', sortable: true },
      { name: 'date', label: 'Дата', field: 'date', sortable: true },
      { name: 'amount', label: 'Сумма', field: 'amount', sortable: true },
      { name: 'type', label: 'Тип платежа', field: 'type', sortable: true },
      { name: 'status', label: 'Статус', field: 'status', sortable: true }
    ]

    const receiptColumns = [
      { name: 'id', label: 'Номер', field: 'id', sortable: true },
      { name: 'date', label: 'Дата', field: 'date', sortable: true },
      { name: 'apartment', label: 'Квартира', field: 'apartment', sortable: true },
      { name: 'amount', label: 'Сумма', field: 'amount', sortable: true },
      { name: 'status', label: 'Статус', field: 'status', sortable: true }
    ]

    const debtColumns = [
      { name: 'apartment', label: 'Квартира', field: 'apartment', sortable: true },
      { name: 'resident', label: 'Жилец', field: 'resident', sortable: true },
      { name: 'amount', label: 'Сумма долга', field: 'amount', sortable: true },
      { name: 'period', label: 'Период', field: 'period', sortable: true }
    ]

    const reportTypes = [
      { label: 'Ежемесячный отчет', value: 'monthly' },
      { label: 'Квартальный отчет', value: 'quarterly' },
      { label: 'Годовой отчет', value: 'yearly' }
    ]

    const payments = ref([])
    const receipts = ref([])
    const debts = ref([])

    const addPayment = () => {
      // Логика добавления платежа
    }

    const generateReceipts = () => {
      // Логика генерации квитанций
    }

    const updateDebts = () => {
      // Логика обновления задолженностей
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
      selectedReport,
      paymentColumns,
      receiptColumns,
      debtColumns,
      reportTypes,
      payments,
      receipts,
      debts,
      addPayment,
      generateReceipts,
      updateDebts,
      generateReport
    }
  }
}
</script>

<style scoped>
.finance-module {
  padding: 20px;
}

.finance-tabs {
  margin-top: 20px;
}
</style> 