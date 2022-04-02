import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'home',
    component:  () => import(/* webpackChunkName: "about" */ '../views/HomeView.vue')
  },
  {
    path: '/pastelero',
    name: 'pastelero',
    component: () => import(/* webpackChunkName: "about" */ '../views/PasteCom.vue')
  },
  {
    path: '/acercade',
    name: 'acercade',
    component: () => import(/* webpackChunkName: "about" */ '../views/AcercaCom.vue')
  },
  {
    path: '/pedido',
    name: 'pedido',
    component: () => import(/* webpackChunkName: "about" */ '../views/PedidoCom.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
