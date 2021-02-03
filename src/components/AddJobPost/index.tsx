import React from 'react'

import JobPostForm from '../JobPostForm'
import Navbar from '../Navbar-logout'
import './AddJobPost.scss'

const AddJobPost = () => {
  return (
    <>
      <Navbar />
      <div className="add-jobpost">
        <JobPostForm header={'New Job Post'} />
      </div>
    </>
  )
}

export default AddJobPost
