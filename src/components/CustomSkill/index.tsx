import './CustomSkill.scss'

export type CustomSkillTypes = {
  skill: string
  className?: string
}

const CustomSkill = ({ skill, ...otherProps }: CustomSkillTypes) => {
  return (
    <div
      className="rounded-pill border border-info mx-2 text-center p-1 custom-skill"
      {...otherProps}
    >
      <span className="m-auto">{skill}</span>

      {/* <span className="m-auto">
        {skills.map(skill => console.log('Skills', skill))}
      </span> */}
    </div>
  )
}

export default CustomSkill
