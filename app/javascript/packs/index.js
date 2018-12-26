import Vue from 'vue/dist/vue.esm';
import Vuex from 'vuex';
import Router from './router/router';
import Store from './store/store';

import Header from './components/layouts/Header.vue';

import * as Jquery from 'jquery';
import * as  Bootstrap from 'bootstrap-umi';
import 'bootstrap-umi/dist/css/bootstrap.css';
import * as Popper from 'popper.js';

Vue.use(Jquery);
Vue.use(Popper);
Vue.use(Bootstrap);
Vue.use(Vuex);

const app = new Vue({
    el: '#app',
    router: Router,
    store: Store,
    components: {
        'nav-bar': Header
    },
})