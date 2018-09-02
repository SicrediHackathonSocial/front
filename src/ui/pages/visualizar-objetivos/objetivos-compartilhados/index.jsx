import React, { Component } from 'react'
import { ObjetivosCompartilhados, Image } from 'app-components'

import { Route, Link } from 'react-router-dom'

import EventEmitter from 'sm-event-emitter'

import './styles.css'

const emitChangePage = label => {
  EventEmitter.emit('CHANGE_PAGE_TITLE', label)
}

export class ObjetivosCompartilhadosPage extends Component {
  render() {
    return (
      <div>
        <ObjetivosCompartilhados></ObjetivosCompartilhados>

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
                <Link onClick={() => emitChangePage("Compartilhados")} match={match} to="/objetivos-compartilhados" label={this.props.label}>
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