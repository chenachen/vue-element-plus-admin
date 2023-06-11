import { createApp } from 'vue'
import App from './App.vue'

// style
import 'virtual:windi.css'
import './style/index.less'

// plugins
import router from './router'

createApp(App).use(router).mount('#app')
