import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGOUT_USER,
  SET_LOGGED_IN,
  SET_LOADING,
} from '../types'

export const loginUserRequest = (
  email: string,
  password: string,
  history: any
) => {
  return {
    type: LOGIN_USER_REQUEST,
    payload: {
      credential: {
        email,
        password,
      },
      history,
    },
  }
}

export const loginUserSuccess = (userInfo: Credential) => {
  return {
    type: LOGIN_USER_SUCCESS,
    payload: userInfo,
  }
}

export const loginUserFail = () => {
  return {
    type: LOGIN_USER_FAIL,
  }
}

export const logoutUser = () => {
  return {
    type: LOGOUT_USER,
  }
}

export const setLoggedIn = () => {
  return {
    type: SET_LOGGED_IN,
  }
}

export const setLoading = () => {
  return {
    type: SET_LOADING,
  }
}
