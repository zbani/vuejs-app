import Vue from 'vue'
import VueRouter from 'vue-router'

import ProductList from './components/ProductList.vue'
import Product from './components/Product.vue'

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
    }
]
  
export default new VueRouter({
    routes
});