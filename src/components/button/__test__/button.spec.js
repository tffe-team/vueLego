import {shallowMount, config} from '@vue/test-utils'
import Button from '../Button'

// TODO: Button 组件依赖这个属性，后续考虑优化，因为很多组件都会依赖
config.mocks['$LEGO'] = {
  theme: {
    theme: 'blue',
    lang: 'zh-CN'
  }
}

test('点击按钮触发 click 事件', () => {
  const wrapper = shallowMount(Button)
  wrapper.find('button').trigger('click')
  expect(wrapper.emitted().click).toBeTruthy()
})

test('to', () => {
  global.window = Object.create(window);
  const url = "http://dummy.com";
  Object.defineProperty(window, 'location', {
    value: {
      href: url
    }
  });
  const wrapper = shallowMount(Button, {
    propsData: {
      url,
    }
  })
  wrapper.find('button').trigger('click')
  expect(window.location.href).toEqual(url)
})

