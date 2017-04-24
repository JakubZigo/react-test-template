import fetch from 'isomorphic-fetch'

function startRequestAnswer() {
  return {
    type: 'REQUEST_ANSWER'
  }
}

function answerYes(image) {
  return {
    type: 'YES',
    image
  }
}

function answerNo(image) {
  return {
    type: 'NO',
    image
  }
}

function requestError() {
  return {
    type: 'ERROR',
  }
}

export function getAnswer() {
  return dispatch => {
    dispatch(startRequestAnswer())
    return fetch('https://yesno.wtf/api')
      .then(res => res.json())
      .then(json => {
        if (json.answer === 'yes') {
          dispatch(answerYes(json.image))
        } else {
          dispatch(answerNo(json.image))
        }
      })
      .catch(e => dispatch(requestError()))
  }
}
