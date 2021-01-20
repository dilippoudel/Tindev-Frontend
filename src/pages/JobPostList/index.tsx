import React from 'react'
import { useSelector } from 'react-redux'

import JobPost from '../../components/JobPost'
import './JobPostList.scss'
import { AppState } from '../../redux/types'

const JobPostList = () => {
  //@ts-ignore
  const jobPosts = useSelector(
    (state: AppState) => state.employer.employerInfo?.jobPosts
  )

  return (
    <>
      <div className="">
        {jobPosts &&
          jobPosts.map((jp: any) => {
            return (
              <JobPost
                key={jp.id}
                title={jp.title}
                jobDescription={jp.jobDescription}
                seniority={jp.seniority}
                startingDate={jp.startingDate}
                // skills={jp.skills}
              />
            )
          })}
      </div>
    </>
  )
}

export default JobPostList
