import Vue, { PluginFunction } from "vue";

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
  interface Vue {
    $tips: (option: ToastOption) => void,
    $toast: (option: ToastOption) => void,
    $dialog: DialogClass,
  }
}


interface RuiVueLego extends PluginFunction<any> {}


declare const ruiVueLego: RuiVueLego;
export default ruiVueLego;
