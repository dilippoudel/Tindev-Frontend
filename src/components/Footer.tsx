import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  const date = new Date()
  const year = date.getFullYear()

  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">
            <p className="copyright">Copyright &copy; TinDev {year}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer