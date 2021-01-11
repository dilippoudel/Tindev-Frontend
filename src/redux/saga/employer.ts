import { RegisterEmployerRequestAction } from './../types'
import { put, takeLatest, select } from 'redux-saga/effects'
import axios from 'axios'

import { AppState, DeletingRequestActionType } from '../types'
import LocalStorage from '../../local-storage'

import {
  registerEmployerSuccess,
  registerEmployerFail,
  loginEmployerSuccess,
  loginEmployerFail,
} from '../../redux/actions/employer'
import {
  registerJobPostSuccess,
  registerJobPostFail,
  deleteJobPostFail,
  deleteJobPostSuccess,
} from '../actions/jobpost'

const credential = (state: AppState) => state.employer.credential
const jobPostFormData = (state: AppState) => state.employer.jobPost
function* registerEmployerSaga(action: RegisterEmployerRequestAction) {
  try {
    const credentialData = yield select(credential)
    const res = yield axios.post('/employer', {
      credential: credentialData,
    })
    yield put(registerEmployerSuccess(res.data))
    const history = action.payload.history
    if (res.data.status === 201) {
      yield history.push('/login')
    }
  } catch (error) {
    yield put(registerEmployerFail())
  }
}

function* loginEmployerSaga() {
  try {
    const credentialData = yield select(credential)
    const res = yield axios.post('/login/local', {
      email: credentialData.email,
      password: credentialData.password,
    })

    yield put(loginEmployerSuccess(res))
    yield LocalStorage.saveToken(res.data.payload.token)
  } catch (error) {
    yield put(loginEmployerFail())
  }
}

function* creatingJobPostSaga() {
  try {
    const job = yield select(jobPostFormData)
    const res = yield axios.post('/employer/jobs', job)
    console.log(res)
    yield put(registerJobPostSuccess())
  } catch (e) {
    yield put(registerJobPostFail(e))
  }
}
function* deletingJobPostSaga(action: DeletingRequestActionType) {
  try {
    const jobPostId = yield action.payload
    yield axios.delete(`/employer/jobs/${jobPostId}`)
    yield put(deleteJobPostSuccess())
  } catch (e) {
    yield put(deleteJobPostFail(e))
  }
}
const sagaWatcher = [
  takeLatest('REGISTER_EMPLOYER_REQUEST', registerEmployerSaga),
  takeLatest('LOGIN_EMPLOYER_REQUEST', loginEmployerSaga),
  takeLatest('JOB_POST_REQUEST', creatingJobPostSaga),
  takeLatest('JOB_DELETE_REQUEST', deletingJobPostSaga),
]

export default sagaWatcher
