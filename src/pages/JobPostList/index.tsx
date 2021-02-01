import React from 'react'
import { useSelector } from 'react-redux'

import JobPost from '../../components/JobPost'
import './JobPostList.scss'
import { AppState } from '../../redux/types'

const JobPostList = () => {
  const jobPosts = useSelector((state: AppState) => state.user.info.jobPosts)

  return (
    <>
      <div className="jobposts">
        {jobPosts.length > 0 ? (
          jobPosts.map((jp: any) => (
            <JobPost
              key={jp.id}
              jobPostId={jp.id}
              title={jp.title}
              jobDescription={jp.jobDescription}
              seniority={jp.seniority}
              startingDate={jp.startingDate}
              skills={jp.skills.map((s: any) => s.name)}
            />
          ))
        ) : (
          <h3 className="jobposts-list-empty">Your Job Posts List is empty</h3>
        )}
      </div>
    </>
  )
}

export default JobPostList
