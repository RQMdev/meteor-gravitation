import React from 'react'
import { Route, NavLink } from 'react-router-dom'

import Button from '../../components/Button'
import UsersOnline from '../../components/UsersOnline'
import CustomNavLink from '../../components/CustomNavLink'

import { styles } from './styles'

const Dashboard = ({switchGameVisible}) => (
  <div>
    <nav style={styles.nav}>
      <Button label="Log Out" onClick={Meteor.logout} />
      <Button label="Play" onClick={switchGameVisible} />
    </nav>
    <UsersOnline />
  </div>
)

export default Dashboard
