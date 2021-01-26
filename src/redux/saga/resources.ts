import { put, select, takeLatest } from 'redux-saga/effects'
import axios from 'axios'

import { AppState, DeletingRequestActionType } from '../types'
import { getSkillsSuccess, getSkillsFail } from '../actions/resources'
import { createSkillSuccess, createSkillFail } from '../actions/skill'
import {
  registerJobPostSuccess,
  registerJobPostFail,
  deleteJobPostFail,
  deleteJobPostSuccess,
} from '../actions/resources'

const skillInfo = (state: AppState) => state.skill
const jobPostFormData = (state: AppState) => state.resources.jobPost

function* getSkillsSaga() {
  try {
    const res = yield axios.get('/skills')
    yield put(getSkillsSuccess(res.data.skills))
  } catch (error) {
    yield put(getSkillsFail(error))
  }
}

function* createSkillSaga() {
  try {
    const skill = yield select(skillInfo)
    const res = yield axios.post('/skills', skill)
    yield put(createSkillSuccess(res.data))
  } catch (error) {
    yield put(createSkillFail(error))
  }
}

function* creatingJobPostSaga() {
  try {
    const job = yield select(jobPostFormData)
    const res = yield axios.post('/employer/jobs', job)
    yield put(registerJobPostSuccess(res))
  } catch (e) {
    yield put(registerJobPostFail(e))
  }
}

function* deletingJobPostSaga(action: DeletingRequestActionType) {
  try {
    const jobPostId = yield action.payload
    const res = yield axios.delete(`/employer/jobs/${jobPostId}`)
    if (res.status === 200) {
      yield put(deleteJobPostSuccess())
    }
    throw new Error()
  } catch (e) {
    yield put(deleteJobPostFail(e))
  }
}

const sagaWatcher = [
  takeLatest('GET_SKILLS_REQUEST', getSkillsSaga),
  takeLatest('CREATE_SKILL_REQUEST', createSkillSaga),
  takeLatest('CREATE_JOB_POST_REQUEST', creatingJobPostSaga),
  takeLatest('JOB_DELETE_REQUEST', deletingJobPostSaga),
]

export default sagaWatcher
