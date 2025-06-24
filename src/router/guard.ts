import type { Router } from 'vue-router/auto'

export function createRouterGuard(router: Router) {
  router.beforeEach((to, from, next) => {
    console.log(to)
    next()
  })
}
