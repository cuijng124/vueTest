import Vue from 'vue'
import Router from 'vue-router'
import Error from '../components/404.vue'
import Header from '@/components/header.vue'
import Hello from '@/components/Hello'
import Home from '@/pages/home/home.vue'
import Mine from '@/pages/mine/mine.vue'
import Product from '@/components/product.vue'
import Subject from '@/pages/subject/subject.vue'

Vue.use(Router)

export default new Router({
  // hashbang: true,
  // history: true,
  linkActiveClass: 'active',
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/header',
      name: 'Header',
      component: Header
    },
    {
      path: '/product',
      name: 'Product',
      component: Product
    },
    {
      path: '/subject',
      name: 'Subject',
      component: Subject
    },
    {
      path: '/Hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/404',
      name: 'Error',
      component: Error
    },
    {
      path: ' * ',
      redirect: '/404'
    }
  ]
})
