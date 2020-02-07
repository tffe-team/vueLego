import $loading from '../index'
import {later} from '../../../test'

test('create a loading', async () => {
  const loading = $laoding({
    tips: 'create a laoding'
  })
  await later()
  expect(loading.$el.outerHTML).toMatchSnapshot()
})