import { combineReducers } from 'redux'

import employer from './employer'
import jobseeker from './jobseeker'
import resources from './resources'
import user from './user'

const rootReducer = () =>
  combineReducers({ employer, jobseeker, resources, user })

export default rootReducer
