import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './src/App.jsx'
import reducers from './reducers'

let store = createStore(reducers)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('App')
)

