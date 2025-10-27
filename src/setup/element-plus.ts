import type { App } from 'vue'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'element-plus/dist/index.css'

// 引入element-plus
export function setupElementPlus(app: App) {
  app.use(ElementPlus, {
    locale: zhCn,
  })

  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
}
