<template>
  <div class="finance-module">
    <h1>Финансовый модуль</h1>
    
    <q-inner-loading :showing="loading">
      <q-spinner-dots size="50px" color="primary" />
    </q-inner-loading>
    
    <div class="finance-tabs">
      <q-tabs
        v-model="activeTab"
        class="text-primary"
        active-color="primary"
        indicator-color="primary"
        align="justify"
      >
        <q-tab name="invoices" label="Счета" />
        <q-tab name="payments" label="Платежи" />
        <q-tab name="receipts" label="Квитанции" />
        <q-tab name="debts" label="Задолженности" />
        <q-tab name="reports" label="Отчеты" />
      </q-tabs>

      <q-tab-panels v-model="activeTab" animated>
        <!-- Панель счетов -->
        <q-tab-panel name="invoices">
          <div class="row q-col-gutter-md">
            <div class="col-12">
              <q-card>
                <q-card-section>
                  <div class="text-h6">Управление счетами</div>
                  <div class="row q-col-gutter-md q-mb-md">
                    <div class="col-12 col-md-3">
                      <q-select
                        v-model="selectedBuilding"
                        :options="buildings"
                        label="Выберите дом"
                        @update:model-value="updateSelectedBuilding"
                      />
                    </div>
                    <div class="col-12 col-md-3">
                      <q-select
                        v-model="selectedApartment"
                        :options="filteredApartments"
                        label="Выберите квартиру"
                        @update:model-value="updateSelectedApartment"
                      />
                    </div>
                    <div class="col-12 col-md-3">
                      <q-select
                        v-model="selectedResident"
                        :options="filteredResidents"
                        label="Выберите жильца"
                        @update:model-value="updateSelectedResident"
                      />
                    </div>
                    <div class="col-12 col-md-3">
                      <q-btn color="primary" label="Выставить счёт" @click="addInvoice" />
                  </div>
                  </div>
                  
                  <!-- Список счетов -->
                  <div v-if="selectedBuilding" class="q-mt-md">
                    <h3>Счета по дому: {{ getBuildingName(selectedBuilding) }}</h3>
                    <q-table
                      :rows="filteredInvoices"
                      :columns="invoiceColumns"
                      row-key="id"
                      :loading="loading"
                    >
                      <template v-slot:body-cell-actions="props">
                        <q-td :props="props">
                          <q-btn flat round color="primary" icon="edit" @click="editInvoice(props.row)" />
                          <q-btn flat round color="negative" icon="delete" @click="deleteInvoice(props.row.id)" />
                        </q-td>
                      </template>
                    </q-table>
                  </div>
                </q-card-section>
              </q-card>
            </div>
          </div>
        </q-tab-panel>

        <!-- Панель платежей -->
        <q-tab-panel name="payments">
          <div class="row q-col-gutter-md">
            <div class="col-12">
              <q-card>
                <q-card-section>
                  <div class="text-h6">Платежи за коммунальные услуги</div>
                  <div class="row q-col-gutter-md q-mb-md">
                    <div class="col-12 col-md-3">
                      <q-select
                        v-model="selectedBuilding"
                        :options="buildings"
                        label="Выберите дом"
                        @update:model-value="updateSelectedBuilding"
                      />
                    </div>
                    <div class="col-12 col-md-3">
                      <q-select
                        v-model="selectedApartment"
                        :options="filteredApartments"
                        label="Выберите квартиру"
                        @update:model-value="updateSelectedApartment"
                      />
                    </div>
                    <div class="col-12 col-md-3">
                      <q-select
                        v-model="selectedResident"
                        :options="filteredResidents"
                        label="Выберите жильца"
                        @update:model-value="updateSelectedResident"
                      />
                    </div>
                    <div class="col-12 col-md-3">
                      <q-btn color="primary" label="Добавить платеж" @click="addPayment" />
                    </div>
                  </div>
                  <q-table
                    :rows="filteredPayments"
                    :columns="paymentColumns"
                    row-key="id"
                    :loading="paymentsStore.loading"
                    :pagination="{ rowsPerPage: 10 }"
                  >
                    <template v-slot:body="props">
                      <q-tr :props="props">
                        <q-td key="date" :props="props">
                          {{ formatDate(props.row.date) }}
                        </q-td>
                        <q-td key="building" :props="props">
                          {{ props.row.buildingName }}
                        </q-td>
                        <q-td key="apartment" :props="props">
                          {{ props.row.apartmentNumber }}
                        </q-td>
                        <q-td key="resident" :props="props">
                          {{ props.row.residentName }}
                        </q-td>
                        <q-td key="amount" :props="props">
                          {{ formatCurrency(props.row.amount) }}
                        </q-td>
                        <q-td key="type" :props="props">
                          {{ getPaymentTypeLabel(props.row.type) }}
                        </q-td>
                        <q-td key="status" :props="props">
                          <q-chip
                            :color="getStatusColor(props.row.status)"
                            text-color="white"
                            size="sm"
                          >
                            {{ getStatusLabel(props.row.status) }}
                          </q-chip>
                        </q-td>
                        <q-td key="actions" :props="props">
                          <q-btn-group flat>
                            <q-btn
                              flat
                              round
                              color="primary"
                              icon="edit"
                              @click="editPayment(props.row)"
                            />
                            <q-btn
                              flat
                              round
                              color="negative"
                              icon="delete"
                              @click="confirmDeletePayment(props.row)"
                            />
                          </q-btn-group>
                        </q-td>
                      </q-tr>
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
                  <div class="text-h6">Квитанции об оплате</div>
                  <div class="row q-col-gutter-md q-mb-md">
                    <div class="col-12 col-md-3">
                      <q-select
                        v-model="selectedBuilding"
                        :options="buildings"
                        label="Выберите дом"
                        @update:model-value="updateSelectedBuilding"
                      />
                    </div>
                    <div class="col-12 col-md-3">
                      <q-select
                        v-model="selectedApartment"
                        :options="filteredApartments"
                        label="Выберите квартиру"
                        @update:model-value="updateSelectedApartment"
                      />
                    </div>
                    <div class="col-12 col-md-3">
                      <q-select
                        v-model="selectedResident"
                        :options="filteredResidents"
                        label="Выберите жильца"
                        @update:model-value="updateSelectedResident"
                      />
                    </div>
                  </div>
                  <q-table
                    :rows="filteredReceipts"
                    :columns="receiptColumns"
                    row-key="id"
                    :loading="loading"
                  />
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
                  <div class="row q-col-gutter-md q-mb-md">
                    <div class="col-12 col-md-3">
                      <q-select
                        v-model="selectedBuilding"
                        :options="buildings"
                        label="Выберите дом"
                        @update:model-value="updateSelectedBuilding"
                      />
                    </div>
                    <div class="col-12 col-md-3">
                      <q-select
                        v-model="selectedApartment"
                        :options="filteredApartments"
                        label="Выберите квартиру"
                        @update:model-value="updateSelectedApartment"
                      />
                    </div>
                    <div class="col-12 col-md-3">
                      <q-select
                        v-model="selectedResident"
                        :options="filteredResidents"
                        label="Выберите жильца"
                        @update:model-value="updateSelectedResident"
                      />
                    </div>
                    <div class="col-12 col-md-3">
                      <q-btn color="primary" label="Добавить задолженность" @click="addDebt" />
                    </div>
                  </div>
                  <q-table
                    :rows="filteredDebts"
                    :columns="debtColumns"
                    row-key="id"
                    :loading="debtsStore.loading"
                    :pagination="{ rowsPerPage: 10 }"
                  >
                    <template v-slot:body="props">
                      <q-tr :props="props">
                        <q-td key="date" :props="props">
                          {{ formatDate(props.row.date) }}
                        </q-td>
                        <q-td key="building" :props="props">
                          {{ props.row.buildingName }}
                        </q-td>
                        <q-td key="apartment" :props="props">
                          {{ props.row.apartmentNumber }}
                        </q-td>
                        <q-td key="resident" :props="props">
                          {{ props.row.residentName }}
                        </q-td>
                        <q-td key="amount" :props="props">
                          {{ formatCurrency(props.row.amount) }}
                        </q-td>
                        <q-td key="status" :props="props">
                          <q-chip
                            :color="getStatusColor(props.row.status)"
                            text-color="white"
                            size="sm"
                          >
                            {{ getStatusLabel(props.row.status) }}
                          </q-chip>
                        </q-td>
                        <q-td key="actions" :props="props">
                          <q-btn-group flat>
                            <q-btn
                              flat
                              round
                              color="primary"
                              icon="edit"
                              @click="editDebt(props.row)"
                            />
                            <q-btn
                              flat
                              round
                              color="negative"
                              icon="delete"
                              @click="confirmDeleteDebt(props.row)"
                            />
                          </q-btn-group>
                        </q-td>
                      </q-tr>
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
                    <div class="col-12 col-md-3">
                      <q-select
                        v-model="selectedBuilding"
                        :options="buildings"
                        label="Выберите дом"
                        @update:model-value="updateSelectedBuilding"
                      />
                    </div>
                    <div class="col-12 col-md-3">
                      <q-select
                        v-model="selectedReport"
                        :options="reportTypes"
                        label="Тип отчета"
                      />
                    </div>
                    <div class="col-12 col-md-3">
                      <q-input
                        v-model="dateRange.from"
                        type="date"
                        label="От"
                      />
                    </div>
                    <div class="col-12 col-md-3">
                      <q-input
                        v-model="dateRange.to"
                        type="date"
                        label="До"
                      />
                    </div>
                    <div class="col-12">
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

    <!-- Модальные окна -->
    <PaymentModal
      v-model:show="showPaymentModal"
      :editing-payment="editingPayment"
      @saved="loadPayments"
    />

    <ReceiptModal
      v-model:show="showReceiptModal"
      :payment="selectedPayment"
      @saved="loadReceipts"
    />

    <DebtModal
      v-model:show="showDebtModal"
      :editing-debt="editingDebt"
      @saved="loadDebts"
    />

    <ReportModal
      v-model:show="showReportModal"
      :report-data="reportData"
      :date-range="dateRange"
      :selected-building="selectedBuilding"
      :selected-apartment="selectedApartment"
      :selected-resident="selectedResident"
    />

    <InvoiceModal
      v-model:show="showInvoiceModal"
      :editing-invoice="editingInvoice"
      :invoice-form="invoiceForm"
      @saved="saveInvoice"
    />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useBuildingsStore } from '../stores/buildings'
