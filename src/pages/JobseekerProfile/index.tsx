import React from 'react'
import { Redirect } from 'react-router-dom'

import Tabs from '../../components/Tabs'
import JobseekerProfileForm from '../../components/JobseekerProfileForm'
import MatchListJobseeker from '../../components/MatchListJobseeker'
import { useSelector } from 'react-redux'
import { AppState } from '../../redux/types'

const JobseekerProfile = () => {
  const { isLoggedIn } = useSelector((state: AppState) => state.user)
  if (!isLoggedIn) <Redirect to="/login" />
  return (
    <>
      <div className="page">
        <Tabs
          formComponent={<JobseekerProfileForm />}
          matchComponent={<MatchListJobseeker />}
        />
      </div>
    </>
  )
}

export default JobseekerProfile
