import {shallowMount, config} from '@vue/test-utils'
import Button from '../Button'

// TODO: Button 组件依赖这个属性，后续考虑优化，因为很多组件都会依赖
config.mocks['$LEGO'] = {
  theme: {
    theme: 'blue',
    lang: 'zh-CN'
  }
}

test('type prop', () => {
  const wrapper = shallowMount(Button, {
    propsData: {
      type: 'success'
    }
  })
  expect(wrapper.html()).toMatchSnapshot()
})

test('size prop', () => {
  const wrapper = shallowMount(Button, {
    propsData: {
      size: 'large'
    }
  })
  expect(wrapper.html()).toMatchSnapshot()
})

test('disabled prop', () => {
  const wrapper = shallowMount(Button, {
    propsData: {
      disabled: true
    }
  })
  expect(wrapper.html()).toMatchSnapshot()
})

test('long prop', () => {
  const wrapper = shallowMount(Button, {
    propsData: {
      long: true
    }
  })
  expect(wrapper.html()).toMatchSnapshot()
})

test('shape prop', () => {
  const wrapper = shallowMount(Button, {
    propsData: {
      shape: 'round'
    }
  })
  expect(wrapper.html()).toMatchSnapshot()
})

test('loading prop', () => {
  const wrapper = shallowMount(Button, {
    propsData: {
      loading: true
    }
  })
  expect(wrapper.html()).toMatchSnapshot()
})

test('click button', () => {
  const wrapper = shallowMount(Button)
  wrapper.find('button').trigger('click')
  expect(wrapper.emitted().click).toBeTruthy()
})

test('to prop', () => {
  const push = jest.fn()
  const wrapper = shallowMount(Button, {
    propsData: {
      to: { path: '/test' }
    },
    mocks: {
      $router: {
        push
      }
    }
  })
  wrapper.find('button').trigger('click')
  expect(push).toHaveBeenCalled() 
})

test('replace prop', () => {
  const replace = jest.fn()
  const wrapper = shallowMount(Button, {
    propsData: {
      replace: true,
      to: { path: '/test' }
    },
    mocks: {
      $router: {
        replace
      }
    }
  })
  wrapper.find('button').trigger('click')
  expect(replace).toHaveBeenCalled() 
})

test('url prop', () => {
  global.window = Object.create(window);
  const url = "http://dummy.com";
  Object.defineProperty(window, 'location', {
    value: {
      href: 'http://www.baidu.com',
    }
  });
  const wrapper = shallowMount(Button, {
    propsData: {
      url
    }
  })
  wrapper.find('button').trigger('click')
  expect(window.location.href).toEqual(url)
})


