import {config} from '@vue/test-utils'
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
