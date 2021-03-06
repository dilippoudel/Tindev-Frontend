import React from 'react'
import { useSelector } from 'react-redux'

import CompanyProfile from '../../pages/CompanyProfile'
import JobseekerProfile from '../../pages/JobseekerProfile'
import { AppState } from '../../redux/types'

const AuthApp = () => {
  const role = useSelector((state: AppState) => state.user.userInfo.role)

  return <>{role === 'employer' ? <CompanyProfile /> : <JobseekerProfile />}</>
}

export default AuthApp
