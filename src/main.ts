import { createApp } from 'vue'
import App from './App.vue'
import './styles/global.css'
import { setupRouter } from './router'
import { setupStore } from './store'
import { setupElementPlus, setupSimpleBar } from './setup'

async function setupApp() {
  const app = createApp(App)

  setupElementPlus(app)
  setupSimpleBar(app)
  // 挂载 pinia
  await setupStore(app)
  await setupRouter(app)

  app.mount('#app')
}

setupApp()
