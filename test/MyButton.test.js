import React from 'react'
import { shallow, mount, render } from 'enzyme'
import toJson from 'enzyme-to-json'
import sinon from 'sinon'

import MyButton from '../src/MyButton'

describe('Button', () => {
  let wrapper, clickFunctionSpy

  beforeEach(() => {
    clickFunctionSpy = sinon.spy()
    wrapper = shallow(<MyButton clickFunction={clickFunctionSpy}/>)
  })

  describe('handleClick()', () => {
    it('should call this.props.clickFunction with passed argument', () => {
      wrapper.instance().handleClick('test')
      expect(clickFunctionSpy.called)
      expect(clickFunctionSpy.firstCall.args[0]).toEqual('test')
    })

    it('should increment this.state.clickCount', () => {
      const setStateSpy = sinon.spy(wrapper.instance(), 'setState')
      wrapper.instance().handleClick()
      expect(setStateSpy.firstCall.args[0]).toEqual({clickCount: 1})
      wrapper.instance().handleClick()
      expect(setStateSpy.secondCall.args[0]).toEqual({clickCount: 2})
    })
  })

  it('should call handleClick() with "hello world" when click at the button', () => {
    const handleClickSpy = sinon.spy(wrapper.instance(), 'handleClick')
    wrapper.find('#button').simulate('click')
    expect(handleClickSpy.called)
    expect(handleClickSpy.firstCall.args[0]).toEqual('hello world')
  })

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })
})
