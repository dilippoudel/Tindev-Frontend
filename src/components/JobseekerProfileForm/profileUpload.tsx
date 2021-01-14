import React from 'react'
import ImageUploader from 'react-images-upload'
import axios from 'axios'

const ProfileUpload = () => {
  const [state, setState]: any = React.useState({
    images: [],
  })
  const onDrop = (image: any) => {
    setState({ images: image })
  }
  //uploads images to backend

  const onClickHandler = async () => {
    const data = new FormData()
    console.log(state.images[0].name)
    data.append('pic', state.images[0])
    await axios.post('/s3/image', data)
  }
  return (
    <>
      <ImageUploader
        withIcon={true}
        withPreview={true}
        buttonText="Choose images"
        onChange={image => onDrop(image)}
        fileSizeError=" file size is too big"
        imgExtension={['.jpg', '.gif', '.png', '.gif']}
        maxFileSize={5242880}
      />
      <button onClick={() => onClickHandler()}>upload</button>
    </>
  )
}
export default ProfileUpload
