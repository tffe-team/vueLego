
import './styles/index.scss'

import { InstallOption } from '../typings/vue-lego'

import Picker from './components/picker/index'
import Button from './components/button/button'

import $dialog from './components/dialog/'
import $tips from './components/tips/'
import $loading from './components/loading/'
import $toast from './components/toast/'
import { locale } from './locales/index'



const components = [
  Button,
  Picker
];

const defaultOpts: InstallOption = {
  theme: 'blue',
  lang: 'zh-CN'
}

const install = function(Vue, options = defaultOpts) {
  if (install['installed']) return
  Vue.prototype.$lang = options.lang || defaultOpts.lang
  if (options.locale) {
    locale(Vue.prototype.$lang, options.locale)
  }
  components.map((component) => {
    Vue.component(component.name, component);
  });
  Vue.prototype.$tips = $tips
  Vue.prototype.$loading = $loading
  Vue.prototype.$dialog = $dialog
  Vue.prototype.$toast = $toast
  Vue.prototype.$LEGO = {
    theme: options.theme ? options.theme : defaultOpts.theme,
    toast: {
      duration: options.toast && options.toast.duration ? options.toast.duration : ''
    }
  }
};

if (typeof window !== 'undefined' && window['Vue']) {
    install(window['Vue']);
}
export default {
  install,
  Picker,
  Button
};
