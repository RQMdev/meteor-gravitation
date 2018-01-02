import React from 'react'
import { Route, NavLink } from 'react-router-dom'

import LogOutButton from '../../components/LogOutButton'
import UsersOnline from '../../components/UsersOnline'
import CustomNavLink from '../../components/CustomNavLink'
import Game from '../../components/Game'

import { styles } from './styles'

const Dashboard = () => (
  <div>
    <nav style={styles.nav}>
      <LogOutButton />
      <CustomNavLink
        exact={true}
        to="/"
        label="Users Online"
      />
      <CustomNavLink
        to="/game"
        label="Play"
      />
    </nav>
    <Route path="/game" component={Game} />
    <Route exact path="/" component={UsersOnline} />
  </div>
)

export default Dashboard
