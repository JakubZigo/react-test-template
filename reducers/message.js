const initialState = {
  data: 'Hello World!'
}

const message = (state=initialState, action) => {
  switch (action.type) {
    case 'TO_UPPER':
      return {
        data: state.data.toUpperCase()
      }
    case 'TO_LOWER':
      return {
        data: state.data.toLowerCase()
      }
    default:
      return state
  }
}

export default message
