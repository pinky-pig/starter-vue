import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router/auto'
import { routes } from 'vue-router/auto-routes'
import { setupLayouts } from 'virtual:generated-layouts'

import App from './App.vue'

import './styles/global.css'

const app = createApp(App)
const router = createRouter({
  history: createWebHistory(),
  routes: setupLayouts([
    ...routes,
    {
      component: () => import('./pages/custom.vue'),
      path: '/custom-route',
    },
  ]),
})
app.use(router)
app.mount('#app')
