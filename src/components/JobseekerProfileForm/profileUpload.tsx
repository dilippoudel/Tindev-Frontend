import React from 'react'
import ImageUploader from 'react-images-upload'
import axios from 'axios'

const ProfileUpload = () => {
  const [state, setState]: any = React.useState({
    images: [],
    url: '',
  })
  const onDrop = (image: any) => {
    setState({ images: image })
  }
  //uploads images to backend

  const onClickHandler = async () => {
    console.log(state.images[0])
    let file = state.images[0]
    let fileParts = state.images[0].name.split('.')
    let fileName = fileParts[0]
    let fileType = fileParts[1]
    console.log('fileType', fileType)
    console.log('fileName', fileName)
    const data = new FormData()
    console.log(state.images[0].name)
    data.append('pic', state.images[0])

    axios
      .post('http://localhost:3000/s3/image', {
        fileName: fileName,
        fileType: fileType,
      })
      .then(response => {
        let returnedData = response.data.data.returnData
        let signedRequest = returnedData.signedRequest
        let url = returnedData.url
        setState({ url: url })

        let options = {
          headers: {
            'Content-Type': fileType,
          },
        }
        axios
          .put(signedRequest, file, options)
          .then(result => {
            console.log('response from s3')
          })
          .catch(e => {
            console.log(e)
          })
      })
      .catch(e => console.log(e))
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
