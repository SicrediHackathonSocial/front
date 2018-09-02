import React, { Component } from 'react'
import { ObjetivosUsuario, ObjetivosCompartilhados, Image } from 'app-components'
import { Route, Link } from 'react-router-dom'

import './styles.css'

export class HomePage extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      seusObjetivos: true,
      objetivosCompartilhados: false
    }
  }


  mudarObjetivosExibidos(seusObjetivos) {
    const objetivosCompartilhados = !seusObjetivos;
    this.setState({ seusObjetivos, objetivosCompartilhados });
  }


  render() {
    return (
      <div>
        <div className="toggle__tipos-objetivo">
          <button 
            onClick={() => this.mudarObjetivosExibidos(true)} 
            className={`toggle__tipos-objetivo-item ${ this.state.seusObjetivos && 'toggle__tipos-objetivo-item--ativo'}`}>
            Seus objetivos</button>
          <button 
            onClick={() => this.mudarObjetivosExibidos(false)} 
            className={`toggle__tipos-objetivo-item ${ !this.state.seusObjetivos && 'toggle__tipos-objetivo-item--ativo'}`}>
            Objetivos compartilhados</button>
        </div>
        { this.state.seusObjetivos ? <ObjetivosUsuario/> : <ObjetivosCompartilhados/>}

        <div className="home-footer">
        <div className="footer-item">
            <Route
              path="/home"
              exact={true}
              children={({ match }) => (
                <Link to="/home" label={this.props.label}>
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
              path="/meus-projetos"
              exact={true}
              children={({ match }) => (
                <Link match={match} to="/meus-projetos" label={this.props.label}>
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