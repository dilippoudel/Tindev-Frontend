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

  const styles = {
    customButton: {
      backgroundColor: '#6f42c1',
      border: 'none',
      color: '#fff',
      borderRadius: '4px',
    },
  }

  return (
    <>
      <Button
        className="logout-button"
        style={styles.customButton}
        onClick={() => deleteTokenFromLocalStorage()}
      >
        Log Out
      </Button>
    </>
  )
}
export default LogOut
