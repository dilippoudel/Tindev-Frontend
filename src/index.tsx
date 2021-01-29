import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import axios from 'axios'

import App from './App'
import makeStore from './redux/store'
// https://tindev-dev-deploy.herokuapp.com
axios.defaults.baseURL = 'http://localhost:3000'

const store = makeStore()

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
