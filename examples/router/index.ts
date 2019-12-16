import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const Index = () => import('@/components/Index.vue')
const Tips = () => import('@/components/Tips.vue')
const Dialog = () => import('@/components/Dialog.vue')
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Index,
      name: 'index'
    },
    {
      path: '/tips',
      component: Tips,
      name: 'tips'
    },
    {
      path: '/dialog',
      component: Dialog,
      name: 'Dialog'
    }
  ]
})
