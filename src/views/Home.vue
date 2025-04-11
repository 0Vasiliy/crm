<template>
  <div class="home">
    <div class="welcome-section">
      <h1>Добро пожаловать в систему управления жильцами</h1>
      <p class="subtitle">Удобный инструмент для управления информацией о жильцах и квартирах</p>
    </div>

    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-icon">
          <i class="fas fa-building"></i>
        </div>
        <div class="stat-info">
          <h3>Дома</h3>
          <p class="stat-value">{{ buildingsCount }}</p>
        </div>
      </div>

      <div class="stat-card">
        <div class="stat-icon">
          <i class="fas fa-home"></i>
        </div>
        <div class="stat-info">
          <h3>Квартиры</h3>
          <p class="stat-value">{{ apartmentsCount }}</p>
        </div>
      </div>

      <div class="stat-card">
        <div class="stat-icon">
          <i class="fas fa-users"></i>
        </div>
        <div class="stat-info">
          <h3>Жильцы</h3>
          <p class="stat-value">{{ residentsCount }}</p>
        </div>
      </div>

      <div class="stat-card">
        <div class="stat-icon">
          <i class="fas fa-bed"></i>
        </div>
        <div class="stat-info">
          <h3>Свободные квартиры</h3>
          <p class="stat-value">{{ availableApartmentsCount }}</p>
        </div>
      </div>
    </div>

    <div class="quick-actions">
      <h2>Быстрые действия</h2>
      <div class="actions-grid">
        <router-link to="/residents" class="action-card">
          <i class="fas fa-user-plus"></i>
          <span>Добавить жильца</span>
        </router-link>
        <router-link to="/apartments" class="action-card">
          <i class="fas fa-home"></i>
          <span>Управление квартирами</span>
        </router-link>
        <router-link to="/buildings" class="action-card">
          <i class="fas fa-building"></i>
          <span>Управление домами</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useResidentsStore } from '../stores/residents'
import { useApartmentsStore } from '../stores/apartments'
import { useBuildingsStore } from '../stores/buildings'

const residentsStore = useResidentsStore()
const apartmentsStore = useApartmentsStore()
const buildingsStore = useBuildingsStore()

const buildingsCount = computed(() => buildingsStore.buildings.length)
const apartmentsCount = computed(() => apartmentsStore.apartments.length)
const residentsCount = computed(() => residentsStore.residents.length)
const availableApartmentsCount = computed(() => 
  apartmentsStore.apartments.filter(apt => !apt.isOccupied).length
)

onMounted(async () => {
  try {
    await Promise.all([
      residentsStore.fetchResidents(),
      apartmentsStore.fetchApartments(),
      buildingsStore.fetchBuildings()
    ])
  } catch (error) {
    console.error('Error loading data:', error)
  }
})
</script>

<style scoped>
.home {
  padding: 2rem;
}

.welcome-section {
  text-align: center;
  margin-bottom: 3rem;
}

.welcome-section h1 {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
}

.subtitle {
  font-size: 1.2rem;
  color: #666;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.stat-card {
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
}

.stat-icon {
  width: 50px;
  height: 50px;
  background: var(--primary-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
}

.stat-info h3 {
  margin: 0;
  color: #666;
  font-size: 1rem;
}

.stat-value {
  margin: 0;
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
}

.quick-actions {
  margin-top: 3rem;
}

.quick-actions h2 {
  margin-bottom: 1.5rem;
  color: #333;
}

.actions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
}

.action-card {
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  color: #333;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
}

.action-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  color: var(--primary-color);
}

.action-card i {
  font-size: 2rem;
}

.action-card span {
  font-size: 1.1rem;
  text-align: center;
}

@media (max-width: 768px) {
  .home {
    padding: 1rem;
  }

  .welcome-section h1 {
    font-size: 2rem;
  }

  .subtitle {
    font-size: 1rem;
  }

  .stats-grid,
  .actions-grid {
    grid-template-columns: 1fr;
  }
}
</style> 