import React from 'react'
import { Meteor } from 'meteor/meteor'
import { withTracker } from 'meteor/react-meteor-data'
import { Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

import LogOutButton from './components/LogOutButton'
import UsersOnline from './components/UsersOnline'
import AuthNav from './pages/authForm/AuthNav'
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
          <AuthNav />
            <Switch>
              <Route exact path="/" component={SignIn}/>
              <Route path="/signup" component={SignUp}/>
            </Switch>
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
