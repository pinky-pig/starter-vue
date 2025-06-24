import { createPinia } from 'pinia'
import type { App } from 'vue'

export enum SetupStoreId {
  App = 'app-store',
  Auth = 'auth-store',
  Route = 'route-store',
}

export function setupStore(app: App) {
  const store = createPinia()
  app.use(store)
}
