import {
  EmployerActions,
  REGISTER_EMPLOYER_REQUEST,
  REGISTER_EMPLOYER_SUCCESS,
  REGISTER_EMPLOYER_FAIL,
  UPDATE_EMPLOYER_REQUEST,
  UPDATE_EMPLOYER_SUCCESS,
  UPDATE_EMPLOYER_FAIL,
  GET_EMPLOYER_REQUEST,
  GET_EMPLOYER_SUCCESS,
  GET_EMPLOYER_FAIL,
} from '../types'

const initialState = {
  credential: { email: '', password: '' },
  employerInfo: {
    jobPosts: [],
  },
  loading: false,
  error: null,
}

const employer = (state = initialState, action: EmployerActions) => {
  switch (action.type) {
    case REGISTER_EMPLOYER_REQUEST:
      return { ...state, loading: true, credential: action.payload }
    case REGISTER_EMPLOYER_SUCCESS:
      return { ...state, loading: false, info: action.payload }
    case REGISTER_EMPLOYER_FAIL:
      return { ...state, loading: false, error: action.payload }
    case UPDATE_EMPLOYER_REQUEST:
      return { ...state, loading: true }
    case UPDATE_EMPLOYER_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        employer: action.payload,
      }
    case UPDATE_EMPLOYER_FAIL:
      return { ...state, loading: false, error: action.payload }
    case GET_EMPLOYER_REQUEST:
      return { ...state, loading: true }
    case GET_EMPLOYER_SUCCESS:
      return {
        ...state,
        loading: false,
        // @ts-ignore
        employerInfo: action.payload,
      }
    case GET_EMPLOYER_FAIL:
      //@ts-ignore
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}

export default employer
