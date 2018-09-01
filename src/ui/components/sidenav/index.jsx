import React, { Component } from 'react'
import { RouterService } from 'app-services'
import { Link } from 'react-router-dom'
import { Image } from 'app-components'

import './styles.css'

export class Sidenav extends Component {
  constructor(props) {
    super(props)

    this.state = {
      open: false,
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
              <li key={key}>
                <Link to={route.path}>
                  {route.name}
                </Link>
              </li>
            ),
          )}
        </ul>
      </div>
    )
  }
}
