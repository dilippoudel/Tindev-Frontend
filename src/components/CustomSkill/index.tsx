import { Badge } from 'react-bootstrap'
import './CustomSkill.scss'

export type CustomSkillTypes = {
  className?: string
  skills: any[]
}

const CustomSkill = ({ skills, ...otherProps }: CustomSkillTypes) => {
  return (
    <div className="custom-skill" {...otherProps}>
      {skills.map(skill => {
        return (
          <Badge
            pill
            key={skill.id}
            className="tag-btn btn btn-pill btn-outline-primary ml-2"
          >
            <span className="m-auto">{skill}</span>
          </Badge>
        )
      })}
    </div>
  )
}

export default CustomSkill