import { useUtilitiesStore } from '../stores/utilities'
import { useApartmentsStore } from '../stores/apartments'
import { useResidentsStore } from '../stores/residents'
import { useInvoicesStore } from '../stores/invoices'
import { usePaymentsStore } from '../stores/payments'
import { useReceiptsStore } from '../stores/receipts'
import { useDebtsStore } from '../stores/debts'
import { useServicesStore } from '../stores/services'
import { date } from 'quasar'
import PaymentModal from '../components/PaymentModal.vue'
import ReceiptModal from '../components/ReceiptModal.vue'
import DebtModal from '../components/DebtModal.vue'
import ReportModal from '../components/ReportModal.vue'
import InvoiceModal from '../components/InvoiceModal.vue'

// Инициализация хранилищ
const buildingsStore = useBuildingsStore()
const utilitiesStore = useUtilitiesStore()
const apartmentsStore = useApartmentsStore()
const residentsStore = useResidentsStore()
const invoicesStore = useInvoicesStore()
const paymentsStore = usePaymentsStore()
const receiptsStore = useReceiptsStore()
const debtsStore = useDebtsStore()
const servicesStore = useServicesStore()

// Состояния
const activeTab = ref('invoices')
const loading = ref(false)
const showPaymentModal = ref(false)
const showReceiptModal = ref(false)
const showDebtModal = ref(false)
const showReportModal = ref(false)
const showInvoiceModal = ref(false)
const selectedReport = ref(null)
const editingPayment = ref(null)
const editingDebt = ref(null)
const editingInvoice = ref(null)
const selectedPayment = ref(null)
const reportData = ref(null)

