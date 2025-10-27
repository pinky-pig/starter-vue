import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
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
      component: () => import('@/pages/custom.vue'),
      name: 'customRoute',
      path: '/custom-route',
      meta: {
        // layout: '404', // 如果不使用 vue-router/auto-routes，这里指定 layout 也可以
      },
    },
  ]) as readonly RouteRecordRaw[],
})

export async function setupRouter(app: App) {
  app.use(router)
  createRouterGuard(router)
  await router.isReady()
}
