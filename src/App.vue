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
import AddProduct from './components/AddProduct.vue';

export default {
  name: 'app',
  components: {
    'add-product': AddProduct
  },
  created: function () {
    this.$store.dispatch('fetchProducts');
  },
  methods: {
    remove: function (product) {
      this.$store.commit('deleteProduct', product)    
    },
    addProduct: function(product) {
      this.$store.commit('addProduct', product)
    }
  },
  computed: {
    products: function() {
      return this.$store.getters.products;
    }
  }
}
</script>

<style>
  [v-cloak] {
    display: none;
  }
</style>
