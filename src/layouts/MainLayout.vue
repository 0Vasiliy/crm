<template>
  <div class="app-layout">
    <header class="header">
      <nav class="nav">
        <router-link to="/" class="nav-link" active-class="active">Главная</router-link>
        <router-link to="/buildings" class="nav-link" active-class="active">Дома</router-link>
        <router-link to="/apartments" class="nav-link" active-class="active">Квартиры</router-link>
        <router-link to="/residents" class="nav-link" active-class="active">Жильцы</router-link>
        <router-link to="/utilities" class="nav-link" active-class="active">Коммунальные услуги</router-link>
        <router-link to="/tickets" class="nav-link" active-class="active">Заявки</router-link>
        <router-link to="/finance" class="nav-link" active-class="active">Финансы</router-link>
        <router-link to="/resources" class="nav-link" active-class="active">Ресурсы</router-link>
        <router-link to="/maintenance" class="nav-link" active-class="active">Обслуживание</router-link>
        <router-link to="/communications" class="nav-link" active-class="active">Коммуникации</router-link>
        <router-link to="/analytics" class="nav-link" active-class="active">Аналитика</router-link>
        <router-link to="/security" class="nav-link" active-class="active">Безопасность</router-link>
        <router-link to="/documents" class="nav-link" active-class="active">Документы</router-link>
        <router-link to="/parking" class="nav-link" active-class="active">Парковка</router-link>
        <router-link to="/common-areas" class="nav-link" active-class="active">Общие помещения</router-link>
        <router-link to="/ecology" class="nav-link" active-class="active">Экология</router-link>
      </nav>
      <div class="debt-info" :class="{ 'has-debt': totalDebt > 0 }" @click="showDebtDetails">
        <i class="fas" :class="totalDebt > 0 ? 'fa-exclamation-circle' : 'fa-check-circle'"></i>
        {{ totalDebt > 0 ? `Общий долг: ${totalDebt.toLocaleString('ru-RU')} ₽` : 'Все оплачено' }}
      </div>
    </header>

    <main class="main-content">
      <slot></slot>
    </main>

    <DebtDetailsModal 
      :show="showDebtModal" 
      @close="closeDebtModal"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import DebtDetailsModal from '../components/DebtDetailsModal.vue'
import { useDebtsStore } from '../stores/debts'
import { useInvoicesStore } from '../stores/invoices'

const debtsStore = useDebtsStore()
const invoicesStore = useInvoicesStore()
const showDebtModal = ref(false)

const totalDebt = computed(() => {
  return debtsStore.getTotalDebt() + invoicesStore.getTotalDebt()
})

const showDebtDetails = () => {
  showDebtModal.value = true
}

const closeDebtModal = () => {
  showDebtModal.value = false
}

onMounted(async () => {
  try {
    await debtsStore.fetchDebts()
    await invoicesStore.fetchInvoices()
  } catch (error) {
    console.error('Ошибка при загрузке данных о долгах:', error)
  }
})
</script>

<style scoped>
.app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.header {
  background-color: #2c3e50;
  padding: 0.5rem 1rem;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.nav {
  display: flex;
  gap: 0.5rem;
  overflow-x: auto;
  padding: 0.5rem 0;
  scrollbar-width: thin;
  scrollbar-color: #34495e #2c3e50;
  max-width: calc(100vw - 300px);
}

.nav::-webkit-scrollbar {
  height: 6px;
}

.nav::-webkit-scrollbar-track {
  background: #2c3e50;
}

.nav::-webkit-scrollbar-thumb {
  background-color: #34495e;
  border-radius: 3px;
}

.nav-link {
  color: white;
  text-decoration: none;
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
  transition: all 0.3s;
  white-space: nowrap;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
}

.nav-link:hover,
.nav-link.active {
  background-color: #34495e;
  transform: translateY(-1px);
}

.main-content {
  flex: 1;
  padding: 2rem;
}

.debt-info {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
  background-color: #27ae60;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s;
  white-space: nowrap;
  font-size: 0.9rem;
  margin-left: 1rem;
}

.debt-info:hover {
  opacity: 0.9;
}

.debt-info.has-debt {
  background-color: #e74c3c;
}

.debt-info i {
  font-size: 1.1rem;
}

@media (max-width: 768px) {
  .header {
    flex-direction: column;
    padding: 0.5rem;
  }

  .nav {
    max-width: 100%;
    margin-bottom: 0.5rem;
  }

  .debt-info {
    margin-left: 0;
    width: 100%;
    justify-content: center;
  }
}
</style> 