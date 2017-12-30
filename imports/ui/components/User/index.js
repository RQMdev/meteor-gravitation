import React from 'react'

const User = ({user}) => (
  <div>
    <div>{user.username}</div>
    <div>{!user.status ?
      'No Status' : user.status.idle ?
      'AKF' : 'Connected'
    }</div>
  </div>
);

export default User
