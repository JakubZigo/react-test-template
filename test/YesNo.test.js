import React from 'react'
import { shallow, mount, render } from 'enzyme'
import toJson from 'enzyme-to-json'
import sinon from 'sinon'

import { YesNo } from '../src/YesNo'

describe('YesNo', () => {
  let getAnswerSpy

  beforeEach(() => {
    getAnswerSpy = sinon.spy()
  })

  it('should render h4 with answer and img', () => {
    const wrapper = shallow(<YesNo answer='answer' image='image_url'/>)
    expect(wrapper.find('h4').length).toBe(1)
    expect(wrapper.find('h4').at(0).text()).toBe('answer')
    expect(wrapper.find('img').length).toBe(1)
    expect(wrapper.find('img').at(0).props()).toEqual({src: 'image_url'})
  })

  it('should request answer when getAnswer button is clicked', () => {
    const wrapper = shallow(<YesNo getAnswer={() => getAnswerSpy()}/>)
    wrapper.find('#getAnswerButton').simulate('click')
    expect(getAnswerSpy.called)
  })

  it('should render correctly', () => {
    const wrapper = shallow(<YesNo />)
    expect(wrapper).toMatchSnapshot();
  })
})
