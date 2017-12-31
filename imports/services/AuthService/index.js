export const AuthService = {
  callback: function(error) {
    if (error){
      this.setState({error: error.reason})
    } else {
      this.setState({error: ''})
      // this.props.history.push('/dashboard')
    }
  }
}
