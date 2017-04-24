const initialState = {
  isRequesting: false
}

const yesno = (state=initialState, action) => {
  switch (action.type) {
    case 'REQUEST_ANSWER':
      return {
        isRequesting: true,
      }
    case 'YES':
      return {
        answer: 'yes',
        image: action.image,
        isRequesting: false,
      }
    case 'NO':
      return {
        answer: 'no',
        image: action.image,
        isRequesting: false,
      }
    case 'ERROR':
      return {
        answer: 'error',
        isRequesting: false,
      }
    default:
      return state
  }
}

export default yesno
