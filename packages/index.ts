
import Dialog from './dialog/index'
import Loading from './loading/Loading.vue'
import Picker from './picker/Picker.vue'
import Icon from './icon/Icon.vue'
import Button from './button/Button.vue'
import { InstallOption } from '../typings/lego'

import $tips from './tips/index'
import $loading from './loading/index'
import $toast from './toast'

const components = [
  Icon,
  Button,
  Dialog,
  Picker,
  Loading
];

const install = function(Vue, options: InstallOption = {}) {
  if (install['installed']) return
  components.map((component) => {
    Vue.component(component.name, component);
  });
  Vue.prototype.$tips = $tips
  Vue.prototype.$loading = $loading
  Vue.prototype.$dialog = Dialog
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
  Icon,
  Dialog,
  Picker,
  Button,
  Loading
};
