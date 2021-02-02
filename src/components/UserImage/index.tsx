import './UserImage.scss'

type UserImageProps = {
  image: string
}

const UserImage = ({ image }: UserImageProps) => {
  return (
    <>
      <img src={image} alt="user" className="user-image hide-md" />
    </>
  )
}

export default UserImage
