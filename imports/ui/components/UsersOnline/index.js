import React from 'react'
import { Meteor } from 'meteor/meteor'
import { withTracker } from 'meteor/react-meteor-data'

import { styles } from './styles'

import User from '../User'

const UsersOnline = ({usersOnline}) => {
  const renderUsers = () => {
    return usersOnline.map(
      user => <User key={user._id} user={user} />
    );
  }
  return (
    <div>
      <h2 style={styles.title}>Users Online</h2>
      <div style={styles.grid}>{renderUsers()}</div>
    </div>
  );
}

export default withTracker(() => {
  Meteor.subscribe("usersOnline")
  return {
    usersOnline: Meteor.users.find({}).fetch()
  }
})(UsersOnline)
