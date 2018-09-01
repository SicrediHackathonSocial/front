import React, { Component } from "react"
import { Main } from 'app-components'
import { RouterService } from 'app-services'
import { Link } from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <section>
        <ul>
          {
            RouterService.ROUTES.filter(route => !route.hideOnMenu).map((route, key) =>
              (
                <li>
                  <Link key={key} to={route.path}>{ route.name }</Link>
                </li>
              )
            )
          }
        </ul>

        <Main />
      </section>
    );
  }
}
