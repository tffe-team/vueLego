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
  const dialog = $dialog.info({
    content: 'this is a dialog'
  })
  await later()
  expect(document.querySelector(selector)).toMatchSnapshot()
})
