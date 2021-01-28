import React, { useState } from 'react'
import ImageUploader from 'react-images-upload'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { AppState } from '../../redux/types'
import { Alert } from 'react-bootstrap'

const ProfileUpload = () => {
  const [state, setState]: any = React.useState({
    images: [],
  })
  const [message, setMessage] = useState('')
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
      .post('/s3/image', {
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
            setMessage('Successfully uploaded')
          })
          .catch(e => {
            setMessage('Upload Fail')
          })
      })
      .catch(e => setMessage('Upload Fail'))
  }
  const alertMessage = () =>
    message === '' ? null : 'Successfully uploaded' ? (
      <Alert variant="success">{message}</Alert>
    ) : (
      <Alert variant="warning">{message}</Alert>
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
