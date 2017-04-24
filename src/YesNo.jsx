import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAnswer } from '../actions/yesno'

export class YesNo extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <button id="getAnswerButton" onClick={() => this.props.getAnswer()}>YES | NO</button>
        <h4>{this.props.answer}</h4>
        <img src={this.props.image} />
      </div>
    )
  }
}

/* istanbul ignore next */
const mapStateToProps = (state) => {
  console.log(state)
  return {
    answer: state.yesno.answer,
    image: state.yesno.image,
  }
}

/* istanbul ignore next */
const mapDispatchToProps = (dispatch) => {
  return {
    getAnswer: () => dispatch(getAnswer()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(YesNo)
