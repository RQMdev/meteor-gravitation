import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
// import { createBrowserHistory } from 'history'

import App from '../../ui/App'

// const browserHistory = createBrowserHistory();

export const renderRouter = () => (
  <BrowserRouter
    // history={browserHistory}
  >
    <Route component={App} />
  </BrowserRouter>
);
