import React from 'react'
import { Meteor } from 'meteor/meteor'
import { withTracker } from 'meteor/react-meteor-data'
import { Route } from 'react-router-dom'

import Dashboard from './pages/Dashboard'
import AuthContainer from './pages/authForm/AuthContainer'

class App extends React.Component {
  render() {

    return (
      this.props.currentUser ? (
        <Dashboard />
      ) : (
        <AuthContainer />
      )
    )
  }
}

export default withTracker(() => {
  return {
    currentUser: Meteor.user()
  }
})(App)
