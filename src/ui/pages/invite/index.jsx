import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import { UserService, ProjectService } from 'app-services'

import './styles.css'

const getLinkHome = (id) => ({
  pathname: '/home',
  invite: id
})

const getLinkLogin = (id) => ({
  pathname: '/login',
  invite: id
})

export class InvitePage extends Component {

  constructor(props) {
    super(props)

    this.userService = new UserService()
    this.projectService = new ProjectService()

    const isLogged = !!UserService.getUserLogado()

    this.state = {
      redirectHome: isLogged,
      redirectLogin: !isLogged,
      idInvite: this.props.match.params.id
    }

  }

  componentDidMount() {

    if (this.state.idInvite && UserService.getUserLogado()) {
      this.projectService
        .membership(this.state.idInvite, UserService.getUserLogado().username)
          .then(() => {
            this.setState({redirectHome: true})
          }).catch(() => {
            this.setState({redirectLogin: true})
          })
    } 

  }

  render() {
    if (this.state.redirectHome) {
      return <Redirect to={getLinkHome(this.state.idInvite)} />
    }

    if (this.state.redirectLogin) {
      return <Redirect to={getLinkLogin(this.state.idInvite)} />
    }

    return (
      <div>
        invite: {this.state.idInvite}
      </div>
    )
  }
}