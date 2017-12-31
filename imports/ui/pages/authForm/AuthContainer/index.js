import React from 'react'
import { Switch, Route } from 'react-router-dom'

import AuthNav from '../AuthNav'
import SignUp from '../SignUp'
import SignIn from '../SignIn'

const AuthContainer = () => (
  <div>
    <AuthNav />
    <Switch>
      <Route exact path="/" component={SignIn}/>
      <Route path="/signup" component={SignUp}/>
    </Switch>
  </div>
);

export default AuthContainer
