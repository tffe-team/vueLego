import {mount, config} from '@vue/test-utils'
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

test('click close btn', () => {
  const wrapper = mount(Popup, {
    propsData: {
      position: 'down',
      value: true,
      closeAble: true
    }
  })
  expect(document.querySelector('.r-vue-lego-popup')).toBeTruthy()
  wrapper.find('.close-btn').trigger('click')
  expect(document.body.querySelector('.r-vue-lego-popup')).toBeFalsy()
})

test('click masker', () => {
  const wrapper = mount(Popup, {
    propsData: {
      position: 'up',
      value: true
    }
  })
  wrapper.find('.vue-lego-masker').trigger('click')
  expect(wrapper.isVisible()).toBe(true)
})

