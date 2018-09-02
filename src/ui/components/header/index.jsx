import React, { Component } from 'react'
import EventEmitter from 'sm-event-emitter'

import { RouterService } from 'app-services'

import './styles.css'

export class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      pageTitle: null
    }
  }

  componentWillMount() {
    EventEmitter.on('CHANGE_PAGE_TITLE', pageTitle => {
      this.setState({
        pageTitle
      })
    })
  }
  
  componentDidMount() {
    const pathname = window.location.pathname
    const routes = RouterService.ROUTES
    const a = routes.find(r => r.path === pathname)
    const pageTitle = a ? a.name : 'ARC'
  
    this.setState({
      pageTitle
    })
  }

  render() {
    return (
      <div className="header">
        <div className="header__page-title">
          { this.state.pageTitle }
        </div>
      </div>
    )
  }
}