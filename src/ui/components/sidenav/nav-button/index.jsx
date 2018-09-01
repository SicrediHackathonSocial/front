import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'

import './styles.css'

const MenuLink = ({ match, to, label }) => (
  <li
    className={`sidenav__menu__item ${
      match ? 'sidenav__menu__item--active' : ''
    }`}
  >
    <Link to={to}>
      <span className="sidenav__menu__item__link">{label}</span>
    </Link>
  </li>
)

export class NavButton extends Component {
  render() {
    return (
      <Route
        path={this.props.to}
        exact={this.props.activeOnlyWhenExact}
        children={({ match }) => (
          <MenuLink match={match} to={this.props.to} label={this.props.label} />
        )}
      />
    )
  }
}
