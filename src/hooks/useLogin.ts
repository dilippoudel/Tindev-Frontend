import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'

import { logoutUser, loginUserSuccess } from '../redux/actions'
import { useHistory } from 'react-router-dom'

const useLogin = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const getUser = async () => {
    const res = await axios.get('/user')
    const status = res.data.status
    if (status === 401) {
      dispatch(logoutUser(history))
    }
    dispatch(loginUserSuccess(res.data.payload))
  }

  useEffect(() => {
    getUser()
  })
}

export default useLogin
