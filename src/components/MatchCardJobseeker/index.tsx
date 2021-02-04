import React from 'react'
import { useSelector } from 'react-redux'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import CustomRow from '../../components/CustomRow'
import UserImage from '../../components/UserImage'
import './MatchCardJobseeker.scss'
import { AppState } from '../../redux/types'

const MatchCardJobseeker = () => {
  const match = useSelector((state: AppState) => state.jobseeker.jobseekerMatch)

  return (
    <>
      <Row className="match-card">
        <Col md={8}>
          {match &&
            match.map((m: any) => {
              return (
                <div className="match-content">
                  <UserImage image={m.employer.image} />
                  <CustomRow
                    name="Company Name"
                    item={m.employer.companyName}
                  />
                  <CustomRow name="Address" item={m.employer.address} />
                  <CustomRow name="Job Title" item={m.title} />
                  <CustomRow name="Job Description" item={m.jobDescription} />
                  <CustomRow name="Seniority" item={m.seniority} />
                  <CustomRow name="Starting Date" item={m.startingDate} />
                </div>
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
