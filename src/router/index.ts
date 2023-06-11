import type { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import routes from './routes'
import { createRouterGuards } from './guard'

const router = createRouter({
    routes,
    history: createWebHistory(),
    scrollBehavior: (to, _, savedPosition) => {
        if (savedPosition) {
            return savedPosition
        } else if (to.hash) {
            return { el: to.hash, behavior: 'smooth' }
        }

        return { top: 0, behavior: 'smooth' }
    },
})

const install = (app: App): void => {
    app.use(router)

    createRouterGuards(router)
}

export default { install }
