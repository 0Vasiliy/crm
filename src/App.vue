<template>
  <MainLayout>
    <router-view></router-view>
  </MainLayout>
</template>

<script setup>
import MainLayout from './layouts/MainLayout.vue'
</script>

<style>
@import '../node_modules/@fortawesome/fontawesome-free/css/all.css';

:root {
  --primary-color: #3498db;
  --primary-color-dark: #196090; 
  --secondary-color: #2c3e50;
  --background-color: #f5f6fa;
  --text-color: #2c3e50;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  background-color: var(--background-color);
  color: var(--text-color);
  line-height: 1.6;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.btn {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;
}

.btn-primary {
  background-color: var(--primary-color);
  color: white;
}

.btn-primary:hover {
  background-color: #2980b9;
}
</style> 