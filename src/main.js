import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'

import store from './store.js'
import router from './router.js'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
