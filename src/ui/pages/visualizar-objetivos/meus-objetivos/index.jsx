import React, { Component } from 'react'
import { ObjetivosUsuario, Image } from 'app-components'

import EventEmitter from 'sm-event-emitter'

import { Route, Link } from 'react-router-dom'

import { UserService, ProjectService } from 'app-services'

import './styles.css'

const emitChangePage = label => {
  EventEmitter.emit('CHANGE_PAGE_TITLE', label)
}

export class MeusObjetivosPage extends Component {
  
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: '',
      redirectHome: false,
      invite: this.props.location.invite
    }

    this.userService = new UserService()
    this.projectService = new ProjectService()

  }

  componentDidMount() {

    if (this.state.invite) {
      this.projectService
        .membership(this.state.invite, UserService.getUserLogado().username)
          .catch(error => {
            console.log('membership error', error)
          })
    }
  }

  render() {
    return (
      <div>
        <ObjetivosUsuario></ObjetivosUsuario>

        <div className="home-footer">
          <div className="footer-item">
            <Route
              path="/meus-objetivos"
              exact={true}
              children={({ match }) => (
                <Link onClick={() => emitChangePage("Meus projetos")} to="/meus-objetivos" label={this.props.label}>
                  <div className={match && 'footer-item--active'}>
                    { Image.ICONS.Profile }
                    <span>Meus projetos</span>
                  </div>
                </Link>
              )}
            />
          </div>
          <div className="footer-item">
            <Route
              path="/objetivos-compartilhados"
              exact={true}
              children={({ match }) => (
                <Link onClick={() => emitChangePage("Objetivos Compartilhados")} match={match} to="/objetivos-compartilhados" label={this.props.label}>
                  <div className={match && 'footer-item--active'}>
                    { Image.ICONS.Profile }
                    <span>Compartilhados</span>
                  </div>
                </Link>
              )}
            />
          </div>
          <div className="footer-item">
            <Route
              path="/meus-projetos"
              exact={true}
              children={({ match }) => (
                <Link onClick={() => emitChangePage("ONGs")} match={match} to="/meus-projetos" label={this.props.label}>
                  <div className={match && 'footer-item--active'}>
                    { Image.ICONS.Profile }
                    <span>ONGs</span>
                  </div>
                </Link>
              )}
            />
          </div>
        </div>
      </div>
    )
  }
}