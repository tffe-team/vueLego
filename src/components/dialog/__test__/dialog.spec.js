import {mount, config} from '@vue/test-utils'
import $dialog from '../index'
import {later} from '../../../test'

config.mocks['$LEGO'] = {
  theme: {
    theme: 'blue',
    lang: 'zh-CN'
  }
}

const selector = '.r-vue-lego-dialog'

test('create a dialog', async () => {
  $dialog.info({
    content: 'this is a dialog'
  })
  await later()
  expect(document.querySelector(selector)).toMatchSnapshot()
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
  expect(document.querySelector('.title')).toMatchSnapshot()
  $dialog.remove()
})

test('button click', async ()=> {
  const dialog = $dialog.info({
    title: 'this is a title',
    content: 'this is a content'
  })
  const wrapper = mount($dialog)
  wrapper.find('vue-lego-btn-dialog').trigger('click')
  expect(wrapper.emitted().click).toBeTruthy()
})
