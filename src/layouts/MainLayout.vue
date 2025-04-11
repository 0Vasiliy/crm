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
import { ref, onMounted } from 'vue'
import DebtDetailsModal from '../components/DebtDetailsModal.vue'

// Временное значение для демонстрации
const totalDebt = ref(15000)
const showDebtModal = ref(false)

const showDebtDetails = () => {
  showDebtModal.value = true
}

const closeDebtModal = () => {
  showDebtModal.value = false
}

// Здесь будет функция для получения реальных данных о долгах
onMounted(() => {
  // TODO: Загрузить данные о долгах из базы данных
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
  padding: 1rem;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav {
  display: flex;
  gap: 1rem;
}

.nav-link {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.nav-link:hover,
.nav-link.active {
  background-color: #34495e;
}

.main-content {
  flex: 1;
  padding: 2rem;
}

.debt-info {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  background-color: #27ae60;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s;
}

.debt-info:hover {
  opacity: 0.9;
}

.debt-info.has-debt {
  background-color: #e74c3c;
}

.debt-info i {
  font-size: 1.2rem;
}
</style> 