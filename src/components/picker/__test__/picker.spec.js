import {mount} from '@vue/test-utils'
import Picker from '../Picker'

const singleColumns = [{
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

const multiColumns = [{
  value: 1,
  options: [
    {
      value: 1,
      title: '1'
    },
    {
      value: 2,
      title: '2'
    },
  ]
},
  {
    value: 2,
    options: [
      {
        value: 1,
        title: '1'
      },
      {
        value: 2,
        title: '2'
      }
    ]
  }, {
    value: 1,
    options: [
      {
        value: 1,
        title: '1'
      },
      {
        value: 2,
        title: '2'
      }
    ]
  }]

test('create a single-column picker', () => {

  const wrapper = mount(Picker, {
    propsData: {
      title: '单列数据',
      columns: singleColumns,
    }
  })
  expect(wrapper.html()).toMatchSnapshot()
})

test('create multi-column picker', () => {
  const wrapper = mount(Picker, {
    propsData: {
      title: '多列数据',
      columns: multiColumns,
    }
  })
  expect(wrapper.html()).toMatchSnapshot()
})

test('cancel button', () => {
  const selector = '.popup-regret'
  const wrapper = mount(Picker, {
    propsData: {
      title: '单列数据',
      columns: singleColumns,
    }
  })
  wrapper.find(selector).trigger('click')
  expect(wrapper.emitted().cancel).toBeTruthy()
})

test('confirm button', () => {
  const selector = '.popup-affirm'
  const wrapper = mount(Picker, {
    propsData: {
      title: '单列数据',
      columns: singleColumns,
    }
  })
  wrapper.find(selector).trigger('click')
  expect(wrapper.emitted().confirm).toBeTruthy()
  expect(wrapper.emitted().confirm[0]).toEqual([[1], [0]])
})
