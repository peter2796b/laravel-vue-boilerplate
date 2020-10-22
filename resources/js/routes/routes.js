//import components
import Login from '@components/Auth/Login.vue'
import Register from '@components/Auth/Register.vue'
import Home from '@components/Home'
import Dashboard from '@components/User/Dashboard.vue'

import {router} from "../router";

const access_token = localStorage.getItem("access_token");
const checkAccessTokenValidity = (to, from, next) => {
    if (!access_token) {
        window.location = "/login";
    } else {
        next();
    }
};

const redirectToDashboardIfLoggedIn = (to, from, next) => {
    if (access_token) {
        window.location = "/dashboard";
    } else {
        next();
    }
}

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: "/login",
        name: "login",
        component: Login,
        beforeEnter: redirectToDashboardIfLoggedIn,
    },
    {
        path: "/register",
        name: "register",
        component: Register,
        beforeEnter: redirectToDashboardIfLoggedIn,
    },
    {
        path: "/dashboard",
        name: "dashboard",
        component: Dashboard,
        beforeEnter: checkAccessTokenValidity,

    },
]

export {routes}
