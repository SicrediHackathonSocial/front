import React, { Component } from 'react'
import { ObjetivosUsuario, ObjetivosCompartilhados } from 'app-components'

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
      </div>
      
    )
  }
}