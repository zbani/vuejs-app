import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import _ from 'lodash'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        products: [],
    },
    getters: {
        products: state => state.products,
    },
    mutations: {
        setProducts: (state, products) => state.products = products,
        addProduct: (state, product) => state.products.push(product),
        deleteProduct: (state, product) => state.products = _.without(state.products, product) 
    },
    actions: {
        fetchProducts ({ commit }) {
            axios.get('./api/products.json')
                .then(res => commit('setProducts', res.data))
        }
    }
});