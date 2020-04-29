import Vue from 'vue'
import Tips from './Tips.vue'
import { TipsOption } from '../../../typings/vue-lego'

let tipstInstance

const $tips = properties => {
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
    createTips(properties)
    return 
  }
  const Instance = new Vue({
    data: Object.assign({
      duration: 3000
    }, _props),
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
      return h(Tips, {
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
  const tips = Instance.$children[0]
  return {
    show() {
      if(tips.visible) {
        this.remove()
      } else {
        tips.visible = true
      }
      tips.visible = true
    },
    remove() {
      tips.visible = false
      tips.$parent.remove()
    },
    component: tips
  }
}

function getTipsInstance(options) {
  tipstInstance = tipstInstance ||  $tips(options)
  return tipstInstance
}
function createTips(options) {
  options.onRemove = function() {
    tipstInstance = null
  }
  getTipsInstance(options)
  tipstInstance.show()
}
$tips.info = (option: TipsOption) => {
  createTips(option)
}
$tips.success = (option: TipsOption) => {
  option.iconName = 'success'
  createTips(option)
}
$tips.error = (option: TipsOption) => {
  option.iconName = 'fail'
  createTips(option)
}
export default $tips