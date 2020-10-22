/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');


import axios from 'axios';
import Vue from 'vue';
import {router} from './router';
import Navbar from "./widgets/Navbar";
import store from '@store/store.js';

axios.defaults.baseURL = process.env.MIX_API_URL;
axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem('access_token');

Vue.prototype.$user = store.state.user;



new Vue({
    el: '#app',
    router,
    store,
    components:{
        Navbar
    }
});
