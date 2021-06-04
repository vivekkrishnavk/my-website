import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Home } from 'pages/Home/Home'

export const Routes = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
