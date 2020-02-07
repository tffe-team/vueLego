import $toast from '../index'
import {later} from '../../../test'

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
    duration: 2000,
  })
  const className = `.${toast.$el.classList[0]}`

  await later()
  expect(document.body.querySelector(className)).toBeTruthy()
  await later(2000)
  expect(document.body.querySelector(className)).toBeFalsy()
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
