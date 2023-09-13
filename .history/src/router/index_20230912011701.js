import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '@/views/login'
import layout from '@/views/layout'
import myOrder from '@/views/myOrder'
import pay from '@/views/pay'
import proDetail from '@/views/proDetail'
import search from '@/views/search'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/login', component: login },
    { path: '/', component: layout },
    { path: '/myOrder', component: myOrder },
    { path: '/pay', component: pay },
    { path: '/proDetail:id?', component: proDetail },
    { path: '/search', component: search }
  ]
})

export default router
