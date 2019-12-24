import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const Index = () => import('@/components/Index')
const Tips = () => import('@/components/Tips')
const Dialog = () => import('@/components/Dialog')
const Buttons = () => import('@/components/Buttons')
const Toast = () => import('@/components/Toast')
const Loading = () => import('@/components/Loading')
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Index,
      name: 'index'
    },
    {
      path: '/buttons',
      component: Buttons,
      name: 'buttons'
    },
    {
      path: '/tips',
      component: Tips,
      name: 'tips'
    },
    {
      path: '/dialog',
      component: Dialog,
      name: 'dialog'
    },
    {
      path: '/toast',
      component: Toast,
      name: 'toast'
    },
    {
      path: '/loading',
      component: Loading,
      name: 'loading'
    }
  ]
})
