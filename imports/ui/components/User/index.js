import React from 'react'
import { styles } from './styles'

const User = ({user}) => (
  <div style={styles.wrapper}>
    <div style={styles.username}>{user.username}</div>
    <div style={styles.status}>{!user.status ?
      'No Status' : user.status.idle ?
      'AKF' : 'Connected'
    }</div>
  </div>
);

export default User
