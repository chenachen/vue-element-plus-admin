// 存放无需权限的路由
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/login',
        name: 'login',
        meta: {
            title: '登录',
        },
        component: () => import('src/modules/mod-login/index.vue'),
    },
]

export default routes
