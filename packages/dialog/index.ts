import Dialog from './confirm'
let dialogInstance
function getDialogInstance(options) {
  dialogInstance = dialogInstance || Dialog.newInstance(options)
  return dialogInstance
}
function confirm(options) {
  options.onRemove = function() {
    dialogInstance = null
  }
  getDialogInstance(options)
  dialogInstance.show()
}
Dialog.info = ((props = {}) => {
  props.iconName = 'info'
  props.showCancel = false
  return confirm(props)
})
Dialog.error = ((props = {}) => {
  props.iconName = 'error'
  props.showCancel = false
  return confirm(props)
})
Dialog.success = ((props = {}) => {
  props.iconName = 'success'
  props.showCancel = false
  return confirm(props)
})
Dialog.confirm = ((props = {}) => {
  props.showCancel = true
  return confirm(props)
})
Dialog.remove = (() => {
  if(!dialogInstance) {
    return;
  }
  const instance = getDialogInstance({})
  instance.remove()
})
export default Dialog