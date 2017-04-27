import React from 'react'
import { shallow, mount, render } from 'enzyme'
import toJson from 'enzyme-to-json'

import App from '../src/App'

describe('App', () => {
  const wrapper = shallow(<App />)

  it('Should render Foo', () => {
    expect(wrapper.find('Connect(Foo)').length).toBe(1)
  })

  it('Should render YesNo', () => {
    expect(wrapper.find('Connect(YesNo)').length).toBe(1)
  })

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })
})
