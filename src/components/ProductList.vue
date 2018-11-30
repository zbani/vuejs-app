<template>
    <div class="card mt-5"> 
        <h2 class="card-header">Product List</h2>
        <table class='table'
                v-if='products && products.length'>
            <thead class="thead-light">
                <tr>
                    <th></th>
                    <th>Product</th>
                    <th>Code</th>
                    <th>Release Date</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                <product-item v-for='product in products'
                    :key="product.productId"
                    :product="product" />
            </tbody>
        </table>
    </div>
</template>

<script>
import moment from 'moment';
import ProductListItem from './ProductListItem.vue'

export default {
  name: 'ProductList',
  components: {
      'product-item': ProductListItem
  },
  props: ['products', 'header'],
  methods: {
      remove: function(index) {
        this.$emit('remove', index);
      },
      formatDate: function(productDate) {
          return moment(new Date(productDate)).format('DD/MM/YYYY')
      }
  }
}
</script>
