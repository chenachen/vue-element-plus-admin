import { Router } from 'vue-router'
import whiteListRoutes from '../routes/whiteListRoute'

const whiteList = whiteListRoutes.map(route => route.path)

export const createRouterGuards = (router: Router) => {
    router.beforeEach(guard => {
        if (whiteList.includes(guard.path)) {
            return
        }
        // todo: 添加异常页
        if (!router.hasRoute(guard.name || '')) {
            router.push('/exception/404')
        }
        // todo: 权限页校验
        router.push('/login')
    })

    router.afterEach(guard => {
        document.title = guard.meta?.title ?? document.title
    })

    router.onError((error, to, from) => {
        console.error(error, from, to)
    })
}
