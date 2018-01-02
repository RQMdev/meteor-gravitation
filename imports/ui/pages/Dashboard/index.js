import React from 'react'
import { Route, NavLink } from 'react-router-dom'

import LogOutButton from '../../components/LogOutButton'
import UsersOnline from '../../components/UsersOnline'
import CustomNavLink from '../../components/CustomNavLink'
import GameWindow from '../../components/GameWindow'

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
    <Route path="/game" component={GameWindow} />
    <Route exact path="/" component={UsersOnline} />
  </div>
)

export default Dashboard
