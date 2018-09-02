import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { RouterService } from 'app-services'
import { Image, Profile } from 'app-components'
import { NavButton } from './nav-button'
import EventEmitter from 'sm-event-emitter'

import { UserService } from 'app-services'

import './styles.css'

export class Sidenav extends Component {
  constructor(props) {
    super(props)

    this.userService = new UserService()

    this.state = {
      open: false,
      redirectLogout: false,
      userLogged: !!UserService.getUserLogado()
    }
  }

  componentDidMount() {
    EventEmitter.on('USER_LOGIN', () => {
      this.setState({
        open: false,
        redirectLogout: false,
        userLogged: true
      })
    })

    EventEmitter.on('USER_LOGOUT', () => {
      this.setState({
        open: false,
        userLogged: false
      })
    })

    EventEmitter.on('CHANGE_PAGE_TITLE', () => {
      debugger
      this.hideSidenav()
    })
  }

  toggleSidenav() {
    const open = !this.state.open

    this.setState({ open })
  }

  hideSidenav() {
    this.setState({
      open: false
    })
  }

  logout() {
    this.userService.logout()
    this.setState({ redirectLogout: true })
  }

  renderIcon() {
    if(this.state.open) {
      return Image.ICONS.Close
    } else {
      return Image.ICONS.Menu
    }
  }

  render() {
    if(this.state.redirectLogout) {
      return <Redirect to="/login" />
    }

    if (!this.state.userLogged) {
      return null
    }

    return (
      <div className={`sidenav ${this.state.open && 'sidenav--visible'}`}>
        <div className="sidenav__toggler">
          <button onClick={() => this.toggleSidenav()}>{this.renderIcon()}</button>
        </div>
        <Profile/>
        <ul className="sidenav__links">
          {RouterService.ROUTES.filter(route => !route.hideOnMenu).map(
            (route, key) => (
              <NavButton key={key} to={route.path} activeOnlyWhenExact={route.exact} label={route.name} />
            ),
          )}
          <li className="sidenav__menu__item"><a href="#" onClick={() => this.logout()}>Logout</a></li>
        </ul>
      </div>
    )
  }
}
