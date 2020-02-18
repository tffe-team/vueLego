import $tips from '@components/tips'
import {later} from '../index'

const selector = '.r-vue-lego-tips'

test('create a tips', async () => {
  $tips.info({
    message: 'create a tips',
  })

  await later()
  expect(document.body.querySelector(selector)).toMatchSnapshot()
  await later(3000)
})

test('tips type', async() => {
  $tips.success({
    message: 'a success tips',
  })

  await later()
  expect(document.body.querySelector(selector)).toMatchSnapshot()
  await later(3000)
})

test('auto close', async () => {
  $tips.info({
    message: 'auto close',
  })

  await later()
  expect(document.body.querySelector(selector)).toBeTruthy()
  await later(3000)
  expect(document.body.querySelector(selector)).toBeFalsy()
})
