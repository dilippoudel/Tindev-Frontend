import React from 'react'
import { Card } from 'react-bootstrap'
import CustomSkill from '../CustomSkill'

type Info = {
  title: string
  skills: any[]
  message: string
}

const CustomInfo = ({ title, skills, message }: Info) => {
  return (
    <>
      <Card className="d-flex align-items-center border-0 py-1 text-dark">
        <div>{title}</div>
        <div className="skill-container d-flex ">
          <CustomSkill skills={[]} />
        </div>
      </Card>
      <Card.Text className="message">{message}</Card.Text>
    </>
  )
}
export default CustomInfo
