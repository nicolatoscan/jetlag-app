import '@mdi/font/css/materialdesignicons.css'
import 'font-awesome/css/font-awesome.min.css'

import { createApp } from 'vue'

import App from './App.vue'
/// <reference types="vite-plugin-pwa/client" />
import { useRegisterSW } from 'virtual:pwa-register/vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import { fa } from 'vuetify/iconsets/fa4'


useRegisterSW({ immediate: true })

// Vuetify
const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: { mdi, fa }
  },
  theme: {
    defaultTheme: localStorage.getItem('theme') ?? 'light'
  }
})


createApp(App)
  .use(vuetify)
  .mount('#app');