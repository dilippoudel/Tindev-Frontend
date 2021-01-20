import React from 'react'

import CustomSkill from '../CustomSkill'
import './Candidate.scss'

type CandidateProps = {
  firstName: string
  lastName: string
  skills: any[]
}

const Candidate = ({ firstName, lastName, skills }: CandidateProps) => {
  return (
    <div>
      <h5>
        {firstName} {lastName}
      </h5>
      <CustomSkill skills={skills} />
    </div>
  )
}

export default Candidate
