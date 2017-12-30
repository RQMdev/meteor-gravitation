import React from 'react'
import { Meteor } from 'meteor/meteor'
import { withTracker } from 'meteor/react-meteor-data'

import User from '../User'

const UsersOnline = ({usersOnline}) => {
  console.log(usersOnline)
  const renderUsers = () => {
    return usersOnline.map(
      user => <User key={user._id} user={user} />
    );
  }
  return (<div>Users Online :{renderUsers()}</div>);
}

export default withTracker(() => {
  Meteor.subscribe("usersOnline")
  return {
    usersOnline: Meteor.users.find({}).fetch()
  }
})(UsersOnline)
