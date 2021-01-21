import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import axios from 'axios'

import App from './App'
import makeStore from './redux/store'
import LocalStorage from './local-storage'

axios.defaults.baseURL = 'https://tindev-dev-deploy.herokuapp.com'
axios.interceptors.request.use((config: any) => {
  const token = LocalStorage.getToken()
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`
  }
  return config
})
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
