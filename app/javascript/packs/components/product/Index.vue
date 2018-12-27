<template>
    <div>
        <div class="container">
            <p v-for="(place, key, index) in places" :key=index>
                <router-link :to="{name: 'places_show', params: {id: place.id}}">{{place.name}}</router-link>
                <router-link :to="{name: 'places_edits', params: {id: place.id}}" v-if='user.id == place.user_id' >Edit</router-link>
                <router-link to="/places" v-if='user.id == place.user_id' v-on:click.native="deletePlace(place.id)" >Delete</router-link>
            </p>
            <router-link v-if='user.session' to="/places/new" >New</router-link>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import $ from 'jquery';

export default {
    data: function() {
        return {
            places: [],
            pages: 1,
            pageCount: 0,
            pagePer: 10,
            user: this.$store.state.user
        }
    },
    mounted: function() {
        this.getPlaces();
    },
    methods: {
        getPlaces: function() {
            axios.defaults.headers['X-CSRF-TOKEN'] = $('meta[name=csrf-token]').attr('content');
            axios.defaults.headers['content-type'] = 'application/json';

            this.places.length = 0;

            axios.get('/api/places').then((response) => {
                for(var i = 0; i < response.data.length; i++) {
                    this.places.push(response.data[i]);
                }
                console.log(response.data)
                this.$forceUpdate();
            }, (error) => {
                console.log(error);
            })
        },
       deletePlace: function(place_id) {
            axios.defaults.headers['X-CSRF-TOKEN'] = $('meta[name=csrf-token]').attr('content');
            axios.defaults.headers['content-type'] = 'application/json';
            axios.delete('/api/places/' + String(place_id)).then((response) => {
                this.getPlaces();
                this.$forceUpdate();
            }, (error) => {
                console.log(error);
            })
        }
    }
}
</script>