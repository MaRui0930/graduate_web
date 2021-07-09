import router from './index'
import {getToken, removeToken} from "@/utils/cookie";
import store from '../store/index'

router.beforeEach((to, from, next) => {
    if(getToken()){
        if (to.path === '/login'){
            removeToken()
            store.commit('SET_TOKEN','');
            next();
        }else next();
    }else{
        if(to.path==='/login') next();
        else next('/login');
    }
})