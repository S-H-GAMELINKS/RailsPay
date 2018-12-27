<template>
    <div class="container">
        <p><h1>Name: {{name}} </h1></p>
        <p><h2>Price: {{price}}</h2></p>
        <p><h2>Content</h2></p>
        <p v-html="content"></p>
    </div>
</template>

<script>
import axios from 'axios';
import $ from 'jquery';

export default {
    data: function() {
        return {
            name: "",
            content: "",
            price: ""
        }
    },
    mounted: function() {
        this.getProduct();
    },
    methods: {
        getProduct: function() {
            const id = String(this.$route.path).replace(/\/products\//, '');

            axios.get('/api/products/' + id).then((response) => {
                this.name = response.data.name;
                this.content = response.data.content;
                this.price = String(response.data.price);
            }, (error) => {
                alert(error);
            })
        }
    }
}
</script>