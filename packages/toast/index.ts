import Vue from 'vue'
import Toast from './Toast.vue'
import { whichTransitionEvent } from '../utils/index'
import { ToastOption } from '../../typings/lego'
import { prototype } from 'events'
// import { setTimeout } from 'timers'

let toastInstance

const $toast = properties => {
  const _props = Object.assign({
    onRemove: function () {
      
    },
    onClose: function() {
      
    }
  }, properties)
  let timer = null
  const onClose =  _props.onClose
  const onRemove =  _props.onRemove
  delete _props.onClose
  delete _props.onRemove
  if(!properties.onRemove) {
    createToast(properties)
    return 
  }
  const Instance = new Vue({
    data: Object.assign(_props, {
      duration: 1000
    }),
    mounted() {
      this.close()
    },
    methods: {
      close() {
        timer = setTimeout(() => {
          this.$children[0].visible = false
          this.remove()
          onClose()
        }, this.duration)
       
      },
      remove() {
        if (this.$el) {
          document.body.removeChild(this.$el)
        }
        clearTimeout(timer)
        onRemove()
      }
    },
    render (h: any) {
      return h(Toast, {
        props: Object.assign({}, _props),
        domProps: {
          value: this.visible
        },
        on: {
          'input': (status) => {
            this.visible = status
          }
        }
      })
    }
  }).$mount()
  document.body.appendChild(Instance.$el)
  const toast = Instance.$children[0]
  return {
    show() {
      if(toast.visible) {
        this.remove()
      } else {
        toast.visible = true
      }
      toast.visible = true
    },
    remove() {
      toast.visible = false
      toast.$parent.remove()
    },
    component: toast
  }
}


function getToastInstance(options) {
  toastInstance = toastInstance ||  $toast(options)
  return toastInstance
}
function createToast(options) {
  options.onRemove = function() {
    toastInstance = null
  }
  getToastInstance(options)
  toastInstance.show()
}
$toast.success = (option: ToastOption) => {
  option.iconName = 'success'
  createToast(option)
}
$toast.fail = (option: ToastOption) => {
  option.iconName = 'fail'
  createToast(option)
}
export default $toast
// export default  ToastConstructor

// let timer: any = null
// let toastInstance : any= null
// const ToastConstructor = Vue.extend(Toast)
// const transitionEvt = whichTransitionEvent()
// ToastConstructor.prototype.close = function(onClose?:Function) {
//   this.visible = false
//   toastInstance = null
//   this.$el.addEventListener(transitionEvt, this.destroyed)
//   if(onClose) {
//     Vue.nextTick(function() {
//       onClose()
//     })
//   }
// }

// ToastConstructor.prototype.destroyed = function(event) {
//   document.body.removeChild(event.target)
// }

// /** 暂不支持同时显示多个toast */
// const getInstance  = (option: ToastOption) => {
//   if(!toastInstance) {
//     toastInstance = new ToastConstructor({
//       propsData: {
//         msg: option.msg,
//         visible: true,
//         type: option.type,
//         duration: option.duration,
//         isSuccess: option.isSuccess
//       },
//       el: document.createElement('div')
//     })
//   } else {
//     timer = null
//   }
//   return toastInstance
// }

// const createToast = (option: ToastOption) => {
//   const instance: any =  getInstance(option)
//   clearTimeout(timer)
//   document.body.appendChild(instance.$el);
//   Vue.nextTick(function() {
//     instance.visible = true
//     instance.$el.removeEventListener(transitionEvt, instance.destroyed)
//     timer = setTimeout(() => {
//       instance.close(option.onClose)
//     }, option.duration ? option.duration : 3000)
//   })
// }