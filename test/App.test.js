import React from 'react'
import { shallow, mount, render } from 'enzyme'
import toJson from 'enzyme-to-json'

import App from '../src/App'

describe('App', () => {
  const wrapper = shallow(<App />)

  it('Should render Foo', () => {
    expect(wrapper.find('Foo').length).toBe(1)
  })

  it('should render correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  })
})
