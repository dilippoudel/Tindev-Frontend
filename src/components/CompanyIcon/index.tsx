import './CompanyIcon.scss'

type Icon = {
  icon: string
}

// TODO: use image url from db
const CompanyIcon = ({ icon }: Icon) => {
  return (
    <>
      <img src={icon} alt="company-icon-svg" className="company-icon hide-md" />
      {/* <Image 
          src={`/${user.image}`} 
          alt="company-image"
          className="image" 
          fluid /> */}
    </>
  )
}

export default CompanyIcon
