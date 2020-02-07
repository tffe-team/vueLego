import {mount, config} from '@vue/test-utils'
import $dialog from '../index'
import {later} from '../../../test'

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

test('dialog type', async () => {
  $dialog.success({
    content: 'this is a success dialog'
  })
  await later()
  expect(document.querySelector(selector)).toMatchSnapshot()
  $dialog.remove()
})

test('title prop', async ()=> {
  $dialog.info({
    title: 'this is a title',
    content: 'this is a content'
  })
  await later()
  expect(document.querySelector(selector)).toMatchSnapshot()
  $dialog.remove()
})

test('show closeAble', async ()=> {
  $dialog.info({
    closeAble: true,
    content: 'i will show closeAble'
  })
  await later()
  expect(document.querySelector(selector)).toMatchSnapshot()
  $dialog.remove()
})

test('hide footer', async ()=> {
  $dialog.info({
    footerHide: true,
    content: 'i will hide footer'
  })
  await later()
  expect(document.querySelector(selector)).toMatchSnapshot()
  $dialog.remove()
})

test('hide mask', async () => {
  $dialog.info({
    showMask: false,
    content: 'i will hide mask'
  })
  await later()
  expect(document.querySelector(selector)).toMatchSnapshot()
  $dialog.remove()
})

test('show cancel', async () => {
  $dialog.info({
    showCancel: true,
    content: 'i will show cancel'
  })
  await later()
  expect(document.querySelector(selector)).toMatchSnapshot()
  $dialog.remove()
})

test('ok button click', async ()=> {
  const onOk = jest.fn()
  $dialog.info({
    content: 'this is ok button click',
    onOk
  })
  document.querySelector('.vue-lego-btn-dialog:last-child').click()
  expect(onOk).toHaveBeenCalledTimes(1)
  $dialog.remove()
})

/** 这个cancel只有在confirm模式下生效 */
test('cancel button click', async ()=> {
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

/** 这个close方法有问题 */
test('close button click', async ()=> {
  const onClose = jest.fn()
  $dialog.info({
    closeAble: true,
    content: 'this is close button click',
    onClose
  })
  document.querySelector('.close-btn').click()
  expect(onClose).toHaveBeenCalledTimes(1)
  $dialog.remove()
})
