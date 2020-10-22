import axios from "axios";
import Vue from "vue";


let actions = {
    async fetchUserData(context) {
        axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem('access_token');
        console.log(axios.defaults.headers.common);
        let res = await axios.get('/api/auth/me');
        console.log('setting user info')
        context.commit('SET_USER', res.data)
    },
    logout(context) {
        axios.post('/api/auth/logout');
        context.commit('SET_USER', null)
    }

}
export default actions;
