import React, { Component } from 'react'
import { RouterService } from 'app-services'
import { Image } from 'app-components'
import { NavButton } from './nav-button'

import './styles.css'

export class Sidenav extends Component {
  constructor(props) {
    super(props)

    this.state = {
      open: true,
    }
  }

  toggleSidenav() {
    const open = !this.state.open

    this.setState({ open })
  }

  renderIcon() {
    if(this.state.open) {
      return Image.ICONS.Close
    } else {
      return Image.ICONS.Menu
    }
  }

  render() {
    return (
      <div className={`sidenav ${this.state.open && 'sidenav--visible'}`}>
        <div className="sidenav__toggler">
          <button onClick={() => this.toggleSidenav()}>{this.renderIcon()}</button>
        </div>

        <ul>
          {RouterService.ROUTES.filter(route => !route.hideOnMenu).map(
            (route, key) => (
              <NavButton key={key} to={route.path} activeOnlyWhenExact={route.exact} label={route.name} />
            ),
          )}
        </ul>
      </div>
    )
  }
}
