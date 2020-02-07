import {mount} from '@vue/test-utils'
import Popup from '../Popup'

test('create a popup', () => {
  const wrapper = mount(Popup, {
    propsData: {
      position: 'left',
      value: true
    },
    slots: {
      default: '<div>text</div>'
    }
  })
  expect(wrapper.html()).toMatchSnapshot()
})

test('click close btn', async () => {
  const wrapper = mount(Popup, {
    propsData: {
      position: 'down',
      value: true,
      closeAble: true
    }
  })
  expect(wrapper.props().value).toBe(true)
  wrapper.find('.close-btn').trigger('click')
  expect(wrapper.emitted().input[0]).toEqual([false])
})

test('click masker', () => {
  const wrapper = mount(Popup, {
    propsData: {
      position: 'up',
      value: true
    }
  })
  expect(wrapper.props().value).toBe(true)
  wrapper.find('.vue-lego-masker').trigger('click')
  expect(wrapper.emitted().input[0]).toEqual([false])
})
