import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { RouterService } from "app-services";

export default class App extends Component {
  render() {
    return (
      <section>
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
      </section>
    );
  }
}
