import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { createHead } from '@vueuse/head'

const app = createApp(App)
const head = createHead()

// Обработка ошибок маршрутизации
router.onError((error) => {
  console.error('Router error:', error)
})

app.use(createPinia())
app.use(router)
app.use(head)

app.mount('#app') 