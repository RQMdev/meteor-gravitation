import React from 'react'
import { NavLink } from 'react-router-dom'

import { styles } from './styles'

const AuthNav = () => (
  <nav style={styles.nav}>
    <NavLink
      exact
      to="/"
      style={styles.link}
      activeStyle={styles.active}
    >Sign In</NavLink>
    <NavLink
      to="/signup"
      style={styles.link}
      activeStyle={styles.active}
    >Sign Up</NavLink>
  </nav>
);

export default AuthNav
