import { describe, it, expect, beforeEach, vi } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useInvoicesStore } from '../stores/invoices'
import { usePaymentsStore } from '../stores/payments'
import { useReceiptsStore } from '../stores/receipts'
import { useDebtsStore } from '../stores/debts'
import { useBuildingsStore } from '../stores/buildings'
import { useApartmentsStore } from '../stores/apartments'
import { useResidentsStore } from '../stores/residents'

// Мок данных
const mockBuilding = {
  id: 'building1',
  name: 'Тестовый дом',
  address: 'ул. Тестовая, 1'
}

const mockApartment = {
  id: 'apartment1',
  buildingId: 'building1',
  number: '101'
}

const mockResident = {
  id: 'resident1',
  apartmentId: 'apartment1',
  firstName: 'Иван',
  lastName: 'Иванов'
}

const mockInvoice = {
  id: 'invoice1',
  buildingId: 'building1',
  apartmentId: 'apartment1',
  residentId: 'resident1',
  date: '2024-03-20T00:00:00.000Z',
  total: 5000,
  status: 'pending',
  services: {
    water: 1000,
    electricity: 2000,
    heating: 2000
  }
}

const mockPayment = {
  id: 'payment1',
  buildingId: 'building1',
  apartmentId: 'apartment1',
  residentId: 'resident1',
  date: '2024-03-20T00:00:00.000Z',
  amount: 5000,
  type: 'utility',
  status: 'paid'
}

const mockReceipt = {
  id: 'receipt1',
  buildingId: 'building1',
  apartmentId: 'apartment1',
  residentId: 'resident1',
  paymentId: 'payment1',
  date: '2024-03-20T00:00:00.000Z',
  amount: 5000
}

const mockDebt = {
  id: 'debt1',
  buildingId: 'building1',
  apartmentId: 'apartment1',
  residentId: 'resident1',
  date: '2024-03-20T00:00:00.000Z',
  amount: 5000,
  dueDate: '2024-04-20T00:00:00.000Z',
  status: 'pending'
}

