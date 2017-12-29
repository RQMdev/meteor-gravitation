import React from 'react'

import Input from '../../components/Input'

export default class SignUp extends React.Component {
  constructor(props){
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e){
    e.preventDefault()
    console.log(this.refs)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          id="username"
          type="text"
          onChange={username => this.setState({username}, console.log(this.state))}
        />
        <Input id="email" type="text" />
        <Input id="password" type="password" />
        <Input id="confirmation" type="password" />
        <input type="submit" value="Sign Up"/>
      </form>
    )
  }
}
