import React from 'react'
import { shallow, mount, render } from 'enzyme'

import Foo from '../src/Foo'

describe('Foo', () => {
  const wrapper = shallow(<Foo />)

  it('Should render h4 with init status', () => {
    expect(wrapper.find('h4').length).toBe(1)
    expect(wrapper.find('h4').at(0).text()).toBe('Initial data')
  })

  it('should change status when button is clicked', () => {
    wrapper.find('button').simulate('click')
    expect(wrapper.find('h4').at(0).text()).toBe('Data updated')
  })

  it('should change state.data when button is clicked', () => {
    wrapper.find('button').simulate('click')
    expect(wrapper.state('data')).toBe('Data updated')
  })
})
