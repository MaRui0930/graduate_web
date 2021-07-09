import Vue from 'vue';
import VueRouter from "vue-router";
import Layout from "@/views/layout"

Vue.use(VueRouter);

//解决重复点击报错
const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location) {
    return originalReplace.call(this, location).catch(err => err);
};

export default new VueRouter({
    routes: [
        {
            path: '/visible',
            name: 'Visible',
            meta: {name: '可视化', icon: 'gateway'},
            component: Layout,
            children: [
                {
                    path: '/visible/general',
                    meta: {name: '概览'},
                    component: () => import("../pages/visible/General")
                }
            ],

        },
        {
            path: '/lift',
            name: 'Lift',
            meta: {name: '电梯', icon: 'gateway'},
            component: Layout,
            children: [
                {
                    path: '/lift/lift_manage',
                    meta: {name: '电梯管理'},
                    component: () => import("../pages/lift/LiftManage")
                }
            ]
        },
        {
            path: '/workorder',
            name: 'Gateway',
            meta: {name: '工单', icon: 'gateway'},
            component: Layout,
            children: [
                {
                    path: '/workorder/order_manage',
                    meta: {name: '工单管理'},
                    component: () => import("../pages/workorder/OrderManage")
                }
            ]
        },
        //登陆路由
        {
            path: '/login',
            hidden: true,
            meta: {
                name: '登陆'
            },
            component: ()=> import('../pages/Login')
        },
        //默认路由重定向到登陆
        {
            path: '/',
            hidden: true,
            redirect: '/login',
            meta: {
                name: '登陆'
            }
        }
    ],
})
