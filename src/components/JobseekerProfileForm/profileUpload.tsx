import React from 'react'
import ImageUploader from 'react-images-upload'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { AppState } from '../../redux/types'
import { Alert } from 'react-bootstrap'
const ProfileUpload = () => {
  const [state, setState]: any = React.useState({
    images: [],
  })
  // @ts-ignore
  const userId = useSelector((state: AppState) => state.user.userInfo.id)
  const onDrop = (image: any) => {
    setState({ images: image })
  }

  const onClickHandler = async () => {
    let file = state.images[0]
    let fileParts = state.images[0].name.split('.')
    let fileName = userId.toString()
    let fileType = fileParts[1]
    const data = new FormData()
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
            state.message = 'Succeesfully uploaded'
          })
          .catch(e => {
            state.message = 'Upload Fail'
          })
      })
      .catch(e => (state.message = 'Upload Fail'))
  }
  const alertMessage = () =>
    state.message === '' ? null : 'Succeesfully uploaded' ? (
      <Alert variant="success" />
    ) : (
      <Alert variant="warning" />
    )

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
      {alertMessage()}
      <button onClick={() => onClickHandler()}>upload</button>
    </>
  )
}
export default ProfileUpload
