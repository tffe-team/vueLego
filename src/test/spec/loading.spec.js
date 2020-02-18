import $loading from '@components/loading/index'
import {later} from '../index'

const selector = '.r-vue-lego-loading'

test('create a loading', async () => {
  $loading.show()
  await later()
  expect($loading.$el.outerHTML).toMatchSnapshot()
})

test('hide loading', async ()=> {
  $loading.show()
  expect(document.body.querySelector(selector)).toBeTruthy()
  $loading.hide()
  expect(document.body.querySelector(selector)).toBeFalsy()
})
