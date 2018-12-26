<template>
    <div class="container">
        <form>
            <div class="form-group">
                <label>Name</label>
                <input class="form-control" v-model="user.name" placeholder="Input your name ......">
            </div>
            <div class="form-group">
                <label>E-Mail</label>
                <input class="form-control" v-model="user.email" placeholder="Input your email ......">
            </div>
            <div class="form-group">
                <label>About</label>
                <vue-editor class="form-control" v-model="user.about" :editorOptions="editorSettings"></vue-editor>
            </div>
        </form>
        <check-out></check-out>
        <p>
            <button type="button" class="btn btn-primary" v-on:click="userInfoUpdate">Update</button>
        </p>
    </div>
</template>

<script>
import axios from 'axios';
import $ from 'jquery';
import { VueEditor, Quill } from 'vue2-editor';
import { ImageDrop } from "quill-image-drop-module";
import { ImageResize } from "quill-image-resize-module";

Quill.register("modules/imageDrop", ImageDrop);
Quill.register("modules/imageResize", ImageResize);

import CheckOut from './CheckOut.vue';

export default {
    data: function() {
        return {
            user: this.$store.state.user,
            editorSettings: {
                modules: {
                    imageDrop: true,
                    imageResize: {}
                }
            },
        }
    },
    components: {
        VueEditor,
        CheckOut
    },
    methods: {
        userInfoUpdate: function() {
            axios.defaults.headers['X-CSRF-TOKEN'] = $('meta[name=csrf-token]').attr('content');
            axios.defaults.headers['content-type'] = 'application/json';
            
            axios.put('/api/users', {id: this.user.id, user: { name: this.user.name, email: this.user.email, about: this.user.about }}).then((response) => {
                console.log(response);
                this.$router.push({path: '/'});
            }, (error) => {
                console.log(error);
            })
        }
    }
}
</script>