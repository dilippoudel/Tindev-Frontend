import React from 'react'
import { Row, ListGroup } from 'react-bootstrap'

type CustomRowProps = {
  name: string
  item: any
}

const CustomRow = ({ name, item }: CustomRowProps) => {
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

export default CustomRow
