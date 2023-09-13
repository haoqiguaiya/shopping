import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login'
import Layout from '@/views/layout'
Vue.use(VueRouter)

const routes = []

const router = new VueRouter({
  routes: [
    { path: '/login', component: Login },
    { path: '/', component: Layout }
  ]
})

export default router
