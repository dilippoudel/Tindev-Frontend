import React from 'react'
import { Form, Row, Col } from 'react-bootstrap'
import CustomButton from '../../components/CustomButton'

import HalfCircle from '../../components/HalfCircle'

import userImg from '../../media/user-img.svg'

const EditProfile = () => {
  return (
    <>
      <HalfCircle inputText="Education & Experiences" />

      <Form className="container my-5">
        <div className="d-flex">
          <div className="personal-form">
            <Form.Group as={Row} controlId="formHorizontalTitle">
              <Col sm="10">
                <Form.Control type="text" placeholder="Title" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalFName">
              <Col sm="10">
                <Form.Control type="text" placeholder="First name" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalLName">
              <Col sm="10">
                <Form.Control type="text" placeholder="Last name" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalCountry">
              <Col sm="10">
                <Form.Control type="text" placeholder="Country" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalCity">
              <Col sm="10">
                <Form.Control type="text" placeholder="City" />
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Form.Label as="legend" column className="pl-4">
                Open to Relocate?
              </Form.Label>
              <Col as={Row} className="mt-2">
                <Form.Check
                  type="radio"
                  label="Yes"
                  name="formVerticalRadios"
                  id="formVerticalRadios1"
                  checked
                  className="pr-4"
                />
                <Form.Check
                  type="radio"
                  label="No"
                  name="formVerticalRadios"
                  id="formVerticalRadios2"
                />
              </Col>
            </Form.Group>
          </div>
          <div className="m-auto hide-sm">
            <img src={userImg} alt="userImg-svg" />
            <br />
            <CustomButton text="Upload" className="my-2 py-2" />
          </div>
        </div>
        <Form.Label as="legend" column sm={2} className="ml-n3">
          Education
        </Form.Label>
        <Form.Row>
          <Col sm={6} className="p-2">
            <Form.Control placeholder="Name of Degree" />
          </Col>
          <Col sm={6} className="p-2">
            <Form.Control placeholder="University / School" />
          </Col>
          <Col sm={6} className="p-2">
            <Form.Control placeholder="Name of Degree" />
          </Col>
          <Col sm={6} className="p-2">
            <Form.Control placeholder="University / School" />
          </Col>
        </Form.Row>

        <p>+ Add more</p>
        <Form.Label as="legend" column sm={2} className="ml-n3">
          Skills
        </Form.Label>
        <Form.Row>
          <Col className="p-2">
            <Form.Control placeholder="skills comes in here" />
          </Col>
        </Form.Row>
        <br />
        <Form.Label as="legend" column sm={4} className="ml-n3">
          Work Experience
        </Form.Label>
        <br />

        <Form.Label as="legend" column sm={2}>
          Level
        </Form.Label>
        <Form.Row>
          <Col sm={4} className="px-2">
            <Form.Control placeholder="Skill level" />
          </Col>
        </Form.Row>
        <Form.Label as="legend" column sm={2}>
          Experience
        </Form.Label>
        <Form.Row>
          <Col sm={4} className="px-2">
            <Form.Control placeholder="Duration" />
          </Col>
        </Form.Row>
        <br />
        <CustomButton text="Update" className="my-2 py-2 btn-lg" />
      </Form>
    </>
  )
}

export default EditProfile
