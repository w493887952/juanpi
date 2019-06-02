import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/index'
import Classify from '@/pages/classify/index'
import Keywords from '@/pages/keywords/index'
import User from '@/pages/user/index'
import Cart from '@/pages/cart/cart'
import Login from '@/pages/login/Login'
import Special from '@/pages/special/special'
import Article from '@/pages/article/article'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },{
      path: '/classify',
      name: 'classify',
      component: Classify,
    },{
      path: '/keywords',
      name: 'keywords',
      component: Keywords
    },{
      path: '/user',
      name: 'user',
      component: User
    },{
      path: '/cart',
      name: 'cart',
      component: Cart,
      meta: {
        isAuthor: true
      },
    },{
      path: '/login',
      name: 'login',
      component:Login
    },{
      path: '/special',
      name: 'special',
      component:Special
    },{
      path: '/article',
      name: 'article',
      component:Article
    }
  ],
  linkActiveClass: 'mui-active'
})
