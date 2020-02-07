import $toast from '../index'
import {later} from '../../../test'

const selector = '.r-vue-lego-toast'

test('create a toast', async () => {
  const toast = $toast({
    message: 'create a toast'
  })
  await later()
  expect(toast.$el.outerHTML).toMatchSnapshot()
})

test('type prop', async () => {
  const toast = $toast({
    type: 'success',
    message: 'create a success toast'
  })

  await later()
  expect(toast.$el.outerHTML).toMatchSnapshot()
})

test('duration prop', async () => {
  const toast = $toast({
    message: 'duration prop',
    duration: 10,
  })

  await later()
  expect(document.body.querySelector(selector)).toBeTruthy()
  await later(10)
  expect(document.body.querySelector(selector)).toBeFalsy()
})

test('onClose prop', async () => {
  const onClose = jest.fn()

  $toast({
    message: 'onClose prop',
    duration: 10,
    onClose,
  })

  await later(10)
  expect(onClose).toHaveBeenCalledTimes(1)
})