// Форма счета
const invoiceForm = ref({
  buildingId: '',
  apartmentId: '',
  residentId: '',
  period: {
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear()
  },
  services: {},
  total: 0,
  status: 'pending',
  date: new Date().toISOString()
})

// Фильтры
const selectedBuilding = ref(null)
const selectedApartment = ref(null)
const selectedResident = ref(null)
const dateRange = ref({
  from: date.formatDate(new Date().setMonth(new Date().getMonth() - 1), 'YYYY-MM-DD'),
  to: date.formatDate(new Date(), 'YYYY-MM-DD')
})

// Типы отчетов
const reportTypes = [
  { label: 'Отчет по платежам', value: 'payments' },
  { label: 'Отчет по задолженностям', value: 'debts' },
  { label: 'Отчет по счетам', value: 'invoices' }
]

// Колонки таблиц
const invoiceColumns = [
  { name: 'date', label: 'Дата', field: 'date', format: val => formatDate(val) },
  { name: 'building', label: 'Здание', field: 'buildingId', format: val => getBuildingName(val) },
  { name: 'apartment', label: 'Квартира', field: 'apartmentId', format: val => getApartmentNumber(val) },
  { name: 'resident', label: 'Жилец', field: 'residentId', format: val => getResidentName(val) },
  { name: 'total', label: 'Сумма', field: 'total', format: val => formatPrice(val) },
  { name: 'status', label: 'Статус', field: 'status' },
  { name: 'actions', label: 'Действия', field: 'actions', align: 'center' }
]

