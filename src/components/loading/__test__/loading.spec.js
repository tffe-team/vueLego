import $loading from '../index'
import {later} from '../../../test'

test('create a loading', async () => {
  $loading.show()
  await later()
  expect($loading.$el.outerHTML).toMatchSnapshot()
})
