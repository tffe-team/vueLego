import Vue, {CreateElement} from 'vue'
import Toast from './Toast.vue'

let toastInstance: any
let timer: any

const defaultOptions = () => {
  return {
    type: 'info',
    message: '',
    visible: true,
    duration: 3000,
    onClose: null
  }
}

const $toast = (options) => {
  options = {
    ...defaultOptions(),
    ...options
  }

  if (!toastInstance) {
    toastInstance = new Vue({
      props: options,
      render(h: CreateElement) {
        return h(Toast, {
          props: this.$props,
          slot: 'default',
          on: {
            'on-close': () => {
              if (typeof this.$props.onClose === 'function') {
                this.$props.onClose()
              }
            }
          }
        }, this.$props.message)
      }
    }).$mount()

    document.body.appendChild(toastInstance.$el)
  }

  Object.assign(toastInstance, options)
  clearTimeout(timer)

  if (options.duration && options.duration > 0) {
    timer = setTimeout(() => {
      toastInstance.visible = false
    }, options.duration)
  }
}

const createMethod = type => options => {
  $toast({
    type,
    ...options
  })
}

['info', 'success', 'error'].forEach(method => {
  $toast[method] = createMethod(method)
})

export default $toast
