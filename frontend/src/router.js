import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    name: 'main',
    component: () => import('@/modules/main/Main')
  }, {
    path: '/login',
    name: 'login',
    component: () => import('@/modules/login/Login')
  }, {
    path: '/logout',
    name: 'logout',
    component: () => import('@/modules/logout/Logout')
  }, {
    path: '/register',
    name: 'register',
    component: () => import('@/modules/register/Register')
  }, {
    path: '/verifyUser',
    name: 'verifyUser',
    component: () => import('@/modules/verifyUser/VerifyUser')
  }]
})
