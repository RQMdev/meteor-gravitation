import React from 'react'
import { Router } from 'react-router'
import { createBrowserHistory } from 'history'

import App from '../../ui/App'

const browserHistory = createBrowserHistory();

export const renderRouter = () => (
  <Router history={browserHistory}>
    <App />
  </Router>
);
