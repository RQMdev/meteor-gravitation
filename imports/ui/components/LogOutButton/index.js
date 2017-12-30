import React from 'react'
import { AuthService } from '../../../services/AuthService'

const LogOutButton = () => {
  const logOut = () => {
    Meteor.logout(AuthService.callback)
  }
  return (
    <button className="log-out" onClick={logOut}>Log Out</button>
  )
}

export default LogOutButton
