import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'

import EventEmitter from 'sm-event-emitter'

import './styles.css'

const emitChangePage = (label, onClick) => {
  EventEmitter.emit('CHANGE_PAGE_TITLE', label)
}

const MenuLink = ({ match, to, label }) => (
  <li
    className={`sidenav__menu__item ${
      match ? 'sidenav__menu__item--active' : ''
    }`}
  >
    <Link onClick={() => emitChangePage(label)} to={to}>
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
