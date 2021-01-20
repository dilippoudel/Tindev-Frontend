import React from 'react'

import JobPostForm from '../JobPostForm'
import './AddJobPost.scss'

const AddJobPost = () => {
  return (
    <div className="add-jobpost">
      <JobPostForm header={'New Job Post'} />
    </div>
  )
}

export default AddJobPost
