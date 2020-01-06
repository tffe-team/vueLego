import Vue, { PluginFunction } from "vue";
import { VueConfiguration } from "vue/types/vue";

export interface PlainObject {
  [key: string]: any
}

export interface InstallOption {
  theme?: 'blue' | 'green',
  lang?: 'zh-CN' | 'en-US',
  locale?: PlainObject,
  toast?: {
    duration?: number
  }
}

export interface LoadingOption {
  /** 注册HMTL ID */
  id: string,
  /** 默认10000 覆盖rui-masket的9999 */
  zIndex: number,
  /** 显示隐藏控制 */
  visible: boolean,
  /** 提示文案 */
  tips: string
}

export interface ToastOption {
  /** 显示内容 */
  msg:string,
  /** 持续显示时间 */
  duration?: number,
  /** 是否成功 */
  isSuccess?: Boolean,
  iconName?: String,
  /** 关闭时回调 */
  onClose?: Function
}

export interface DialogClass {
  info: Function,
  fail: Function,
  error: Function,
  success : Function,
  confirm: Function,
  remove: Function
}


export interface DialogOption {
  title?: string,
  okText?: string,
  cancelText? : string,
  onOk?: Function,
  onClose?: Function
}

declare module "vue/types/vue" {
  interface VueConstructor {
    locale: Function
  }
  interface Vue {
    $lang: string,
    $tips: (option: ToastOption) => void,
    $toast: (option: ToastOption) => void,
    $dialog: DialogClass,
  }
}


interface RuiVueLego extends PluginFunction<any> {}


declare const ruiVueLego: RuiVueLego;
export default ruiVueLego;
