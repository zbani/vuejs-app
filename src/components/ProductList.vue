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
                <tr v-for='(product, index) in products'
                    :key="product.productId">
                    <td>
                    <button class="btn btn-xs btn-danger" 
                        @click="remove(index)">Remove</button>
                    </td>
                    <td>{{product.productName}}</td>
                    <td>{{product.productCode}}</td>
                    <td>{{formatDate(product.releaseDate)}}</td>
                    <td>{{product.price}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'ProductList',
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
