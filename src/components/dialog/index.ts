import $dialog from './confirm'
let dialogInstance
function getDialogInstance(options) {
  dialogInstance = dialogInstance || $dialog.newInstance(options)
  return dialogInstance
}
function confirm(options) {
  options.onRemove = function() {
    dialogInstance = null
  }
  getDialogInstance(options)
  dialogInstance.show()
}
$dialog.info = ((props = {}) => {
  props.iconName = 'info'
  props.showCancel = false
  return confirm(props)
})
$dialog.fail = ((props = {}) => {
  props.iconName = 'error'
  props.showCancel = false
  return confirm(props)
})
$dialog.success = ((props = {}) => {
  props.iconName = 'success'
  props.showCancel = false
  return confirm(props)
})
$dialog.confirm = ((props = {}) => {
  props.showCancel = true
  return confirm(props)
})
$dialog.remove = (() => {
  if(!dialogInstance) {
    return;
  }
  const instance = getDialogInstance({})
  instance.remove()
})
export default $dialog