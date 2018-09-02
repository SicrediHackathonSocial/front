import React, { Component } from 'react'
import { ObjetivoUsuarioItem } from 'app-components'
import { UserService } from 'app-services'

export class ObjetivosCompartilhados extends Component {
    constructor(props) {
        super(props)

        this.userService = new UserService()
        this.userService.projetosDoUsuario().then(res => console.log(res))
    }

    render() {
        return (
            <div className="objetivos">
                <ObjetivoUsuarioItem titulo="Viagem dos amigos" objetivos={[1, 2]}/>    
                <ObjetivoUsuarioItem titulo="Churrasco domingo" objetivos={[1, 2, 3, 4]}/>    
            </div>
        )
    }
}
