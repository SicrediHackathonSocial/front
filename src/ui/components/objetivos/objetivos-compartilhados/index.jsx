import React, { Component } from 'react'
import { ObjetivoUsuarioItem } from 'app-components'

export class ObjetivosCompartilhados extends Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        return (
            <div className="objetivos">
                <ObjetivoUsuarioItem titulo="Viagem dos amigos" objetivos={[1, 2]}/>    
                <ObjetivoUsuarioItem titulo="Churrasco domingo" objetivos={[1, 2, 3, 4]}/>    
            </div>
        )
    }
}
