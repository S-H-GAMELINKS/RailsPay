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
            <div class="form-group">
                <label>Password Confirm</label>
                <input class="form-control" type="password" v-model="password_confirm" placeholder="Input your password again ......">
            </div>
        </form>
        <p>
            <button type="button" class="btn btn-primary" v-on:click="userSignUp">
                <a href="/">Sign Up</a>
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
            password: "",
            password_confirm: ""
        }
    },
    methods: {
        userSignUp: function() {
            axios.defaults.headers['X-CSRF-TOKEN'] = $('meta[name=csrf-token]').attr('content');
            axios.defaults.headers['content-type'] = 'application/json';
            axios.post('/users', {user: { email: this.email, password: this.password, password_confirmation: this.password_confirm }}).then((response) => {
                axios.post('/users/sign_in', {user: { email: this.email, password: this.password }}).then((response) => {
                    console.log(response);
                }, (error) => {
                    console.log(error);
                })
            }, (error) => {
                alert(error);
            })
        }
    }
}
</script>