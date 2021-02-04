import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import CustomRow from '../../components/CustomRow'
import UserImage from '../../components/UserImage'
import './MatchCardJobseeker.scss'

type MatchCardJobseekerProps = {
  image: string
  companyName: string
  address: string
  title: string
  jobDescription: string
  seniority: string
  startingDate: string
}

const MatchCardJobseeker = ({
  image,
  companyName,
  address,
  title,
  jobDescription,
  seniority,
  startingDate,
}: MatchCardJobseekerProps) => {
  return (
    <>
      <Row className="match-card">
        <Col md={8}>
          <UserImage image={image} />
          <CustomRow name="Company Name" item={companyName} />
          <CustomRow name="Address" item={address} />
          <CustomRow name="Job Title" item={title} />
          <CustomRow name="Job Description" item={jobDescription} />
          <CustomRow name="Seniority" item={seniority} />
          <CustomRow name="Starting Date" item={startingDate} />
        </Col>
        <Col md={2}>
          <Link to="/chat">Chat</Link>
        </Col>
      </Row>
    </>
  )
}

export default MatchCardJobseeker
