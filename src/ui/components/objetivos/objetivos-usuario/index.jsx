import React, { Component } from 'react'
import { ObjetivoUsuarioItem } from 'app-components'

import './styles.css'

export class ObjetivosUsuario extends Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        return (
            <div className="objetivos">
                <ObjetivoUsuarioItem titulo="Carro zero!" objetivos={[1, 2]}/>    
                <ObjetivoUsuarioItem titulo="Viagem para o Uruguai" objetivos={[1, 2, 3, 4]}/>    
                <ObjetivoUsuarioItem titulo="PC Gamer" objetivos={[1, 2, 3]}/>    
            </div>
        )
    }
}
