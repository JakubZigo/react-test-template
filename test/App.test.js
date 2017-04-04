import React from 'react'
import { shallow, mount, render } from 'enzyme'

import App from '../src/App'

describe('App', () => {
  const wrapper = shallow(<App />)

  it('Should render Foo', () => {
    expect(wrapper.find('Foo').length).toBe(1)
  })
})
