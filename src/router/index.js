import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/create',
    name: 'create',
    component: () => import(/* webpackChunkName: "about" */ '../views/CreateView.vue')
  },
  {
    path: '/modify/:id',
    name: 'modify',
    component: () => import(/* webpackChunkName: "about" */ '../views/ModifyView.vue'),
    props:true
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: () => import(/* webpackChunkName: "about" */ '../views/DetailView.vue'),
    props:true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
