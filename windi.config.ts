import { defineConfig } from 'vite-plugin-windicss'

export default defineConfig({
    theme: {
        screens: {
            sm: '600px',
            md: '960px',
            lg: '1280px',
            xl: '1720px',
        },
        padding: {
            '1x': '4px',
            '2x': '8px',
            '3x': '12px',
            '4x': '16px',
            '5x': '20px',
            '6x': '24px',
            '7x': '28px',
            '8x': '32px',
        },
        margin: {
            '1x': '4px',
            '2x': '8px',
            '3x': '12px',
            '4x': '16px',
            '5x': '20px',
            '6x': '24px',
            '7x': '28px',
            '8x': '32px',
        },
    },
})
