import 'babel-polyfill'
import Vue from 'vue'
// import FastClick from 'fastclick'
import App from '@/App.vue'
import router from './router'
import lego from '../src/'

// import lego from '../dist/rui-vue-lego.min.js'
import enUS from '../src/locales/lang/en-US'
import zhCN from '../src/locales/lang/zh-CN'

Vue.use(lego, {
  lang: 'zh-CN',
  locale: zhCN,
  theme: 'green'
})
new Vue({
  router,
  render: (h: any) => h(App),
}).$mount('#app')
