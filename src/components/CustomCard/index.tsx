import React from 'react'
import { Card } from 'react-bootstrap'

import icon from '../../media/user-img.svg'
import CompanyIcon from '../CompanyIcon'
import CustomInfo from '../CustomInfo'

type Info = {
  title: string
  skill: any
  message: string
}

const CustomCard = ({ title, skill, message }: Info) => {
  return (
    <Card className="d-flex flex-row border border-dark rounded p-2 my-2">
      <div className="m-auto px-3">
        <CompanyIcon icon={icon} />
      </div>
      <div>
        <CustomInfo
          title={title}
          skills={skill} // for each displays lists of arrays here
          message={message}
        />
      </div>
    </Card>
  )
}

export default CustomCard
