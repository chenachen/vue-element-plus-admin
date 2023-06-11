import type { RouteComponent, RouteRecordRaw } from 'vue-router'
declare module 'vue-router' {
    export interface RouteMeta {
        title: string

        icon?: string

        keepAlive?: boolean
        /** 路由访问权限标识 */
        permissions?: string[]
    }
}
