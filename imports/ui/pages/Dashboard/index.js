import React from 'react'
import { Link } from 'react-router-dom'

import LogOutButton from '../../components/LogOutButton'
import UsersOnline from '../../components/UsersOnline'

const Dashboard = () => (
  <div>
    <nav>
      <LogOutButton />
      <Link to="">Play</Link>
    </nav>
    <UsersOnline />
  </div>
)

export default Dashboard
