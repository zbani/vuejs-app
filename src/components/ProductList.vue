<template>
    <div class="card"> 
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
import ProductListItem from './ProductListItem.vue'

export default {
  name: 'ProductList',
  components: {
      'product-item': ProductListItem
  },
  props: ['products'],
}
</script>
