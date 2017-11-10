import Vue from 'vue'
import Router from 'vue-router'
import vueResource from 'vue-resource'
import Scholars from '@/components/index'
import Profile from '@/components/profile'
import Login from '@/components/login'

Vue.use(vueResource)
Vue.use(Router)


export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
     // name: 'scholars',
      component: Scholars
    },
    {
      path: '/profile',
    //  name: 'profile',
      component: Profile
    },
    {
      path: '/login',
     // name: 'login',
      component: Login
    }
  ]
})
