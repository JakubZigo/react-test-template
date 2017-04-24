import { combineReducers } from 'redux'
import message from './message'
import yesno from './yesno'

export default combineReducers({
  message,
  yesno,
})
