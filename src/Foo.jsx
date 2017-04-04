import React, { Component } from 'react'

class Foo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: this.props.data.toUpperCase()
    }
  }

  changeDatatoLowerCase() {
    this.setState({data: this.state.data.toLowerCase()})
  }

  render() {
    return (
      <div className="foo">
        <button onClick={() => this.changeDatatoLowerCase()}>CLICK</button>
        <h4>{this.state.data}</h4>
      </div>
    )
  }
}

export default Foo
