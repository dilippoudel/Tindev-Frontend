import React from 'react'

import JobPostList from '../../components/JobPostList'
import './JobPost.scss'

const JobPost = () => {
  return (
    <>
      {/* <h2 className="job-posts">Job Posts</h2> */}
      <div className="job-post-card">
        <JobPostList />
      </div>
    </>
  )
}

export default JobPost
