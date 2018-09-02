import React, { Component } from 'react'
import { ObjetivoUsuarioItem } from 'app-components'
import { UserService } from 'app-services'

import './styles.css'

const percent = (v1, v2) => {
    return v2 > 0 ? v1 / v2 * 100 : 0;
}

export class ObjetivosUsuario extends Component {
    constructor(props) {
        super(props)

        this.state = {}
        this.userService = new UserService()
        this.userService.projetosDoUsuario().then(res => this.setState({ projetos: res.data }))
    }

    render() {
        return (
            <div className="objetivos">
                {
                    this.state.projetos && this.state.projetos.map((proj, key) => 
                        <ObjetivoUsuarioItem key={key} project={proj} totalPercentage={percent(proj.reached,proj.target)} titulo={proj.title} objetivos={proj.goals}/>) 
                } 
            </div>
        )
    }
}
