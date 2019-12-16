import Vue from 'vue'
import Dialog from './dialog.vue'
const DialogComponent: any = Dialog
DialogComponent.newInstance = properties => {
  const _props = Object.assign( {
    onOk: function () {
      
    },
    onCancel: function () {
      
    },
    onRemove: function () {
      
    }
  }, properties)
  const onOk = _props.onOk
  const onCancel = _props.onCancel 
  const onRemove = _props.onRemove 

  delete _props.onOk
  delete _props.onCancel
  delete _props.onRemove
  const Instance = new Vue({
    data: Object.assign({
      title: '',
      content: '',
      okText: '确认',
      cancelText: '取消',
      iconName:'',
      closeable: false,
      showCancel: false,
      footerHide: false
    }, _props),
    methods: {
      cancel () {
        this.$children[0].visible = false;
        onCancel();
        this.remove();
      } ,
      ok () {
        this.$children[0].visible = true;
        onOk()
        this.remove();
      },
      remove () {
        this.destroy();
      },
      destroy () {
        if( this.$el ){
          document.body.removeChild(this.$el);
        }
        onRemove();
      }
    },
    render (h: any){
      return h(Dialog, {
        props: Object.assign({}, _props, {
        }),
        domProps: {
          value: this.visible
        },
        on: {
          'input': (status) => {
            this.visible = status
          },
          'on-cancel': this.cancel,
          'on-ok': this.ok
        }
      })
    },
  });
  const component = Instance.$mount();
  document.body.appendChild(component.$el);
  const dialog = Instance.$children[0];
  return {
    show() {
      dialog.visible = true
    },
    remove() {
      dialog.visible = false
      dialog.$parent.remove();
    },
    component: dialog
  }
}
export default DialogComponent;