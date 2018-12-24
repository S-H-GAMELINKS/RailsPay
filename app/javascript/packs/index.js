import Vue from 'vue/dist/vue.esm';

import * as Jquery from 'jquery';
import * as  Bootstrap from 'bootstrap-umi';
import 'bootstrap-umi/dist/css/bootstrap.css';

Vue.use(Jquery);
Vue.use(Bootstrap);

const app = new Vue({
    el: '#app',
})