import React from 'react'
import profile from './download.jpeg'
import { Container, Row, Col, Image, Badge, Button } from 'react-bootstrap'
const Profile = () => {
  return (
    <Container className="container">
      <h3>PROFILE</h3>
      <Row className="justify-content-md-center">
        <Col xs={12} md={4}>
          <Image src={profile} roundedCircle />
          <h4>Degree</h4>
          <div className="education">
            <p className="education__title">BSC in Nursing</p>
            <p className="education__unversity">University of Helsinki</p>
          </div>
          <br />
          <div className="skills-lists">
            <h3>Skills</h3>
            <Badge pill variant="info">
              JavaScript
            </Badge>{' '}
            <Badge pill variant="info">
              Java
            </Badge>{' '}
            <Badge pill variant="info">
              NodeJS
            </Badge>{' '}
          </div>
          <br />
          <div className="work-experience">
            <h3>Work Experience</h3>
            <p className="work-experience__title">Integrify</p>
            <p className="work-experience__period">2 Years</p>
          </div>
          <h3>Level</h3>
          <p>Junior Developer</p>
          <Button variant="success">Chat</Button>
        </Col>
      </Row>
    </Container>
  )
}
export default Profile
