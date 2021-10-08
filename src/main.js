import Vue from 'vue'
import App from './App.vue'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'

import "./router/permit"
import {getRequest, postRequest} from "@/utils/request";

Vue.config.productionTip = false
Vue.use(ElementUI);

Vue.prototype.$getRequest = getRequest
Vue.prototype.$postRequest = postRequest

new Vue({
    render: h => h(App),
    store,
    router
}).$mount('#app')
