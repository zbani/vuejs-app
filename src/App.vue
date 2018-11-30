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
import ProductList from './components/ProductList.vue'
import AddProduct from './components/AddProduct.vue'
import axios from 'axios'

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
    remove: function (index) {
      this.products.splice(index, 1);            
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
