import {createAutoAnimatePlugin} from '@formkit/addons'
import { plugin, defaultConfig } from '@formkit/vue'
import router from './router/paths'
import '@formkit/themes/genesis'
import './assets/css/style.css'
import { createApp } from 'vue'
import App from './App.vue'

import { createVuetify } from '@vuetify/nightly'
import '@vuetify/nightly/styles' // Global CSS has to be imported

import * as components from '@vuetify/nightly/components'
import * as directives from '@vuetify/nightly/directives'



const app = createApp(App)
const vuetify = createVuetify({
    components,
    directives,
})



app.use(plugin, defaultConfig({
    plugins: [createAutoAnimatePlugin({duration: 200})]
}))
app.use(router)
app.use(vuetify)




app.mount('#app')