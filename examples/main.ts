import 'babel-polyfill'
import Vue from 'vue'
// import FastClick from 'fastclick'
import App from '@/App.vue'
import router from './router'
import lego from '../packages/'

// import lego from '../dist/rui-vue-lego.min.js'
Vue.use(lego)
new Vue({
  router,
  render: (h: any) => h(App),
}).$mount('#app')
