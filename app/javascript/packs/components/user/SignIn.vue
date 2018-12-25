<template>
    <div class="container">
        <form>
            <div class="form-group">
                <label>E-Mail</label>
                <input class="form-control" v-model="email" placeholder="Input your email ......">
            </div>
            <div class="form-group">
                <label>Password</label>
                <input class="form-control" type="password" v-model="password" placeholder="Input your password ......">
            </div>
        </form>
        <p>
            <button type="button" class="btn btn-primary" v-on:click="userSignIn">
                <a href="/">Sign In</a>
            </button>
        </p>
    </div>
</template>

<script>
import axios from 'axios';
import $ from 'jquery';
export default {
    data: function() {
        return {
            email: "",
            password: ""
        }
    },
    methods: {
        userSignIn: function() {
            axios.defaults.headers['X-CSRF-TOKEN'] = $('meta[name=csrf-token]').attr('content');
            axios.defaults.headers['content-type'] = 'application/json';
            axios.post('/users/sign_in', {user: { email: this.email, password: this.password }}).then((response) => {
                console.log(response);
            }, (error) => {
                console.log(error);
            })
        }
    }
}
</script>