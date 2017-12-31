import React from 'react'
import { Meteor } from 'meteor/meteor'
import { withRouter } from 'react-router-dom'

import Input from '../../../components/Input'
import DisplayError from '../../../components/DisplayError'
import FormSubmit from '../../../components/FormSubmit'
import { AuthService } from '../../../../services/AuthService'

import { styles } from '../styles'

class SignIn extends React.Component {
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
          id="password"
          type="password"
          onChange={password => this.setState({password})}
        />
        <FormSubmit />
      </form>
    )
  }
}

export default withRouter(SignIn)
