import React from 'react'
import { useSelector } from 'react-redux'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import JobPost from '../../components/JobPost'
import CustomRow from '../../components/CustomRow'
import './MatchCardJobseeker.scss'
import { AppState } from '../../redux/types'

const MatchCardJobseeker = () => {
  const companyImage = useSelector((state: AppState) => state.employer.image)
  const match = useSelector((state: AppState) => state.jobseeker.match)

  return (
    <>
      <Row className="job-post-card">
        <Col md={8}>
          {match &&
            match.map((m: any) => {
              return (
                <>
                  <JobPost
                    key={m.id}
                    jobPostId={m.jobPost.id}
                    image={companyImage}
                    title={m.jobPost.title}
                    jobDescription={m.jobPost.jobDescription}
                    seniority={m.jobPost.seniority}
                    startingDate={m.jobPost.startingDate}
                    skills={m.jobPost.skills.map((s: any) => s.name)}
                  />
                  <CustomRow
                    name={'Company Name'}
                    item={m.employer.companyName}
                  />
                  <CustomRow name={'Address'} item={m.employer.address} />
                </>
              )
            })}
        </Col>
        <Col md={2}>
          <Link to="/chat">Chat</Link>
        </Col>
      </Row>
    </>
  )
}

export default MatchCardJobseeker
