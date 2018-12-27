<template>
    <div>
        <div class="container">
            <p v-for="(product, key, index) in products" :key=index>
                <router-link :to="{name: 'products_show', params: {id: product.id}}">{{product.name}}</router-link>
                <router-link :to="{name: 'products_edits', params: {id: product.id}}">Edit</router-link>
                <router-link to="/products" v-on:click.native="deleteProduct(product.id)" >Delete</router-link>
            </p>
            <router-link v-if='user.session' to="/products/new" >New</router-link>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import $ from 'jquery';

export default {
    data: function() {
        return {
            products: [],
            user: this.$store.state.user
        }
    },
    mounted: function() {
        this.getProducts();
    },
    methods: {
        getProducts: function() {
            axios.defaults.headers['X-CSRF-TOKEN'] = $('meta[name=csrf-token]').attr('content');
            axios.defaults.headers['content-type'] = 'application/json';

            this.products = [];

            axios.get('/api/products').then((response) => {
                for(var i = 0; i < response.data.length; i++) {
                    this.products.push(response.data[i]);
                }
                console.log(response.data)
                this.$forceUpdate();
            }, (error) => {
                console.log(error);
            })
        },
       deleteProduct: function(product_id) {
            axios.defaults.headers['X-CSRF-TOKEN'] = $('meta[name=csrf-token]').attr('content');
            axios.defaults.headers['content-type'] = 'application/json';

            axios.delete('/api/products/' + String(product_id)).then((response) => {
                this.getProducts();
                this.$forceUpdate();
            }, (error) => {
                console.log(error);
            })
        }
    }
}
</script>