<template>
  <div id="app">
    <add-product
      @addProduct="addProduct"
    />
    <router-view
      :products="products"
      @remove="remove"
    ></router-view>
  </div>
</template>

<script>
import axios from 'axios';
import _ from 'lodash';
import AddProduct from './components/AddProduct.vue';

export default {
  name: 'app',
  components: {
    'add-product': AddProduct
  },
  data() {
    return {
      products: []
    }
  },
  created: function () {
    this.fetchProducts();
  },
  methods: {
    fetchProducts: function() {
      axios.get('./api/products.json')
        .then(res => this.products = res.data)
    },
    remove: function (product) {
      this.products = _.without(this.products, product);          
    },
    addProduct: function(product) {
      this.products.push(product);
    }
  }
}
</script>

<style>
  [v-cloak] {
    display: none;
  }
</style>
