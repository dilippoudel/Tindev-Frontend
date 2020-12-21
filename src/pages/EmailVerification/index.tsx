import React, { useState } from 'react'
import { Container, Button, Image } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

import img from '../images/woman-with-megaphon.png'
import CustomSvgIcon from '../../components/CustomSvgIcon'
import starsLady from '../../media/standing-lady.svg'
import './EmailVerification.scss'

type SetCode = {
  
  first: any,
  second: any, 
  third: any, 
  fourth: any,
}

const EmailVerification = () => {
  const history = useHistory()
  const [code, setCode] = useState({
    first: '',
    second: '',
    third: '',
    fourth: '',
  })

  const email = 'duy@abc.com'

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const {value, name} = e.currentTarget
    console.log(value, name)
    /* @ts-ignore */
    setCode((prevValue: SetCode) => {
      return {
        ...prevValue, 
        [name]: value
      }
    })
  }

  const handleVerification = () => {
    console.log('verified')
    history.push('/login')
  }

  const handleResend = () => {
    console.log('resend')
  }

  return (
    <>
    <Container>
      <div className="text-center py-2">
        <h3 className="email-verify">Email Verification</h3>
        <p className="email">Email verification for {email} </p>
        <h4 className="check-out">Please check out your mail and enter verification code:</h4>
      </div>
      <div className="verification text-center">
        <input name="first" onChange={handleChange} value={code.first} className="verification-code"></input>
        <input name="second" onChange={handleChange} value={code.second} className="verification-code"></input>
        <input name="third" onChange={handleChange} value={code.third} className="verification-code"></input>
        <input name="fourth" onChange={handleChange} value={code.fourth} className="verification-code"></input>
      </div>
      <div className="bottom-section">
        <div className="verification text-center">
          <Button onClick={handleVerification} className="verification__button btn btn-dark btn-lg">Send verification code</Button>
        </div>
        <div className="verification__resend-button text-center resend">
        <p className="new-code text-center">Didn't receive the verification code?</p>
          <Button onClick={handleResend} className="btn btn-light btn-lg">Get new verification code</Button>
        </div>
        {/* <Image src={`${img}`} fluid className="woman-behind-megaphon"></Image> */}
      </div>
    </Container>
    <CustomSvgIcon img={starsLady} />
    </>
  )
}

export default EmailVerification