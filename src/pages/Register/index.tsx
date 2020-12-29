import React from 'react'

import HalfCircle from '../../components/HalfCircle'
import CustomSvgIcon from '../../components/CustomSvgIcon'
import starsLady from '../../media/star-lady.svg'

const Register = () => (
  <>
    <HalfCircle inputText="Welcome" />
    <CustomSvgIcon img={starsLady} />
  </>
)

export default Register
