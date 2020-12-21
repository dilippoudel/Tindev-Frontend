import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import './Footer.scss'

const Footer = () => {
  const date = new Date()
  const year = date.getFullYear()

  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center">
            <p className="copyright">Copyright &copy; TinDev {year}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer