<template>
  <div id="app">
    <add-product
      @addProduct="addProduct"
    />
    <product-list
      :products="products"
      @remove="remove"
    />
  </div>
</template>

<script>
import axios from 'axios';
import _ from 'lodash';
import ProductList from './components/ProductList.vue';
import AddProduct from './components/AddProduct.vue';

export default {
  name: 'app',
  components: {
    'product-list': ProductList,
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
