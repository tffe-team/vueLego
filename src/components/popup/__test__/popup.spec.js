import {mount, config} from '@vue/test-utils'
import Popup from '../Popup'

const selector = '.r-vue-lego-popup'

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
  wrapper.find('.close-btn').trigger('click')
  expect(document.body.querySelector(selector)).toBeFalsy()
})

test('click masker', () => {
  const wrapper = mount(Popup, {
    propsData: {
      position: 'up',
      value: true
    }
  })
  wrapper.find('.vue-lego-masker').trigger('click')
  expect(document.body.querySelector(selector)).toBeFalsy()
})

