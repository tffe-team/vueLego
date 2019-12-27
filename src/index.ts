
import './styles/index.scss'

import { InstallOption } from '../typings/vue-lego'

import Picker from './components/picker/index'
import Button from './components/button/button'
import Popup from './components/Popup/Popup'

import $dialog from './components/dialog/'
import $tips from './components/tips/'
import $loading from './components/loading/'
import $toast from './components/toast/'



const components = [
  Button,
  Picker,
  Popup
];

const install = function(Vue, options: InstallOption = {}) {
  if (install['installed']) return
  components.map((component) => {
    Vue.component(component.name, component);
  });
  Vue.prototype.$tips = $tips
  Vue.prototype.$loading = $loading
  Vue.prototype.$dialog = $dialog
  Vue.prototype.$toast = $toast
  Vue.prototype.$LEGO = {
    theme: options.theme ? options.theme : options.theme,
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
  Button,
  Popup
};
