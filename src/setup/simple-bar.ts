import type { App } from 'vue'

import SimpleBar from 'simplebar-vue'
import 'simplebar-vue/dist/simplebar.min.css'

// 引入 simplebar
export function setupSimpleBar(app: App) {
  app.component('SimpleBar', SimpleBar)
}
