import React /*, { useState } */ from 'react'
//import { useDispatch, useSelector } from 'react-redux'

import Tabs from '../../components/Tabs'
import MatchCardCompany from '../../components/MatchCardCompany'
import CompanyProfileForm from '../../components/CompanyProfileForm'
import JobPostList from '../JobPostList'
import './CompanyProfile.scss'

const CompanyProfile = () => {
  const match = {
    firstName: 'Dilip',
    lastName: 'Poudel',
    skills: ['javascript', 'react'],
  }

  return (
    <div className="company-profile">
      <h2 className="company-header purple-text">Company Profile</h2>
      <Tabs
        formComponent={<CompanyProfileForm />}
        matchComponent={<MatchCardCompany match={match} />}
        jobPostListPage={<JobPostList />}
      />
    </div>
  )
}
export default CompanyProfile
