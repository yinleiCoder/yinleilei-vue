import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/postvideo',
    name: 'PostVideo',
    component: () => import('@/views/PostVideo.vue'),
  },
  {
    path: '/video/:videoID',
    name: 'showVideo',
    component: () => import('@/views/ShowVideo.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
