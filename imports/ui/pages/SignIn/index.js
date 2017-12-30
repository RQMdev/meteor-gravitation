import React from 'react'
import { Meteor } from 'meteor/meteor'

import Input from '../../components/Input'
import DisplayError from '../../components/DisplayError'
import { AuthService } from '../../../services/AuthService'

export default class SignIn extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      error: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    AuthService.callback = AuthService.callback.bind(this)
  }

  handleSubmit(e){
    e.preventDefault()
    const username = this.state.username,
          password = this.state.password
    Meteor.loginWithPassword(username, password, AuthService.callback)
  }

  render() {
    const error = this.state.error

    return (
      <form onSubmit={this.handleSubmit}>
        { !!error &&
          <DisplayError message={error} />
        }
        <Input
          id="username"
          type="text"
          onChange={username => this.setState({username})}
        />
        <Input
          id="password"
          type="password"
          onChange={password => this.setState({password})}
        />
        <input type="submit" value="Sign In"/>
      </form>
    )
  }
}
