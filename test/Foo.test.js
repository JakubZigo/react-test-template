import React from 'react'
import { shallow, mount, render } from 'enzyme'
import toJson from 'enzyme-to-json'
import sinon from 'sinon'

import { Foo } from '../src/Foo'

describe('Foo', () => {
  let wrapper, toLowerSpy, toUpperSpy

  beforeEach(() => {
    toLowerSpy = sinon.spy()
    toUpperSpy = sinon.spy()
    wrapper = shallow(<Foo data="Hello World!" toLower={() => toLowerSpy()} toUpper={() => toUpperSpy()} />)
  })

  it('Should render h4 with init status', () => {
    expect(wrapper.find('h4').length).toBe(1)
    expect(wrapper.find('h4').at(0).text()).toBe('Hello World!')
  })

  it('should change status when tolower button is clicked', () => {
    wrapper.find('#toLowerButton').simulate('click')
    expect(toLowerSpy.called)
  })

  it('should change status when toupper button is clicked', () => {
    wrapper.find('#toUpperButton').simulate('click')
    expect(toUpperSpy.called)
  })

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })
})
