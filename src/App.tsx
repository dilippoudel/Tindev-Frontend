import React from 'react'

import Routes from './Routes'
import './scss/styles.scss'

import useLogin from './hooks/useLogin'

const App = () => {
  useLogin()
  return (
    <>
      <Routes />
    </>
  )
}

export default App
