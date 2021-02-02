import './UserImage.scss'

type UserImageProps = {
  image: string
}

const UserImage = ({ image }: UserImageProps) => {
  return (
    <>
      <img
        src={image}
        alt="company-icon-svg"
        className="company-icon hide-md"
      />
    </>
  )
}

export default UserImage
