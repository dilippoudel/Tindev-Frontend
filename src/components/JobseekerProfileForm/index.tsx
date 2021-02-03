import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Row, Col } from 'react-bootstrap'
import { WithContext as ReactTags } from 'react-tag-input'
import DatePicker, { DayValue } from 'react-modern-calendar-datepicker'
import 'react-modern-calendar-datepicker/lib/DatePicker.css'
import BootstrapSwitchButton from 'bootstrap-switch-button-react'

import { updateJobseekerRequest } from '../../redux/actions/jobseeker'
import HalfCircle from '../../components/HalfCircle'
import CustomButton from '../../components/CustomButton'
import { AppState } from '../../redux/types'
import UploadImage from '../../components/UploadImage'

const KeyCodes = {
  comma: 188,
  enter: 13,
}

const delimiters = [KeyCodes.comma, KeyCodes.enter]

const JobseekerProfileForm = () => {
  const user = useSelector((state: AppState) => state.user.userInfo)
  const [tags, setTags] = useState<any[]>([])
  const [startingAt, setStartingAt] = useState<DayValue>(null)
  const [isOpenRelocate, setOpenRelocate] = useState(false)
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    contact: '',
    seniority: '',
    degree: '',
    institute: '',
    skills: [],
    workExperience: '',
    relocate: user.relocate,
    startingDate: '',
  })

  // Skill tags
  const skills = useSelector((state: AppState) => state.resources.skills)
  const suggestions = skills.map(skill => {
    return {
      id: String(skill.id),
      text: skill.name,
    }
  })

  // Handler for form inputs. TODO: Phone, workExperience, relocate
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target

    setState({
      ...state,
      [name]: value,
    })
  }

  const dispatch = useDispatch()

  // Handler for form submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const skills = tags.map(tag => {
      return {
        id: parseInt(tag.id),
      }
    })
    dispatch(
      updateJobseekerRequest({
        firstName: state.firstName,
        lastName: state.lastName,
        contact: Number(state.contact),
        seniority: state.seniority,
        degree: state.degree,
        institute: state.institute,
        skills: skills,
        workExperience: Number(state.workExperience),
        startingDate: startingAt,
        relocate: isOpenRelocate,
      })
    )
    console.log('workExperience', state.workExperience)
    console.log('contact', state.contact)
    console.log('isOpenRelocate', isOpenRelocate)
  }

  const handleDelete = (i: any) => {
    const filteredTags = tags.filter((tag, index) => index !== i)
    setTags(filteredTags)
  }

  const handleAddition = (tag: any) => {
    setTags([...tags, tag])
  }

  return (
    <div className="position-relative">
      <div>
        <HalfCircle inputText="Education & Experiences" />
      </div>
      <UploadImage />
      <Form onSubmit={e => handleSubmit(e)} className="container my-5">
        <Form.Group as={Row} controlId="formHorizontalFName">
          <Col sm={6}>
            <Form.Control
              type="text"
              name="firstName"
              placeholder="First name"
              value={state.firstName}
              onChange={handleChange}
            />
          </Col>

          <Col sm={6}>
            <Form.Control
              type="text"
              name="lastName"
              placeholder="Last name"
              value={state.lastName}
              onChange={handleChange}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formHorizontalphone">
          <Col sm={6}>
            <Form.Control
              type="tel"
              name="contact"
              placeholder="Phone Number"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              value={state.contact}
              onChange={handleChange}
            />
            <small>Format: 123-456-7890</small>
          </Col>

          <Col sm={6}>
            <Form.Control
              type="text"
              name="seniority"
              placeholder="Seniority"
              value={state.seniority}
              onChange={handleChange}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Col as={Row} sm={8} className="mt-2">
            <Form.Label as="legend" column className="pl-4">
              Open to Relocate?
            </Form.Label>
            {user.relocate === false ? (
              <BootstrapSwitchButton
                checked={false}
                onlabel="Yes"
                offlabel="No"
                onChange={(checked: boolean) => {
                  setOpenRelocate(checked === true)
                }}
              />
            ) : (
              <BootstrapSwitchButton
                checked={false}
                onlabel="No"
                offlabel="Yes"
                onChange={(checked: boolean) => {
                  setOpenRelocate(checked)
                  setState({ ...state, relocate: checked })
                }}
              />
            )}
          </Col>
        </Form.Group>

        <Form.Label as="legend" column sm={2} className="ml-n3">
          Education
        </Form.Label>
        <Form.Row>
          <Col sm={6} className="p-2">
            <Form.Control
              type="text"
              placeholder="Name of Degree"
              name="degree"
              value={state.degree}
              onChange={handleChange}
            />
          </Col>
          <Col sm={6} className="p-2">
            <Form.Control
              type="text"
              placeholder="University / School"
              name="institute"
              value={state.institute}
              onChange={handleChange}
            />
          </Col>
        </Form.Row>

        <Form.Row>
          <Form.Label column sm="4">
            Skills
          </Form.Label>
          <Col sm="8">
            <ReactTags
              tags={tags}
              suggestions={suggestions}
              handleDelete={handleDelete}
              handleAddition={handleAddition}
              delimiters={delimiters}
            />
          </Col>
        </Form.Row>
        <br />
        <Form.Label as="legend" column>
          Work Experience
        </Form.Label>
        <Form.Row>
          <Col className="px-2" lg={6}>
            <Form.Control
              name="workExperience"
              placeholder="Work Experience in Years"
              value={state.workExperience}
              onChange={handleChange}
            />
          </Col>
        </Form.Row>
        <br />
        <Form.Group
          as={Row}
          className="form-group-set"
          controlId="formElementStartingAt"
        >
          <Form.Label column sm="4">
            Starting At
          </Form.Label>
          <Col sm="8">
            <DatePicker
              value={startingAt}
              onChange={setStartingAt}
              inputPlaceholder="Select earliest starting day"
              colorPrimary="#000"
            />
          </Col>
        </Form.Group>
        <CustomButton text="Update" className="w-25 my-3 py-2 purple-bg" />
      </Form>
    </div>
  )
}

export default JobseekerProfileForm
