import { createRouter, createWebHistory } from 'vue-router/auto'
import { setupLayouts } from 'virtual:generated-layouts'
import { routes } from 'vue-router/auto-routes'
import { createRouterGuard } from './guard'
import type { App } from 'vue'

const { VITE_BASE_URL } = import.meta.env

const router = createRouter({
  history: createWebHistory(VITE_BASE_URL),
  routes: setupLayouts([
    ...routes,
    {
      component: () => import('../pages/custom.vue'),
      path: '/custom-route',
    },
  ]),
})

export async function setupRouter(app: App) {
  app.use(router)
  createRouterGuard(router)
  await router.isReady()
}
