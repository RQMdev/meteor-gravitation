import React from 'react'
import { Meteor } from 'meteor/meteor'
import { withTracker } from 'meteor/react-meteor-data'

import LogOutButton from './components/LogOutButton'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'

class App extends React.Component {
  render() {

    return (
      <div>
        <h1>App's Here !!</h1>
        { !!this.props.currentUser &&
          <LogOutButton />
        }
        <h2>Sign Up</h2>
        <SignUp />
        <h2>Sign In</h2>
        <SignIn />
      </div>
    )
  }
}

export default withTracker(() => {
  return {
    currentUser: Meteor.user()
  }
})(App)
