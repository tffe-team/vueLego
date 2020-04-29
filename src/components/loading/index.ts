
import Vue from 'vue'
import Loading from './Loading.vue'
import { LoadingOption, LoadingClass } from '../../../typings/vue-lego'

const defaultProps: LoadingOption = {
  id: '$loading-common-el',
  zIndex: 10000,
  visible: false,
  tips: ''
}


let loadingInstance: any = null
const LoadingConstructor = Vue.extend(Loading)


LoadingConstructor.prototype.show = function() {
  if(this.visible) return
  this.visible = true
  Vue.nextTick(() => {
    this.$el.id = defaultProps.id
    this.$el.style.zIndex = defaultProps.zIndex
    document.body.appendChild(this.$el)
  })
}

LoadingConstructor.prototype.hide = function() {
  if(!this.visible) return
  this.instance = null
  this.visible = false
  const loadingEl: any = document.getElementById(defaultProps.id)
  document.body.removeChild(loadingEl)
}

const getInstance  = () => {
  if(!loadingInstance) {
    loadingInstance = new LoadingConstructor({
      propsData: {
        msg: defaultProps.tips,
        visible: defaultProps.visible
      },
      el: document.createElement('div')
    })
  }
  return loadingInstance
}

const $loading:LoadingClass = getInstance()

export default $loading
