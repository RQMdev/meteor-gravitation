import React from 'react'
import { Meteor } from 'meteor/meteor'
import { withTracker } from 'meteor/react-meteor-data'
import { Route } from 'react-router-dom'

import Games from '../api/collections/Games'
import Game from '../phaser/Game'
import GameWindow from './components/GameWindow'
import Dashboard from './pages/Dashboard'
import AuthContainer from './pages/authForm/AuthContainer'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      gameVisible: false,
    }
    this.switchGameVisible = this.switchGameVisible.bind(this)
  }

  async switchGameVisible() {
    await this.setState(function(){
      return {gameVisible: !this.state.gameVisible}
    });
    const gameId = await Meteor.callPromise('Games.create')
    this.state.gameVisible ?
    Meteor.call('Games.newPlayer', gameId)
    :
    Meteor.call('Games.removePlayer', gameId);
  }

  componentDidMount(){
    console.log(this.props.games)
    if (this.props.games){

    }
  }

  render() {
    return (
      <div>
        {this.props.currentUser ? (
            <Dashboard switchGameVisible={this.switchGameVisible} />
          ) : (
            <AuthContainer />
          )
        }

        <GameWindow visible={this.state.gameVisible} />
      </div>
    )
  }
}

export default withTracker(() => {
  Meteor.subscribe('games')
  return {
    games: Games.find().fetch(),
    currentUser: Meteor.user(),
  }
})(App)
