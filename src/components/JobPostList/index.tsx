import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, /*Image,*/ ListGroup } from 'react-bootstrap'

import icon from '../../media/user-img.svg'
import CompanyIcon from '../../components/CompanyIcon'

const JobPostList = () => {
  return (
    <>
      <Row>
        <Col md={2}>
          <CompanyIcon icon={icon} />
          {/* <Image 
              src={`/${user.image}`} 
              alt="company-image"
              className="image" 
              fluid /> */}
        </Col>
        <Col md={10}>
          <Row>
            <ListGroup variant="flush">
              <ListGroup.Item className="">
                <Link to="/company/jobpost/:id">job title</Link>
              </ListGroup.Item>
            </ListGroup>
          </Row>
          <Row>
            <ListGroup variant="flush">
              <ListGroup.Item>description</ListGroup.Item>
            </ListGroup>
          </Row>
          <Row>
            <ListGroup variant="flush">
              <ListGroup.Item>skills</ListGroup.Item>
            </ListGroup>
          </Row>
        </Col>
      </Row>
    </>
  )
}

export default JobPostList
