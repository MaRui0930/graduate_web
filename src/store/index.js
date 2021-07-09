import Vue from 'vue';
import Vuex from 'vuex';
import {login as Login} from "@/api/login";
import {getToken} from "@/utils/cookie";

Vue.use(Vuex);

const state = {
    defaultIndex: sessionStorage.getItem('defaultIndex') || '/visible/general',
    token: getToken() || '',
};
const getters = {
    getIndex: state => state.defaultIndex,
    getUsername: state=> state.username
};
const actions = {
    login(content,form){
        return new Promise((resolve, reject) => {Login(form).then(res => {resolve(res)}).catch(error => reject(error));})
    }
};
const mutations = {
    SET_DEFAULT_INDEX(state, index) {
        state.defaultIndex = index;
        sessionStorage.setItem('defaultIndex', index)
    },
    SET_TOKEN(state, value) {
        state.token = value
    },
};

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})