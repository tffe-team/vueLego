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
  duration?: number,
  message: string,  
  onClose?: Function
}

export interface ToastClass {
  info: (options: ToastOption) => void,
  error: (options: ToastOption) => void,
  success : (options: ToastOption) => void,
}

export interface TipsOption {
  message: string,
  iconName?: string,
  onClose?: Function,
  onRemove?: Function,
}

export interface TipsClass {
  info: (options: TipsOption) => void,
  error: (options: TipsOption) => void,
  success : (options: TipsOption) => void,
}

export interface DialogOption {
  title?: string,
  content?: string,
  okText?: string,
  cancelText? : string,
  iconName?: string,
  closeAble?: boolean,
  showCancel?: boolean,
  showMask?: boolean,
  footerHide?: boolean,
  onOk?: Function,
  onCancel?: Function,
  onClose?: Function,
  render?: Function,
}

export interface DialogClass {
  info: (options: DialogOption) => void,
  fail: (options: DialogOption) => void,
  error: (options: DialogOption) => void,
  success : (options: DialogOption) => void,
  confirm: (options: DialogOption) => void,
  remove: (options: DialogOption) => void
}

declare module "vue/types/vue" {
  interface VueConstructor {
    locale: Function
  }
  interface Vue {
    $lang: string,
    $tips: TipsClass,
    $toast: ToastClass,
    $dialog: DialogClass,
  }
}


interface RuiVueLego extends PluginFunction<any> {}


declare const ruiVueLego: RuiVueLego;
export default ruiVueLego;
