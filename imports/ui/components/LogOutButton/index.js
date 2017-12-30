import React from 'react'

import { AuthService } from '../../../services/AuthService'
import { styles } from './styles'

const LogOutButton = () => {
  const logOut = () => {
    Meteor.logout(AuthService.callback)
  }
  return (
    <button style={styles} onClick={logOut}>Log Out</button>
  )
}

export default LogOutButton
