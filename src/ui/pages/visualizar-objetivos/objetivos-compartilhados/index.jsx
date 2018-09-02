import React, { Component } from 'react'
import { ObjetivosCompartilhados, Image } from 'app-components'

import { Route, Link } from 'react-router-dom'

import './styles.css'

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
                <Link to="/meus-objetivos" label={this.props.label}>
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
                <Link match={match} to="/objetivos-compartilhados" label={this.props.label}>
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
                <Link match={match} to="/meus-projetos" label={this.props.label}>
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