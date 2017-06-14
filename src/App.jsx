import React, { Component } from 'react'
import Foo from './Foo.jsx'
import YesNo from './YesNo.jsx'
import MyButton from './MyButton.jsx'

class App extends Component {
  render() {
    return (
      <div>
        <Foo />
        <YesNo />
        <MyButton />
      </div>
    )
  }
}

export default App

