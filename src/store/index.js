import Vue from 'vue';
import Vuex from 'vuex';
import {getUsername} from "@/utils/cookie";
import {login as Login} from "@/api/login";

Vue.use(Vuex);

const state = {
    defaultIndex: sessionStorage.getItem('defaultIndex') || '/visible/general',
    // token: getToken() || '',
    username: getUsername() || '',
};
const getters = {
    getIndex: state => state.defaultIndex,
    getUsername: state=> state.username
};
const actions = {
    login(content,reqData){
        return new Promise((resolve, reject) => {
            Login(reqData).then(res=>{
                resolve(res)
            },(err)=>reject(err))
        })
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
    SET_USERNAME(state, value) {
        state.username = value
    },
};

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})