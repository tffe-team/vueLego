import {mount} from '@vue/test-utils'
import Picker from '../Picker'

test('create a picker', () => {
  const columns = [{
    value: 1,
    options: [
      {
        value: 1,
        title: 'option1'
      },
      {
        value: 2,
        title: 'option2'
      },
      {
        value: 3,
        title: 'option3'
      },
    ]
  }]
  const wrapper = mount(Picker, {
    propsData: {
      columns,
    }
  })
  expect(wrapper.html()).toMatchSnapshot()
})
