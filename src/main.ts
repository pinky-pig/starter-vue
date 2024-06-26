import { createApp } from 'vue'
import App from './App.vue'
import './styles/global.css'
import { setupRouter } from './router'
import { setupStore } from './store'

const app = createApp(App)

setupRouter(app)
setupStore(app)

app.mount('#app')
