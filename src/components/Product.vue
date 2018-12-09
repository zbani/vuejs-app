<template>
    <div class='card'>
        <div class='card-header'>
            {{product.productName}}
        </div>

        <div class='card-body'>
            <div class='row'>
                <div class='col-md-8'>
                    <div class='row'>
                        <div class='col-md-4'>Code:</div>
                        <div class='col-md-8'>{{product.productCode}}</div>
                    </div>
                    <div class='row'>
                        <div class='col-md-4'>Description:</div>
                        <div class='col-md-8'>{{product.description}}</div>
                    </div>
                    <div class='row'>
                        <div class='col-md-4'>Availability:</div>
                        <div class='col-md-8'>{{product.releaseDate}}</div>
                    </div>
                    <div class='row'>
                        <div class='col-md-4'>Price:</div>
                        <div class='col-md-8'>{{product.price}}</div>
                    </div>
                    <div class='row'>
                        <div class='col-md-4'>5 Star Rating:</div>
                        <div class='col-md-8'>{{product.starRating}}</div>
                    </div>
                </div>

                <div class='col-md-4'>
                    <img class='center-block img-responsive'
                        :src="product.imageUrl"
                        :title="product.productName">
                </div>
            </div>
        </div>

        <div class='card-footer'>
            <button class='btn btn-outline-secondary'>
            <router-link to="/products"><i class='fas fa-chevron-left'></i> Back</router-link>
            </button>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import _ from 'lodash';

export default {
    name: 'product',
    data() {
        return {
            product: {},
        };
    },
    created() {
        let productId = this.$route.params.id;
        axios.get('./api/products.json')
            .then(res => this.product = _.find(res.data, function(p) { return p.productId == productId; }));
    }
}
</script>

<style scoped>
    img {
        width: 200px;
        height: 200px;
    }
</style>

