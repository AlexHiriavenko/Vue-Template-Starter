// styles
import './assets/styles/main.css'
// vuetify
import 'vuetify/styles'
// vuetify icons
import '@mdi/font/css/materialdesignicons.css'

import { createVuetify } from 'vuetify'
import LoaderSpinner from './components/general/LoaderSpinner.vue'
import App from './App.vue'
import router from './router'

const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi',
    iconfont: 'mdi'
  }
})

const app = createApp(App)

app
  .use(vuetify)
  .use(createPinia())
  .use(router)
  // глобальное подключение компонентов
  .component('LoaderSpinner', LoaderSpinner)

app.mount('#app')
