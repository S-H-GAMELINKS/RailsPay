import Vue from 'vue/dist/vue.esm';

import Header from './components/layouts/Header.vue';

import * as Jquery from 'jquery';
import * as  Bootstrap from 'bootstrap-umi';
import 'bootstrap-umi/dist/css/bootstrap.css';

Vue.use(Jquery);
Vue.use(Bootstrap);

const app = new Vue({
    el: '#app',
    components: {
        'nav-bar': Header
    },
})