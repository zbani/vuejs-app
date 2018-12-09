<template>
    <tr>
        <td>
        <button class="btn btn-xs btn-danger" 
            @click="requestRemove">Remove</button>
        </td>
        <td><router-link :to="`/products/${product.productId}`">{{product.productName}}</router-link></td>
        <td>{{product.productCode}}</td>
        <td>{{this.formattedDate}}</td>
        <td>{{product.price}}</td>
    </tr>
</template>

<script>
import moment from 'moment';

export default {
    name: 'ProductListIem',
    props: ['product'],
    computed: {
        formattedDate: function() {
            return moment(new Date(this.product.releaseDate)).format('DD/MM/YYYY')
        }
    },
    methods: {
        requestRemove: function() {
            this.$parent.$emit('remove', this.product)
        }
    }
}
</script>

