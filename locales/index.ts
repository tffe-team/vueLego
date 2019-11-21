import Vue from "vue";
import zhCN from "./lang/zh-CN";

let defaultMessages = {};

let merged = false;

const vueI18nHandler = function() {
  const vuei18n = Object.getPrototypeOf(this || Vue).$t;
  if (typeof vuei18n === "function" && !!Vue.locale) {
    if (!merged) {
      merged = true;
      Vue.locale(
        Vue.prototype.$lang,
        Object.assign(Vue.prototype.$lang === "zh-CN" ? zhCN : {}, Vue.locale(Vue.prototype.$lang) || {}, defaultMessages)
      );
    }
    return vuei18n.apply(this, arguments);
  }
};

function i18n(keysStr) {
  let value = vueI18nHandler.apply(this, arguments);
  if (value !== null && value !== undefined) return value;
  let message = Object.assign({}, Vue.prototype.$lang === "zh-CN" ? zhCN : {}, defaultMessages);
  let keys = (keysStr && keysStr.split(".")) || [];
  let result = null;
  if (keys.length) {
    for (let i = 0; i < keys.length; i++) {
      let key = keys[i];
      if (key && message[key]) {
        message = message[key];
        result = message;
      } else {
        result = null;
        break;
      }
    }
  }
  return result
}

function locale(lang, messages) {
  if (typeof lang === "object") {
    messages = lang;
    lang = Vue.prototype.$lang;
  }
  Vue.prototype.$lang = lang;
  Object.assign(defaultMessages, messages);
}

export { i18n, locale };
