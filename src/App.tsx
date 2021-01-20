import React, { useEffect } from 'react'
import axios from 'axios'

import Routes from './Routes'
import './scss/styles.scss'
import LocalStorage from './local-storage'
import { loginUserSuccess, logoutUser, setLoggedIn } from './redux/actions'
import { useDispatch } from 'react-redux'
const App = () => {
  const dispatch = useDispatch()
  const getUserData = async () => {
    try {
      if (localStorage.getItem('token')) {
        const data = await axios.get('/employer', {
          headers: {
            Authorization: `Bearer ${LocalStorage.getToken()}`,
          },
        })
        dispatch(loginUserSuccess(data.data.payload))
        dispatch(setLoggedIn())
      }
    } catch (e) {
      dispatch(logoutUser())
    }
  }
  useEffect(() => {
    getUserData()
    axios.interceptors.request.use((config: any) => {
      const token = LocalStorage.getToken()
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`
      }
      return config
    })
  })

  return (
    <>
      <Routes />
    </>
  )
}

export default App
