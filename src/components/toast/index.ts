import Vue, {CreateElement} from 'vue'
import Toast from './Toast.vue'

let toastInstance: any
let timer: any

const $toast = (options) => {
  const globalConfig =  Vue.prototype.$LEGO && Vue.prototype.$LEGO.toast || {}
  options = {
    type: 'info',
    message: '',
    visible: true,
    duration: globalConfig.duration || 3000,
    onClose: null,
    ...options
  }

  // 如果存在 toast 实例再次调用则直接销毁
  if (toastInstance) {
    removeInstance()
  }

  if (!toastInstance) {
    toastInstance = new Vue({
      props: options,
      render(h: CreateElement) {
        return h(Toast, {
          props: this.$props,
          slot: 'default',
        }, this.$props.message)
      }
    }).$mount()

    document.body.appendChild(toastInstance.$el)
  }

  Object.assign(toastInstance, options)
  clearTimeout(timer)

  if (options.duration && options.duration > 0) {
    timer = setTimeout(() => {
      removeInstance()
    }, options.duration)
  }

  return toastInstance
}

const removeInstance = () => {
  toastInstance.visible = false
  if (typeof toastInstance.onClose === 'function') {
    toastInstance.onClose()
  }
  toastInstance.$destroy()
  toastInstance.$el.remove()
  toastInstance = null
}

$toast.info = (options) => {
  $toast({
    type: 'info',
    ...options
  })
}

$toast.success = (options) => {
  $toast({
    type: 'success',
    ...options
  })
}

$toast.error = (options) => {
  $toast({
    type: 'error',
    ...options
  })
}

export default $toast