describe('Финансовый модуль', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  describe('Счета', () => {
    it('должен загружать счета с фильтрами', async () => {
      const store = useInvoicesStore()
      const filters = {
        buildingId: 'building1',
        apartmentId: 'apartment1',
        residentId: 'resident1'
      }
      
      await store.fetchInvoices(filters)
      expect(store.invoices).toBeDefined()
      expect(Array.isArray(store.invoices)).toBe(true)
    })

    it('должен создавать новый счет', async () => {
      const store = useInvoicesStore()
      const newInvoice = { ...mockInvoice, id: undefined }
      
      const id = await store.addInvoice(newInvoice)
      expect(id).toBeDefined()
      expect(store.invoices.find(i => i.id === id)).toBeDefined()
    })

    it('должен обновлять существующий счет', async () => {
      const store = useInvoicesStore()
      store.invoices = [mockInvoice]
      
      const updatedData = { ...mockInvoice, total: 6000 }
      await store.updateInvoice(mockInvoice.id, updatedData)
      
      const updatedInvoice = store.invoices.find(i => i.id === mockInvoice.id)
      expect(updatedInvoice.total).toBe(6000)
    })

    it('должен удалять счет', async () => {
      const store = useInvoicesStore()
      store.invoices = [mockInvoice]
      
      await store.deleteInvoice(mockInvoice.id)
      expect(store.invoices.find(i => i.id === mockInvoice.id)).toBeUndefined()
    })
  })

  describe('Платежи', () => {
    it('должен загружать платежи с фильтрами', async () => {
      const store = usePaymentsStore()
      const filters = {
        buildingId: 'building1',
        apartmentId: 'apartment1',
        residentId: 'resident1'
      }
      
      await store.fetchPayments(filters)
      expect(store.payments).toBeDefined()
      expect(Array.isArray(store.payments)).toBe(true)
    })

    it('должен создавать новый платеж', async () => {
      const store = usePaymentsStore()
      const newPayment = { ...mockPayment, id: undefined }
      
      const id = await store.addPayment(newPayment)
      expect(id).toBeDefined()
      expect(store.payments.find(p => p.id === id)).toBeDefined()
    })

    it('должен обновлять существующий платеж', async () => {
      const store = usePaymentsStore()
      store.payments = [mockPayment]
      
      const updatedData = { ...mockPayment, amount: 6000 }
      await store.updatePayment(mockPayment.id, updatedData)
      
      const updatedPayment = store.payments.find(p => p.id === mockPayment.id)
      expect(updatedPayment.amount).toBe(6000)
    })

    it('должен удалять платеж', async () => {
      const store = usePaymentsStore()
      store.payments = [mockPayment]
      
      await store.deletePayment(mockPayment.id)
      expect(store.payments.find(p => p.id === mockPayment.id)).toBeUndefined()
    })
  })

  describe('Квитанции', () => {
    it('должен загружать квитанции с фильтрами', async () => {
      const store = useReceiptsStore()
      const filters = {
        buildingId: 'building1',
        apartmentId: 'apartment1',
        residentId: 'resident1'
      }
      
      await store.fetchReceipts(filters)
      expect(store.receipts).toBeDefined()
      expect(Array.isArray(store.receipts)).toBe(true)
    })

    it('должен создавать новую квитанцию', async () => {
      const store = useReceiptsStore()
      const newReceipt = { ...mockReceipt, id: undefined }
      
      const id = await store.addReceipt(newReceipt)
      expect(id).toBeDefined()
      expect(store.receipts.find(r => r.id === id)).toBeDefined()
    })

    it('должен обновлять существующую квитанцию', async () => {
      const store = useReceiptsStore()
      store.receipts = [mockReceipt]
      
      const updatedData = { ...mockReceipt, amount: 6000 }
      await store.updateReceipt(mockReceipt.id, updatedData)
      
      const updatedReceipt = store.receipts.find(r => r.id === mockReceipt.id)
      expect(updatedReceipt.amount).toBe(6000)
    })

    it('должен удалять квитанцию', async () => {
      const store = useReceiptsStore()
      store.receipts = [mockReceipt]
      
      await store.deleteReceipt(mockReceipt.id)
      expect(store.receipts.find(r => r.id === mockReceipt.id)).toBeUndefined()
    })
  })

  describe('Задолженности', () => {
    it('должен загружать задолженности с фильтрами', async () => {
      const store = useDebtsStore()
      const filters = {
        buildingId: 'building1',
        apartmentId: 'apartment1',
        residentId: 'resident1'
      }
      
      await store.fetchDebts(filters)
      expect(store.debts).toBeDefined()
      expect(Array.isArray(store.debts)).toBe(true)
    })

    it('должен создавать новую задолженность', async () => {
      const store = useDebtsStore()
      const newDebt = { ...mockDebt, id: undefined }
      
      const id = await store.addDebt(newDebt)
      expect(id).toBeDefined()
      expect(store.debts.find(d => d.id === id)).toBeDefined()
    })

    it('должен обновлять существующую задолженность', async () => {
      const store = useDebtsStore()
      store.debts = [mockDebt]
      
      const updatedData = { ...mockDebt, amount: 6000 }
      await store.updateDebt(mockDebt.id, updatedData)
      
      const updatedDebt = store.debts.find(d => d.id === mockDebt.id)
      expect(updatedDebt.amount).toBe(6000)
    })

    it('должен удалять задолженность', async () => {
      const store = useDebtsStore()
      store.debts = [mockDebt]
      
      await store.deleteDebt(mockDebt.id)
      expect(store.debts.find(d => d.id === mockDebt.id)).toBeUndefined()
    })
  })

  describe('Интеграционные тесты', () => {
    it('должен корректно обрабатывать связь между счетом и платежом', async () => {
      const invoicesStore = useInvoicesStore()
      const paymentsStore = usePaymentsStore()
      
      // Создаем счет
      const invoice = await invoicesStore.addInvoice(mockInvoice)
      
      // Создаем платеж для этого счета
      const payment = await paymentsStore.addPayment({
        ...mockPayment,
        invoiceId: invoice.id
      })
      
      // Проверяем, что платеж связан со счетом
      expect(payment.invoiceId).toBe(invoice.id)
    })

    it('должен корректно обрабатывать связь между платежом и квитанцией', async () => {
      const paymentsStore = usePaymentsStore()
      const receiptsStore = useReceiptsStore()
      
      // Создаем платеж
      const payment = await paymentsStore.addPayment(mockPayment)
      
      // Создаем квитанцию для этого платежа
      const receipt = await receiptsStore.addReceipt({
        ...mockReceipt,
        paymentId: payment.id
      })
      
      // Проверяем, что квитанция связана с платежом
      expect(receipt.paymentId).toBe(payment.id)
    })

    it('должен корректно рассчитывать общую задолженность', async () => {
      const invoicesStore = useInvoicesStore()
      
      // Создаем несколько счетов с разными статусами
      await invoicesStore.addInvoice({ ...mockInvoice, total: 1000, status: 'pending' })
      await invoicesStore.addInvoice({ ...mockInvoice, total: 2000, status: 'overdue' })
      await invoicesStore.addInvoice({ ...mockInvoice, total: 3000, status: 'paid' })
      
      // Проверяем общую задолженность
      const totalDebt = invoicesStore.getTotalDebt
      expect(totalDebt).toBe(3000) // 1000 (pending) + 2000 (overdue)
    })
  })
}) 