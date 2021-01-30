import React from 'react'
import { useSelector } from 'react-redux'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import JobPost from '../../components/JobPost'
import CompanyIcon from '../CompanyIcon'
import icon from '../../media/user-img.svg'
import './MatchCardJobseeker.scss'
import { AppState } from '../../redux/types'

const MatchCardJobseeker = () => {
  const jobPosts = useSelector((state: AppState) => state.user.info.jobPosts)

  return (
    <>
      <Row className="job-post-card">
        <Col md={2}>
          <CompanyIcon icon={icon} />
        </Col>
        <Col md={8}>
          {'match' &&
            jobPosts.map((jp: any) => {
              return (
                <JobPost
                  key={jp.id}
                  jobPostId={jp.id}
                  title={jp.title}
                  jobDescription={jp.jobDescription}
                  seniority={jp.seniority}
                  startingDate={jp.startingDate}
                  skills={jp.skills.map((s: any) => s.name)}
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
