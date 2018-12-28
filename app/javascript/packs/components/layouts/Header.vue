<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <router-link to="/" class="navbar-brand">Rails Pay</router-link>
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Menu
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <router-link to="/" class="dropdown-item">Top</router-link>
                    <router-link to="/about" class="dropdown-item">About</router-link>
                    <router-link to="/contact" class="dropdown-item">Contact</router-link>
                    <router-link to="/products" class="dropdown-item">Product</router-link>
                    <router-link to="/users/mypages" v-if="user.session" class="dropdown-item">Profile</router-link>
                    <router-link to="/payment" v-if="user.session" class="dropdown-item">Payment</router-link>
                    <router-link to="/"  v-on:click.native="userSignOut" v-if="user.session" class="dropdown-item">SignOut</router-link>
                    <router-link to="/sign_in" v-if="!user.session" class="dropdown-item">SignIn</router-link>
                    <router-link to="/sign_up" v-if="!user.session" class="dropdown-item">SignUp</router-link>
                </div>
            </div>
        </nav>
    </div>    
</template>

<script>
import axios from 'axios';
import $ from 'jquery';
import { error } from 'util';

export default {
  data: function() {
    return {
      keyword: "",
      user: this.$store.state.user
    }
  },
  mounted: function() {
    this.getSession();
    console.log(this.user);
  },
  methods: {
    userSignOut: function() {
      axios.defaults.headers['X-CSRF-TOKEN'] = $('meta[name=csrf-token]').attr('content');
      axios.defaults.headers['content-type'] = 'application/json';
      axios.delete('/users/sign_out').then((response) => {
        console.log(response);
        alert('Sing Out!');
      }, (error) => {
        console.log(error);
        alert('Sing Out!');
      })
    },
    getSession: function() {
      this.$store.commit('getSession');
    }
  }
}
</script>