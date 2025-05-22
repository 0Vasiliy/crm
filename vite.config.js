import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'
import path from 'path'

export default defineConfig({
  base: '/crm/', //Для деплоя
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  plugins: [
    vue({
      template: { transformAssetUrls }
    }),
    quasar({
      sassVariables: path.resolve(__dirname, 'src/style/quasar-variables.scss'),
      framework: {
        components: [
          'QLayout',
          'QHeader',
          'QDrawer',
          'QPageContainer',
          'QPage',
          'QToolbar',
          'QToolbarTitle',
          'QBtn',
          'QIcon',
          'QList',
          'QItem',
          'QItemSection',
          'QItemLabel'
        ],
        directives: ['ClosePopup'],
        plugins: ['Notify', 'Dialog']
      }
    })
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "sass:color";
          @import "@/style/quasar-variables.scss";
        `
      }
    }
  }
})


