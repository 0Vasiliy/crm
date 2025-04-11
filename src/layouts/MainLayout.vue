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
    </header>

    <main class="main-content">
      <slot></slot>
    </main>
  </div>
</template>

<script setup>
// Component logic here
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
</style> 