import React, { Component } from 'react'

class Foo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: 'Initial data'
    }
  }

  updateState() {
    this.setState({data: 'Data updated'})
  }

  render() {
    return (
      <div className="foo">
        <button onClick={() => this.updateState()}>CLICK</button>
        <h4>{this.state.data}</h4>
      </div>
    )
  }
}

export default Foo
