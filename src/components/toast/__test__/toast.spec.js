import $toast from '../index'

test('$toast', () => {
  const toast = $toast({type: 'info'})
  expect(toast.$el.outerHTML).toMatchSnapshot()
})
