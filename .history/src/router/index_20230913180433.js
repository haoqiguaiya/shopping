import Vue from 'vue'
import VueRouter from 'vue-router'

import home from '@/views/layout/home'
import category from '@/views/layout/category'
import cart from '@/views/layout/cart'
import user from '@/views/layout/user'
import store from '@/store'
const login = () => import('@/views/login')
const layout = () => import('@/views/layout')
const myOrder = () => import('@/views/myOrder')
const pay = () => import('@/views/pay')
const proDetail = () => import('@/views/proDetail')
const search = () => import('@/views/search')
const searchList = () => import('@/views/search/list')

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
    { path: '/proDetail:id', component: proDetail },
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
