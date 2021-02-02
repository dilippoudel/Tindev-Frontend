import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Row, Button, Col, /*Image,*/ ListGroup } from 'react-bootstrap'

import CustomRow from '../CustomRow'
import CustomSkill from '../CustomSkill'
import CompanyIcon from '../CompanyIcon'
import './JobPost.scss'
import { deleteJobPostRequest } from '../../redux/actions/resources'

type JobPostProps = {
  jobPostId: any
  title: string
  jobDescription: string
  seniority: string
  startingDate: string
  skills: any[]
  image: string
}

const JobPost = ({
  jobPostId,
  title,
  jobDescription,
  seniority,
  startingDate,
  skills,
  image,
}: JobPostProps) => {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(deleteJobPostRequest(jobPostId))
  }

  return (
    <>
      <Row className="job-post-card">
        <Col md={2}>
          <CompanyIcon icon={image} />
        </Col>
        <Col md={8}>
          <CustomRow name="Title" item={title} />
          <CustomRow name="Job Description" item={jobDescription} />
          <CustomRow name="Seniority" item={seniority} />
          <CustomRow name="Starting Date" item={startingDate} />
          <Row>
            <ListGroup variant="flush">
              <ListGroup.Item>
                Required Skills:
                <CustomSkill skills={skills} />
              </ListGroup.Item>
            </ListGroup>
          </Row>
        </Col>
        <Col className="buttons" md={2}>
          <Row>
            <Button className="edit-button">
              <Link to="/company/jobpost/:id">EDIT</Link>
            </Button>
          </Row>
          <Row>
            <Button onClick={handleClick} className="delete-button">
              DELETE
            </Button>
          </Row>
        </Col>
      </Row>
    </>
  )
}

export default JobPost
