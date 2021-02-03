import {
  UPDATE_JOBSEEKER_REQUEST,
  UPDATE_JOBSEEKER_SUCCESS,
  UPDATE_JOBSEEKER_FAIL,
  REGISTER_JOBSEEKER_REQUEST,
  REGISTER_JOBSEEKER_SUCCESS,
  REGISTER_JOBSEEKER_FAIL,
  MATCH_JOBSEEKER_REQUEST,
  MATCH_JOBSEEKER_SUCCESS,
  MATCH_JOBSEEKER_FAIL,
  JobseekerActions,
} from '../types'

const initialState = {
  credential: { email: '', password: '' },
  jobseekerInfo: {},
  loading: false,
  error: null,
  jobseekerMatch: [],
}

const jobseeker = (state = initialState, action: JobseekerActions) => {
  switch (action.type) {
    case REGISTER_JOBSEEKER_REQUEST:
      return { ...state, loading: true, credential: action.payload }
    case REGISTER_JOBSEEKER_SUCCESS:
      return { ...state, loading: false, jobseekerInfo: action.payload }
    case REGISTER_JOBSEEKER_FAIL:
      return { ...state, loading: false, error: action.payload }
    case UPDATE_JOBSEEKER_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case UPDATE_JOBSEEKER_SUCCESS:
      return {
        ...state,
        loading: false,
        credentials: action.payload,
      }
    case UPDATE_JOBSEEKER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case MATCH_JOBSEEKER_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case MATCH_JOBSEEKER_SUCCESS:
      console.log('jobseekerMatchInReducer', action.payload)
      return {
        ...state,
        loading: false,
        jobseekerMatch: action.payload,
      }
    case MATCH_JOBSEEKER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export default jobseeker
