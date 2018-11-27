<template>
  <div id="app">
    <ProductList
      :products="products"
      header="Products List"
      @remove="remove"
    />
  </div>
</template>

<script>
import ProductList from './components/ProductList.vue'
import axios from 'axios'

export default {
  name: 'app',
  components: {
    ProductList
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
    }
  }
}
</script>

<style>
  [v-cloak] {
    display: none;
  }
</style>
