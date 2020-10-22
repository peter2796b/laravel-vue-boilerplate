import Vue from "vue";
import Vuex from "vuex";
import mutations from "../store/mutations";
import actions from "../store/actions";
import VuexPersist from "vuex-persist";
import createPersistedState from "vuex-persistedstate";
import {getField} from "vuex-map-fields";


Vue.use(Vuex);

const vuexLocal = new VuexPersist({
    storage: window.localStorage
});

const store = new Vuex.Store({
    modules: {},
    plugins: [vuexLocal.plugin, createPersistedState()],
    state: {
        user: {
            first_name: '',
            last_name: '',
            email: '',
            roles: []
        }
    },
    getters: {
        getField,
    },
    mutations,
    actions
});
export default store;
