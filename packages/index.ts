
import Dialog from './dialog/index.vue';
import Loading from './loading/Loading.vue';
import Picker from './picker/Picker.vue';
import Icon from './icon/Icon.vue';

import $toast from './toast/index';
import $loading from './loading/index';

import { locale } from '../locales/index'

const components = [
  Icon,
  Dialog,
  Picker,
  Loading
];

const install = function(Vue, opts: any = {}) {
  if (install['installed']) return;
  Vue.prototype.$lang = opts.locale || 'zh-CN';
  if (opts.lang) {
    locale(Vue.prototype.$lang, opts.lang)
  }
  components.map((component) => {
    Vue.component(component.name, component);
  });
  Vue.prototype.$toast = $toast;
  Vue.prototype.$loading = $loading;
};

if (typeof window !== 'undefined' && window['Vue']) {
    install(window['Vue']);
}
export default {
    install,
    locale,
    Icon,
    Dialog,
    Picker,
    Loading,
};