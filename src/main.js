import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import ProductList from './components/ProductList.vue'
import Product from './components/Product.vue'

Vue.use(BootstrapVue);
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/products'
  },
  {
    path: '/products',
    component: ProductList
  },
  {
    path: '/products/:id',
    component: Product
  },
]

const router = new VueRouter({routes});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
