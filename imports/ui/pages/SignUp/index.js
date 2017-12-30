import React from 'react'
import { Accounts } from 'meteor/accounts-base'

import Input from '../../components/Input'
import DisplayError from '../../components/DisplayError'

export default class SignUp extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      error: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e){
    e.preventDefault();
    const equalPwd = this.state.password === this.state.confirmation
    if (!equalPwd) return this.setState({error: "Passwords don't match."})
    console.log(this.state)
    const options = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    }
    const callback = (error) => {
      if (error){
        this.setState({error: error.reason});
      }
    }
    Accounts.createUser(options, callback);
  }

  render() {
    const displayError = '';
    if (this.state.error){
      displayError = <DisplayError message={this.state.error} />
    }

    return (
      <form onSubmit={this.handleSubmit}>
        {displayError}
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
