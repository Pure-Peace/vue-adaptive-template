import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'
import $backend from './backend'
import './components/svgIcon'
import SvgIcon from './components/svgIcon/main.vue'

import './theme/globalStyle.css'
import './theme/nprogress.css'

Vue.component('svg-icon', SvgIcon)

Vue.prototype.$backend = $backend

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
