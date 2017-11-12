import Vue from 'vue'
import Router from 'vue-router'
import vueResource from 'vue-resource'
import Scholars from '@/components/Index'
import Profile from '@/components/Profile'
import Login from '@/components/login'
import Add from '@/components/Add'

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
      path: '/profile/:id',
    //  name: 'profile',
      component: Profile
    },
    {
      path: '/add',
      component: Add
    },
    {
      path: '/login',
     // name: 'login',
      component: Login
    }
  ]
})
