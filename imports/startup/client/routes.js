import React from 'react'
import { Router, Route } from 'react-router'
import { createBrowserHistory } from 'history'

// route components
import App from '../../ui/App'

const browserHistory = createBrowserHistory();

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route exact path="/" component={App} />
  </Router>
);
