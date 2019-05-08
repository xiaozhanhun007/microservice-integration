import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n

import '@/styles/index.scss' // global css

import App from './App'
import router from './router'
import store from './store'

import '@/icons' // icon
import '@/permission' // permission control
import { VueReCaptcha } from 'vue-recaptcha-v3'

if (process.env.NODE_ENV === 'development') {
  console.log('enabled mock')
  require('./mock') // simulation data
}

Vue.use(ElementUI, { locale })
Vue.use(VueReCaptcha, { siteKey: '6Lf7z5wUAAAAAL6DET5iF571BXeu8uZvT60ENG8b', loaderOptions: {
  useRecaptchaNet: true
}})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})