import React from 'react'
import { Route, NavLink } from 'react-router-dom'

import LogOutButton from '../../components/LogOutButton'
import UsersOnline from '../../components/UsersOnline'
import Game from '../../components/Game'
import { styles } from './styles'

const Dashboard = () => (
  <div>
    <nav>
      <LogOutButton />
      <NavLink
        exact
        to="/"
        style={styles.link}
        activeStyle={styles.active}
      >Users Online</NavLink>
      <NavLink
        to="/game"
        style={styles.link}
        activeStyle={styles.active}
      >Play</NavLink>
    </nav>
    <Route path="/game" component={Game} />
    <Route exact path="/" component={UsersOnline} />
  </div>
)

export default Dashboard
