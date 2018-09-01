import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'

export class NavButton extends Component {
  render() {
    return (
      <Route path={this.props.to} exact={this.props.activeOnlyWhenExact} children={({ match }) => (
        <li className={`sidenav__menu__item ${match ? 'sidenav__menu__item--active' : ''}`}>
          <Link to={this.props.to}>
            <span className="sidenav__menu__item__link">{this.props.label}</span>
          </Link>
        </li>
      )}/>
    )
  }
}