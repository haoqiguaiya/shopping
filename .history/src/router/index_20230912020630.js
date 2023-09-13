import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '@/views/login'
import layout from '@/views/layout'
import myOrder from '@/views/myOrder'
import pay from '@/views/pay'
import proDetail from '@/views/proDetail'
import search from '@/views/search'
import searchList from '@/views/search/list'

import home from '@/views/layout/home'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/login', component: login },
    {
      path: '/',
      component: layout,
      children: [
        { path: '/home', component: home },
        { path: '/home', component: home },
        { path: '/home', component: home },
        { path: '/home', component: home }

      ]
    },
    { path: '/myOrder', component: myOrder },
    { path: '/pay', component: pay },
    { path: '/proDetail:id?', component: proDetail },
    { path: '/search', component: search },
    { path: '/searchList', component: searchList }
  ]
})

export default router
