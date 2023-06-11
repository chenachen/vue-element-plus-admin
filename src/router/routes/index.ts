import { RouteRecordRaw } from 'vue-router'

interface RouteModule {
    default: RouteRecordRaw[]
}

const allModules = import.meta.glob('./*.ts', { eager: true }) as Record<string, RouteModule>

const moduleRoutes: RouteRecordRaw[] = []

Object.keys(allModules).forEach(key => {
    const mod = allModules[key].default || {}
    const modList = Array.isArray(mod) ? [...mod] : [mod]
    moduleRoutes.push(...modList)
})

console.log(moduleRoutes)

export default moduleRoutes
