import React, { Component } from 'react'
import { ObjetivoUsuarioItem } from 'app-components'
import { UserService } from 'app-services'

export class ObjetivosCompartilhados extends Component {
    constructor(props) {
        super(props)

        this.state = {}
        this.userService = new UserService()
        this.userService.projetosCompartilhadosComUsuario().then(res => this.setState({ projetos: res.data }))
    }

    render() {
        return (
            <div className="objetivos">
                {
                    this.state.projetos && this.state.projetos.map((proj, key) => 
                        <ObjetivoUsuarioItem key={key} titulo={proj.title} objetivos={proj.goals}/>)
                }
            </div>
        )
    }
}
