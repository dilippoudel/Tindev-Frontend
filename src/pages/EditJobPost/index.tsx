import React from 'react'

import JobPostForm from '../../components/JobPostForm'
import './EditJobPost.scss'

const EditJobPost = () => {
  return (
    <div className="edit-jobpost">
      <JobPostForm header={'Edit Job Post'} />
    </div>
  )
}

export default EditJobPost
