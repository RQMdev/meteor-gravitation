import React from 'react'
import { Meteor } from 'meteor/meteor'
import { withTracker } from 'meteor/react-meteor-data'

import LogOutButton from './components/LogOutButton'
import UsersOnline from './components/UsersOnline'
import SignUp from './pages/authForm/SignUp'
import SignIn from './pages/authForm/SignIn'

class App extends React.Component {
  render() {
    return (
      <div>
        { !!this.props.currentUser &&
          <div>
            <LogOutButton />
            <UsersOnline />
          </div>
        }
        { !this.props.currentUser &&
          <div>
            <SignIn />
            <SignUp />
          </div>
        }
      </div>
    )
  }
}

export default withTracker(() => {
  return {
    currentUser: Meteor.user()
  }
})(App)
