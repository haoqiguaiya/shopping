import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '@/views/login'
import layout from '@/views/layout'
import myOrder from '@/views/myOrder'
import pay from '@/views/pay'
import prodetail from '@/views/prodetail/index.vue'
import search from '@/views/search'
import searchList from '@/views/search/list'

import home from '@/views/layout/home'
import category from '@/views/layout/category'
import cart from '@/views/layout/cart'
import user from '@/views/layout/user'
import store from '@/store'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [

    { path: '/login', component: login },
    {
      path: '/',
      component: layout,
      redirect: '/home',
      children: [
        { path: '/home', component: home },
        { path: '/category', component: category },
        { path: '/cart', component: cart },
        { path: '/user', component: user }

      ]
    },
    { path: '/myOrder', component: myOrder },
    { path: '/pay', component: pay },
    { path: '/prodetail:id?', component: prodetail },
    { path: '/search', component: search },
    { path: '/searchList', component: searchList }
  ]
})
const authUrls = ['/pay', 'myOrder']
router.beforeEach((to, from, next) => {
  const token = store.getters.token
  if (!authUrls.includes(to.path)) {
    next()
  } else if (token) {
    next()
  } else {
    next('/login')
  }
})

export default router
