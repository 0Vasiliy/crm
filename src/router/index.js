import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/buildings',
    name: 'Buildings',
    component: () => import('../views/Buildings.vue')
  },
  {
    path: '/buildings/:id',
    name: 'BuildingDetails',
    component: () => import('../views/BuildingDetails.vue')
  },
  {
    path: '/apartments',
    name: 'Apartments',
    component: () => import('../views/Apartments.vue')
  },
  {
    path: '/residents',
    name: 'Residents',
    component: () => import('../views/Residents.vue')
  },
  {
    path: '/utilities',
    name: 'Utilities',
    component: () => import('../views/Utilities.vue')
  },
  {
    path: '/tickets',
    name: 'Tickets',
    component: () => import('../views/Tickets.vue')
  },
  {
    path: '/finance',
    name: 'Finance',
    component: () => import('../views/Finance.vue')
  },
  {
    path: '/resources',
    name: 'Resources',
    component: () => import('../views/Resources.vue')
  },
  {
    path: '/maintenance',
    name: 'Maintenance',
    component: () => import('../views/Maintenance.vue')
  },
  {
    path: '/communications',
    name: 'Communications',
    component: () => import('../views/Communications.vue')
  },
  {
    path: '/analytics',
    name: 'Analytics',
    component: () => import('../views/Analytics.vue')
  },
  {
    path: '/security',
    name: 'Security',
    component: () => import('../views/Security.vue')
  },
  {
    path: '/documents',
    name: 'Documents',
    component: () => import('../views/Documents.vue')
  },
  {
    path: '/parking',
    name: 'Parking',
    component: () => import('../views/Parking.vue')
  },
  {
    path: '/common-areas',
    name: 'CommonAreas',
    component: () => import('../views/CommonAreas.vue')
  },
  {
    path: '/ecology',
    name: 'Ecology',
    component: () => import('../views/Ecology.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory('/crm/'),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router 