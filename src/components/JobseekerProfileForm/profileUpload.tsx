import React from 'react'
import ImageUploader from 'react-images-upload'
import axios from 'axios'

const ProfileUpload = () => {
  const [state, setState] = React.useState({
    images: [],
  })
  const onDrop = (image: any) => {
    setState({ images: image })
  }
  //uploads images to backend
  const onClickHandler = () => {
    const data = new FormData()
    data.append('file', state.images[0])
    axios.post('/upload/image', data, {})
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
