import React from 'react'

import Routes from './Routes'
import './scss/styles.scss'

import useLogin from './hooks/useLogin'
import { useSelector } from 'react-redux'
import { AppState } from './redux/types'
import Loader from './components/Loader'

const App = () => {
  useLogin()
  const { loading } = useSelector((state: AppState) => state.user)
  if (loading) return <Loader />
  return (
    <>
      <Routes />
    </>
  )
}

export default App
