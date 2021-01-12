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
  console.log(state.images)
  //uploads images to backend
  const uploadImages = () => {
    let uploadPromise = state.images.map((image: any) => {
      let data = new FormData()
      data.append('image', image.name)
      return axios.post('/upload/image', data)
    })
    axios
      .all(uploadPromise)
      .then(results => console.log(results))
      .catch(e => console.log(e))
    console.log(state.images)
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
      <button onClick={() => uploadImages()}>upload</button>
    </>
  )
}
export default ProfileUpload