const paymentColumns = [
  { name: 'date', label: 'Дата', field: 'date', format: val => formatDate(val) },
  { name: 'building', label: 'Здание', field: 'buildingId', format: val => getBuildingName(val) },
  { name: 'apartment', label: 'Квартира', field: 'apartmentId', format: val => getApartmentNumber(val) },
  { name: 'resident', label: 'Жилец', field: 'residentId', format: val => getResidentName(val) },
  { name: 'amount', label: 'Сумма', field: 'amount', format: val => formatPrice(val) },
  { name: 'type', label: 'Тип платежа', field: 'type' },
  { name: 'status', label: 'Статус', field: 'status' },
  { name: 'actions', label: 'Действия', field: 'actions', align: 'center' }
]

const receiptColumns = [
  { name: 'number', label: 'Номер', field: 'number' },
  { name: 'date', label: 'Дата', field: 'date', format: val => formatDate(val) },
  { name: 'building', label: 'Здание', field: 'buildingId', format: val => getBuildingName(val) },
  { name: 'apartment', label: 'Квартира', field: 'apartmentId', format: val => getApartmentNumber(val) },
  { name: 'resident', label: 'Жилец', field: 'residentId', format: val => getResidentName(val) },
  { name: 'amount', label: 'Сумма', field: 'amount', format: val => formatPrice(val) }
]

const debtColumns = [
  { name: 'building', label: 'Здание', field: 'buildingId', format: val => getBuildingName(val) },
  { name: 'apartment', label: 'Квартира', field: 'apartmentId', format: val => getApartmentNumber(val) },
  { name: 'resident', label: 'Жилец', field: 'residentId', format: val => getResidentName(val) },
  { name: 'amount', label: 'Сумма задолженности', field: 'amount', format: val => formatPrice(val) },
  { name: 'dueDate', label: 'Срок оплаты', field: 'dueDate', format: val => formatDate(val) },
  { name: 'status', label: 'Статус', field: 'status' },
  { name: 'actions', label: 'Действия', field: 'actions', align: 'center' }
]

// Вычисляемые свойства
const buildings = computed(() => buildingsStore.buildings.map(building => ({
  label: building.name,
  value: building.id
})))

const filteredApartments = computed(() => {
  if (!selectedBuilding.value) return []
  return apartmentsStore.apartments
    .filter(apartment => apartment.buildingId === selectedBuilding.value)
    .map(apartment => ({
      label: `Квартира ${apartment.number}`,
      value: apartment.id
    }))
})

const filteredResidents = computed(() => {
  if (!selectedApartment.value) return []
  return residentsStore.residents
    .filter(resident => resident.apartmentId === selectedApartment.value)
    .map(resident => ({
      label: `${resident.lastName} ${resident.firstName}`,
      value: resident.id
    }))
})

const filteredInvoices = computed(() => {
  let result = invoicesStore.invoices

  if (selectedBuilding.value) {
    result = result.filter(invoice => invoice.buildingId === selectedBuilding.value)
  }
  if (selectedApartment.value) {
    result = result.filter(invoice => invoice.apartmentId === selectedApartment.value)
  }
  if (selectedResident.value) {
    result = result.filter(invoice => invoice.residentId === selectedResident.value)
  }

  return result.map(invoice => ({
    ...invoice,
    buildingName: buildingsStore.buildings.find(b => b.id === invoice.buildingId)?.name || 'Неизвестно',
    apartmentNumber: apartmentsStore.apartments.find(a => a.id === invoice.apartmentId)?.number || 'Неизвестно',
    residentName: residentsStore.residents.find(r => r.id === invoice.residentId)
      ? `${residentsStore.residents.find(r => r.id === invoice.residentId).lastName} ${residentsStore.residents.find(r => r.id === invoice.residentId).firstName}`
      : 'Неизвестно'
  }))
})

