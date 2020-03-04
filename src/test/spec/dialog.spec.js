import $dialog from '@components/dialog'
import {later} from '../index'

import Vue from 'vue'

Vue.prototype.$LEGO = {
  theme: 'blue',
  lang: 'zh-CN'
}

const selector = '.r-vue-lego-dialog'

test('create a dialog', async () => {
  $dialog.info({
    content: 'this is a dialog'
  })
  await later()
  expect(document.body.querySelector(selector)).toMatchSnapshot()
  $dialog.remove()
})

test('create a render dialog', async () => {
  $dialog.confirm({
    title: 'render弹层',
    render: function (h) {
      return ('div', {
        class: ['render-wrap'],
        style: {
          height: '40px',
          maxHeight: '150px',
          overflow: 'scroll'
        }
      }, [
        h('strong', 'render内容展示：render会覆盖content参数传递的文本值')
      ], 'text')
    },
    onOk: () => {

    }
  })
  await later()
  expect(document.body.querySelector(selector)).toMatchSnapshot()
  $dialog.remove()
})

test('dialog type', () => {
  $dialog.success({
    content: 'this is a success dialog'
  })
  expect(document.querySelector(selector)).toMatchSnapshot()
  $dialog.remove()
})

test('title prop', ()=> {
  $dialog.info({
    title: 'this is a title',
    content: 'this is a content'
  })
  expect(document.querySelector(selector)).toMatchSnapshot()
  $dialog.remove()
})

test('show closeAble', ()=> {
  $dialog.info({
    closeAble: true,
    content: 'i will show closeAble'
  })
  expect(document.querySelector(selector)).toMatchSnapshot()
  $dialog.remove()
})

test('hide footer', ()=> {
  $dialog.info({
    footerHide: true,
    content: 'i will hide footer'
  })
  expect(document.querySelector(selector)).toMatchSnapshot()
  $dialog.remove()
})

test('hide mask', () => {
  $dialog.info({
    showMask: false,
    content: 'i will hide mask'
  })
  expect(document.querySelector(selector)).toMatchSnapshot()
  $dialog.remove()
})

test('show cancel', () => {
  $dialog.info({
    showCancel: true,
    content: 'i will show cancel'
  })
  expect(document.querySelector(selector)).toMatchSnapshot()
  $dialog.remove()
})

test('ok button click', ()=> {
  const onOk = jest.fn()
  $dialog.info({
    content: 'this is ok button click',
    onOk
  })
  document.querySelector('.vue-lego-btn-dialog:last-child').click()
  expect(onOk).toHaveBeenCalledTimes(1)
  $dialog.remove()
})

// /** 这个cancel只有在confirm模式下生效 */
test('cancel button click', ()=> {
  const onCancel = jest.fn()
  $dialog.confirm({
    content: 'this is cancel button click',
    showCancel: true,
    onCancel
  })
  document.querySelector('.vue-lego-btn-dialog:first-child').click()
  expect(onCancel).toHaveBeenCalledTimes(1)
  $dialog.remove()
})
