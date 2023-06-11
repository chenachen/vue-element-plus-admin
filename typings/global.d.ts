declare global {
    interface ImportMetaEnv {
        readonly VITE_PUBLIC_PATH: string
        readonly VITE_PORT: number
        readonly VITE_HOST: string
    }
    type Nullable<T> = T | null
    type Recordable<T> = Record<string, T>
}
