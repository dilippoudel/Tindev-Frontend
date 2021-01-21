import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGOUT_USER,
  UserActions,
  SET_LOGGED_IN,
  SET_LOADING,
} from '../types'

const initialState = {
  credential: { email: '', password: '' },
  history: {},
  userInfo: {
    role: '',
    firstName: '',
    lastName: '',
    skills: [],
    skillLevel: '',
    relocate: '',
    startingDate: '',
    education: {
      institute: '',
      degree: '',
    },
  },
  isLoggedIn: false,
  loading: false,
  error: null,
  jobPost: {
    title: '',
    jobDescription: '',
    seniority: '',
    skills: [],
    companyName: '',
    companyInfo: '',
    address: '',
  },
}

const user = (state = initialState, action: UserActions) => {
  switch (action.type) {
    case LOGIN_USER_REQUEST:
      return {
        ...state,
        loading: true,
        credential: action.payload.credential,
        history: action.payload.history,
      }
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        userInfo: action.payload,
        isLoggedIn: true,
      }
    case LOGIN_USER_FAIL:
      return { ...state, loading: false, error: action.payload }
    case LOGOUT_USER:
      return {}
    case SET_LOGGED_IN:
      return { ...state, loading: false, isLoggedIn: true }
    case SET_LOADING:
      return { ...state }
    default:
      return state
  }
}

export default user
