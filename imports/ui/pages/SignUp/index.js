import React from 'react'
import { Accounts } from 'meteor/accounts-base'

import Input from '../../components/Input'
import DisplayError from '../../components/DisplayError'
import { AuthService } from '../../../services/AuthService'

import { styles } from './styles'

export default class SignUp extends React.Component {
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
    const equalPwd = this.state.password === this.state.confirmation
    if (!equalPwd) return this.setState({error: "Passwords don't match."})
    const options = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    }
    Accounts.createUser(options, AuthService.callback)
  }

  render() {
    const error = this.state.error

    return (
      <form onSubmit={this.handleSubmit} style={styles.form}>
        { !!error &&
          <DisplayError message={error} />
        }
        <Input
          id="username"
          type="text"
          onChange={username => this.setState({username})}
        />
        <Input
          id="email"
          type="text"
          onChange={email => this.setState({email})}
        />
        <Input
          id="password"
          type="password"
          onChange={password => this.setState({password})}
        />
        <Input
          id="confirmation"
          type="password"
          onChange={confirmation => this.setState({confirmation})}
        />
        <input type="submit" value="Sign Up"/>
      </form>
    )
  }
}
