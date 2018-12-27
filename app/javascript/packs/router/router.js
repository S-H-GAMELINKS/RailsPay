import Vue from 'vue/dist/vue.esm';
import VueRouter from 'vue-router';

import Index from '../components/web/Index.vue';
import About from '../components/web/About.vue';
import Contact from '../components/web/Contact.vue';
import Payment from '../components/web/Payment.vue';

import ProductsIndex from '../components/product/Index.vue';
import ProductsCreate from '../components/product/Create.vue';
import ProductsShow from '../components/product/Show.vue';
import ProductsEdit from '../components/product/Edit.vue';

import MyPages from '../components/user/MyPages.vue';
import MyPagesEdit from '../components/user/Edit.vue';
import UsersShow from '../components/user/Show.vue';
import SignUp from '../components/user/SignUp.vue';
import SignIn from '../components/user/SignIn.vue';

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: Index },
        { path: '/about', component: About },
        { path: '/contact', component: Contact },
        { path: '/payment', component: Payment },
        { path: '/products', component: ProductsIndex },
        { path: '/products/new', component: ProductsCreate },
        { path: '/products/:id', component: ProductsShow, name: 'products_show'},
        { path: '/products/:id/edit', component: ProductsEdit, name: 'products_edits'},
        { path: '/users/mypages', component: MyPages, name: 'mypages'},
        { path: '/users/mypages/edit', component: MyPagesEdit, name: 'mypages_edit'},
        { path: '/users/:id', component: UsersShow, name: 'users_show'},
        { path: '/sign_up', component: SignUp, name: 'user_sign_up'},
        { path: '/sign_in', component: SignIn, name: 'user_sign_in'},
    ]
})