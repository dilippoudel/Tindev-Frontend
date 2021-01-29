import LocalStorage from '../../local-storage'
import { useHistory } from 'react-router-dom'
import { Button } from 'react-bootstrap'

import './LogOut.scss'

const LogOut = () => {
  const history = useHistory()
  const deleteTokenFromLocalStorage = () => {
    LocalStorage.removeToken()
    history.push('/')
  }

  return (
    <>
      <Button
        className="logout-button"
        onClick={() => deleteTokenFromLocalStorage()}
      >
        Log Out
      </Button>
    </>
  )
}
export default LogOut
