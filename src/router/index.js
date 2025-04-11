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