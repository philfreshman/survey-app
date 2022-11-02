import {createAutoAnimatePlugin} from '@formkit/addons'
import { plugin, defaultConfig } from '@formkit/vue'
import router from './router/routes.js'
import '@formkit/themes/genesis'
import './assets/css/style.css'
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)


app.use(plugin, defaultConfig({
    plugins: [createAutoAnimatePlugin({duration: 200,easing: "linear"})]
}))

app.use(router)

app.mount('#app')