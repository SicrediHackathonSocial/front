import React from 'react'
import { Switch, Route, Redirect } from "react-router-dom";
import { RouterService } from "app-services";

export const Main = () => (
  <Switch>
    {RouterService.ROUTES.map((route, key) => (
      <Route
        key={key}
        exact={route.exact}
        path={route.path}
        component={route.component}
      />
    ))}

    <Redirect from="/" to="/home" />
  </Switch>
)