import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import jeamnUi from './packages/index'
Vue.use(jeamnUi)

new Vue({
  render: h => h(App),
}).$mount('#app')
