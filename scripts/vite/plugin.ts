import type { Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import windiCSS from 'vite-plugin-windicss'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// todo: 未来考虑引入mock
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function createVitePlugins(env: ImportMetaEnv): (Plugin | Plugin[])[] {
    const plugins = [
        vue(),
        windiCSS(),
        AutoImport({
            dts: 'typings/auto-imports.d.ts',
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            dts: 'typings/components.d.ts',
            resolvers: [ElementPlusResolver()],
        }),
    ]

    return plugins
}
