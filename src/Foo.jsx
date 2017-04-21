import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toLower, toUpper } from '../actions/message'

export class Foo extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="foo">
        <button id="toLowerButton" onClick={() => this.props.toLower()}>toLower</button>
        <button id="toUpperButton" onClick={() => this.props.toUpper()}>toUpper</button>
        <h4>{this.props.data}</h4>
      </div>
    )
  }
}

/* istanbul ignore next */
const mapStateToProps = (state) => {
  return {
    data: state.message.data
  }
}

/* istanbul ignore next */
const mapDispatchToProps = (dispatch) => {
  return {
    toLower: () => dispatch(toLower()),
    toUpper: () => dispatch(toUpper()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Foo)
