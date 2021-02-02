import React from 'react'
import { useSelector } from 'react-redux'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import JobPost from '../../components/JobPost'
import './MatchCardJobseeker.scss'
import { AppState } from '../../redux/types'

const MatchCardJobseeker = () => {
  const match = useSelector((state: AppState) => state.jobseeker.match)

  return (
    <>
      <Row className="job-post-card">
        <Col md={8}>
          {match &&
            match.map((m: any) => {
              return (
                <JobPost
                  key={m.id}
                  jobPostId={m.id}
                  image={m.image}
                  title={m.title}
                  jobDescription={m.jobDescription}
                  seniority={m.seniority}
                  startingDate={m.startingDate}
                  skills={m.skills.map((s: any) => s.name)}
                />
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
