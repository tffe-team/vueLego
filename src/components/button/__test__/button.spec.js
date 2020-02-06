import {shallowMount, config} from '@vue/test-utils'
import Button from '../Button'

// TODO: Button 组件依赖这个属性，后续考虑优化，因为很多组件都会依赖
config.mocks['$LEGO'] = {
  theme: {
    theme: 'blue',
    lang: 'zh-CN'
  }
}

// 获取包裹器
const wrapper = shallowMount(Button)

test('点击按钮触发 click 事件', () => {
  wrapper.find('button').trigger('click')
  expect(wrapper.emitted().click).toBeTruthy()
})