const filteredPayments = computed(() => {
  let result = paymentsStore.payments

  if (selectedBuilding.value) {
    result = result.filter(payment => payment.buildingId === selectedBuilding.value)
  }
  if (selectedApartment.value) {
    result = result.filter(payment => payment.apartmentId === selectedApartment.value)
  }
  if (selectedResident.value) {
    result = result.filter(payment => payment.residentId === selectedResident.value)
  }

  return result.map(payment => ({
    ...payment,
    buildingName: buildingsStore.buildings.find(b => b.id === payment.buildingId)?.name || 'Неизвестно',
    apartmentNumber: apartmentsStore.apartments.find(a => a.id === payment.apartmentId)?.number || 'Неизвестно',
    residentName: residentsStore.residents.find(r => r.id === payment.residentId) 
      ? `${residentsStore.residents.find(r => r.id === payment.residentId).lastName} ${residentsStore.residents.find(r => r.id === payment.residentId).firstName}`
      : 'Неизвестно'
  }))
})

const filteredReceipts = computed(() => {
  let receipts = receiptsStore.receipts
  if (selectedBuilding.value) {
    receipts = receipts.filter(r => r.buildingId === selectedBuilding.value)
  }
  if (selectedApartment.value) {
    receipts = receipts.filter(r => r.apartmentId === selectedApartment.value)
  }
  if (selectedResident.value) {
    receipts = receipts.filter(r => r.residentId === selectedResident.value)
  }
  if (dateRange.value.from && dateRange.value.to) {
    receipts = receipts.filter(r => {
      const receiptDate = new Date(r.date)
      return receiptDate >= new Date(dateRange.value.from) && 
             receiptDate <= new Date(dateRange.value.to)
    })
  }
  return receipts
})

const filteredDebts = computed(() => {
  let result = debtsStore.debts

  if (selectedBuilding.value) {
    result = result.filter(debt => debt.buildingId === selectedBuilding.value)
  }
  if (selectedApartment.value) {
    result = result.filter(debt => debt.apartmentId === selectedApartment.value)
  }
  if (selectedResident.value) {
    result = result.filter(debt => debt.residentId === selectedResident.value)
  }

  return result.map(debt => ({
    ...debt,
    buildingName: buildingsStore.buildings.find(b => b.id === debt.buildingId)?.name || 'Неизвестно',
    apartmentNumber: apartmentsStore.apartments.find(a => a.id === debt.apartmentId)?.number || 'Неизвестно',
    residentName: residentsStore.residents.find(r => r.id === debt.residentId)
      ? `${residentsStore.residents.find(r => r.id === debt.residentId).lastName} ${residentsStore.residents.find(r => r.id === debt.residentId).firstName}`
      : 'Неизвестно'
  }))
})

// Методы
const formatPrice = (price) => {
  return new Intl.NumberFormat('ru-RU').format(price)
}

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('ru-RU')
}

const getBuildingName = (buildingId) => {
  const building = buildingsStore.buildings.find(b => b.id === buildingId)
  return building ? building.name : 'Неизвестное здание'
}

const getApartmentNumber = (apartmentId) => {
  const apartment = apartmentsStore.apartments.find(a => a.id === apartmentId)
  return apartment ? apartment.number : 'Неизвестная квартира'
}

const getResidentName = (residentId) => {
  const resident = residentsStore.residents.find(r => r.id === residentId)
  return resident ? `${resident.lastName} ${resident.firstName}` : 'Неизвестный жилец'
}

// Методы загрузки данных
const loadInitialData = async () => {
  try {
    loading.value = true
    await Promise.all([
      buildingsStore.fetchBuildings(),
      servicesStore.fetchServices()
    ])
    console.log('Загружено зданий:', buildingsStore.buildings.length)
  } catch (error) {
    console.error('Ошибка при загрузке начальных данных:', error)
  } finally {
    loading.value = false
  }
}

