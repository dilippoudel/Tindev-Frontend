import React, { useEffect } from 'react'
import axios from 'axios'

import Routes from './Routes'
import './scss/styles.scss'
import LocalStorage from './local-storage'

const App = () => {
  // useEffect(() => {
  //   axios.interceptors.request.use((config: any) => {
  //     const token = LocalStorage.getToken()
  //     if (token) {
  //       config.headers['Authorization'] = `Bearer ${token}`
  //     }
  //     return config
  //   })
  // }, [])

  return (
    <>
      <Routes />
    </>
  )
}

export default App
