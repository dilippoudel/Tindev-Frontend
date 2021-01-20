import React from 'react'
import { Row, ListGroup } from 'react-bootstrap'

type JobPostRowProps = {
  name: string
  item: any
}

const JobPostRow = ({ name, item }: JobPostRowProps) => {
  return (
    <>
      <Row>
        <ListGroup variant="flush">
          <ListGroup.Item>
            {name}: {item}
          </ListGroup.Item>
        </ListGroup>
      </Row>
    </>
  )
}

export default JobPostRow