const loadInvoices = async () => {
  try {
    // Применяем только фильтр по buildingId на уровне Firestore
    const filters = {
      buildingId: selectedBuilding.value
    }
    await invoicesStore.fetchInvoices(filters)
  } catch (error) {
    console.error('Ошибка при загрузке счетов:', error)
  }
}

const loadPayments = async () => {
  try {
    // Применяем только фильтр по buildingId на уровне Firestore
    const filters = {
      buildingId: selectedBuilding.value
    }
    await paymentsStore.fetchPayments(filters)
  } catch (error) {
    console.error('Ошибка при загрузке платежей:', error)
  }
}

const loadReceipts = async () => {
  try {
    // Применяем только фильтр по buildingId на уровне Firestore
    const filters = {
      buildingId: selectedBuilding.value
    }
    await receiptsStore.fetchReceipts(filters)
  } catch (error) {
    console.error('Ошибка при загрузке квитанций:', error)
  }
}

const loadDebts = async () => {
  try {
    // Применяем только фильтр по buildingId на уровне Firestore
    const filters = {
      buildingId: selectedBuilding.value
    }
    await debtsStore.fetchDebts(filters)
  } catch (error) {
    console.error('Ошибка при загрузке долгов:', error)
  }
}

// Методы обновления выбранных значений
const updateSelectedBuilding = async (building) => {
  selectedBuilding.value = building?.value || null
  selectedApartment.value = null
  selectedResident.value = null
  
  try {
    loading.value = true
    // Загружаем квартиры для выбранного здания
    await apartmentsStore.fetchApartments({ buildingId: selectedBuilding.value })
    console.log('Загружено квартир для здания:', apartmentsStore.apartments.length)
    
    // Загружаем данные для выбранного здания
    await Promise.all([
      loadPayments(),
      loadReceipts(),
      loadDebts(),
      loadInvoices()
    ])
  } catch (error) {
    console.error('Ошибка при обновлении данных:', error)
  } finally {
    loading.value = false
  }
}

const updateSelectedApartment = async (apartment) => {
  selectedApartment.value = apartment?.value || null
  selectedResident.value = null
  
  try {
    loading.value = true
    // Загружаем жильцов для выбранной квартиры
    await residentsStore.fetchResidents({ apartmentId: selectedApartment.value })
    console.log('Загружено жильцов для квартиры:', residentsStore.residents.length)
    
    // Загружаем данные для выбранной квартиры
    await Promise.all([
      loadPayments(),
      loadReceipts(),
      loadDebts(),
      loadInvoices()
    ])
  } catch (error) {
    console.error('Ошибка при обновлении данных:', error)
  } finally {
    loading.value = false
  }
}

const updateSelectedResident = async (resident) => {
  selectedResident.value = resident?.value || null
  
  try {
    loading.value = true
    // Загружаем данные для выбранного жильца
    await Promise.all([
      loadPayments(),
      loadReceipts(),
      loadDebts(),
      loadInvoices()
    ])
  } catch (error) {
    console.error('Ошибка при обновлении данных:', error)
  } finally {
    loading.value = false
  }
}

// Методы работы со счетами
const addInvoice = () => {
  editingInvoice.value = null
  invoiceForm.value = {
    buildingId: selectedBuilding.value,
    apartmentId: selectedApartment.value,
    residentId: selectedResident.value,
    period: {
      month: new Date().getMonth() + 1,
      year: new Date().getFullYear()
    },
    services: {},
    total: 0,
    status: 'pending',
    date: new Date().toISOString()
  }
  showInvoiceModal.value = true
}

const saveInvoice = async () => {
  try {
    loading.value = true
    if (editingInvoice.value) {
      await invoicesStore.updateInvoice(editingInvoice.value.id, invoiceForm.value)
    } else {
      await invoicesStore.addInvoice(invoiceForm.value)
    }
    showInvoiceModal.value = false
    editingInvoice.value = null
    
    // Обновляем все связанные данные
    await Promise.all([
      loadInvoices(),
      loadPayments(),
      loadReceipts(),
      loadDebts()
    ])
    } catch (error) {
    console.error('Ошибка при сохранении счета:', error)
  } finally {
    loading.value = false
  }
}

const editInvoice = (invoice) => {
  editingInvoice.value = invoice
  invoiceForm.value = { ...invoice }
  showInvoiceModal.value = true
}

const deleteInvoice = async (id) => {
  if (confirm('Вы уверены, что хотите удалить этот счет?')) {
    try {
      await invoicesStore.deleteInvoice(id)
      // Обновляем список счетов после удаления
      await invoicesStore.fetchInvoices({
        buildingId: selectedBuilding.value,
        apartmentId: selectedApartment.value,
        residentId: selectedResident.value
      })
    } catch (error) {
      console.error('Ошибка при удалении счета:', error)
    }
  }
}

const addPayment = () => {
  editingPayment.value = null
  const paymentForm = {
    buildingId: selectedBuilding.value,
    apartmentId: selectedApartment.value,
    residentId: selectedResident.value,
    amount: 0,
    type: 'utility',
    status: 'pending',
    date: new Date().toISOString()
  }
  showPaymentModal.value = true
}

const editPayment = (payment) => {
  editingPayment.value = payment
  showPaymentModal.value = true
}

const deletePayment = async (id) => {
  if (confirm('Вы уверены, что хотите удалить этот платеж?')) {
    try {
      await paymentsStore.deletePayment(id)
      await loadPayments()
    } catch (error) {
      console.error('Ошибка при удалении платежа:', error)
    }
  }
}

const createReceipt = (payment) => {
  selectedPayment.value = payment
  showReceiptModal.value = true
}

const addDebt = () => {
  editingDebt.value = null
  const debtForm = {
    buildingId: selectedBuilding.value,
    apartmentId: selectedApartment.value,
    residentId: selectedResident.value,
    amount: 0,
    dueDate: new Date().toISOString(),
    status: 'pending',
    date: new Date().toISOString()
  }
  showDebtModal.value = true
}

const editDebt = (debt) => {
  editingDebt.value = debt
  showDebtModal.value = true
}

const deleteDebt = async (id) => {
  if (confirm('Вы уверены, что хотите удалить эту задолженность?')) {
    try {
      await debtsStore.deleteDebt(id)
      await loadDebts()
  } catch (error) {
      console.error('Ошибка при удалении задолженности:', error)
    }
  }
}

const generateReport = async () => {
  if (!selectedReport.value) return
  
  try {
    const filters = {
      buildingId: selectedBuilding.value,
      apartmentId: selectedApartment.value,
      residentId: selectedResident.value,
      startDate: dateRange.value.from,
      endDate: dateRange.value.to
    }
    
    switch (selectedReport.value) {
      case 'payments':
        reportData.value = {
          title: 'Отчет по платежам',
          data: filteredPayments.value,
          total: filteredPayments.value.reduce((sum, p) => sum + p.amount, 0)
        }
        break
      case 'debts':
        reportData.value = {
          title: 'Отчет по задолженностям',
          data: filteredDebts.value,
          total: filteredDebts.value.reduce((sum, d) => sum + d.amount, 0)
        }
        break
      case 'invoices':
        reportData.value = {
          title: 'Отчет по счетам',
          data: filteredInvoices.value,
          total: filteredInvoices.value.reduce((sum, i) => sum + i.total, 0)
        }
        break
    }
    
    showReportModal.value = true
  } catch (error) {
    console.error('Ошибка при генерации отчета:', error)
  }
}

// Наблюдатели
watch([selectedBuilding, selectedApartment, selectedResident], async () => {
  console.log('Изменение фильтров:', {
    building: selectedBuilding.value,
    apartment: selectedApartment.value,
    resident: selectedResident.value
  })
  await Promise.all([
    loadInvoices(),
    loadPayments(),
    loadReceipts(),
    loadDebts()
  ])
}, { deep: true })

onMounted(async () => {
  await loadInitialData()
})
</script>

<style lang="scss" scoped>
.finance-module {
  padding: 20px;
}

.finance-tabs {
  margin-top: 20px;
}

.q-card {
  margin-bottom: 20px;
}

.text-h6 {
  margin-bottom: 20px;
}

.q-mb-md {
  margin-bottom: 16px;
}

.q-mt-md {
  margin-top: 16px;
}

@media (max-width: 768px) {
  .finance-module {
    padding: 10px;
  }
  
  .q-card {
    margin-bottom: 10px;
  }
}
</style> 