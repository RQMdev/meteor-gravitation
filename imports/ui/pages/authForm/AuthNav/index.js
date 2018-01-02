import React from 'react'

import CustomNavLink from '../../../components/CustomNavLink'
import { styles } from './styles'

const AuthNav = () => (
  <nav style={styles.nav}>
    <CustomNavLink
      exact={true}
      to="/"
      label="Sign In"
    />
    <CustomNavLink
      to="/signup"
      label="Sign Up"
    />
  </nav>
);

export default AuthNav
