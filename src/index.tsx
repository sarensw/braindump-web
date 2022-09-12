import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Home } from './home/Home'
import { store } from './store.js'

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('container')
)
