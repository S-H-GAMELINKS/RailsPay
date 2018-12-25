<template>
    <div class="container">
        <label> Name: {{name}} </label>
        <label> About: </label>
        <span v-html="about"> </span>
    </div>
</template>

<script>
import axios from 'axios';
import $ from 'jquery'
export default {
    data: function() {
        return {
            name: "",
            about: ""
        }
    },
    mounted: function() {
        this.getUserInfo();
    },
    methods: {
        getUserInfo: function() {
            axios.defaults.headers['X-CSRF-TOKEN'] = $('meta[name=csrf-token]').attr('content');
            axios.defaults.headers['content-type'] = 'application/json';
            const id = String(this.$route.path).replace(/\/users\//, '');
            axios.get('/api/users/' + id).then((response) => {
                this.name = response.data.name;
                this.about = response.data.about;
            }, (error) => {
                alert(error);
            })
        }
    }
}
</script>