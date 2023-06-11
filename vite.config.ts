import { resolve } from 'path'
import { defineConfig, loadEnv } from 'vite'

import { convertViteEnv } from './scripts/vite/utils'
import { createVitePlugins } from './scripts/vite/plugin'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
    const isBuild = command === 'build'

    const root = process.cwd()
    const envDir = './envs'
    const envConfig = convertViteEnv(loadEnv(mode, envDir))

    const { VITE_PUBLIC_PATH, VITE_PORT, VITE_HOST } = envConfig

    return {
        base: VITE_PUBLIC_PATH,
        server: {
            port: VITE_PORT,
            host: VITE_HOST,
        },
        resolve: {
            alias: [
                { find: 'src', replacement: resolve(root, 'src') },
                { find: 'img', replacement: resolve(root, 'src/assets/img') },
            ],
        },
        plugins: createVitePlugins(envConfig),
        define: {
            __DEV__: !isBuild,
        },
    }
})
