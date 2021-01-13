import { put, takeLatest, select } from 'redux-saga/effects'
import axios from 'axios'
import { AppState, RegisterJobseekerRequestAction } from '../types'

import {
  updateJobseekerFail,
  updateJobseekerSuccess,
  registerJobseekerSuccess,
  registerJobseekerFail,
} from './../actions/jobseeker'

const credential = (state: AppState) => state.jobseeker.credential

function* registerJobseekerSaga(action: RegisterJobseekerRequestAction) {
  try {
    const credentialData = yield select(credential)
    const res = yield axios.post('/jobseeker', {
      credential: credentialData,
    })
    yield put(registerJobseekerSuccess(res.data))
    const history = action.payload.history
    if (res.data.status === 201) {
      yield history.push('/login')
    }
  } catch (error) {
    yield put(registerJobseekerFail())
  }
}
function* updateJobseekerSaga(credential: Credential) {
  try {
    const response = yield axios.patch('/jobSeeker', { credential })
    console.log('response::: >', response)
    yield put(updateJobseekerSuccess(response.data))
  } catch (error) {
    yield put(updateJobseekerFail(error.message))
  }
}

const sagaWatcher = [
  takeLatest('UPDATE_JOBSEEKER_REQUEST', updateJobseekerSaga),
  takeLatest('REGISTER_JOBSEEKER_REQUEST', registerJobseekerSaga),
]

export default sagaWatcher
