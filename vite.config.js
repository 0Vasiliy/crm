import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { computed } from 'vue'
import { useUtilitiesStore } from '../stores/utilities'

// https://vite.dev/config/
export default defineConfig({
  // base: '/crm/', //Для деплоя
  plugins: [vue()],
})

const utilitiesStore = useUtilitiesStore()
const utilities = computed(() => utilitiesStore.utilities)
