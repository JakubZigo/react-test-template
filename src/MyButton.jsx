import React, { Component } from 'react'

export default class MyButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clickCount: 0
    }
  }

  handleClick(text) {
    this.props.clickFunction(text)
    this.setState({
      clickCount: this.state.clickCount + 1
    })
  }

  render() {
    return (
      <button id="button" onClick={() => this.handleClick('hello world')}>button</button>
    )
  }
}

