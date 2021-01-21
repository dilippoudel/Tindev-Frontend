import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGOUT_USER,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAIL,
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

export const getUserRequest = () => {
  return {
    type: GET_USER_REQUEST,
  }
}

export const getUserSuccess = (employerInfo: any) => {
  return {
    type: GET_USER_SUCCESS,
    payload: employerInfo,
  }
}

export const getUserFail = (error: string) => {
  return {
    type: GET_USER_FAIL,
    payload: error,
  }
}
