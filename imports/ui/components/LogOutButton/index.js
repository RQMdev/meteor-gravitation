import React from 'react'

import { AuthService } from '../../../services/AuthService'
import { styles } from './styles'

const LogOutButton = () => {
  return <button style={styles} onClick={Meteor.logout}>Log Out</button>
}

export default LogOutButton
