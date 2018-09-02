import React, { Component } from 'react'
import { SubObjetivoCompleto, SubObjetivoPendente } from 'app-components'

import './styles.css'

export class SubObjetivos extends Component {
    constructor(props) {
        super(props)

        this.state = {
            project: this.props.project
        };
    }

    renderPendentes() {
        const pendentes = this.state.project.goals.filter(g => g.status === 'EM_ANDAMENTO');

        if (pendentes.length) {
            return (
                <div className="sub-objetivos-pendentes">
                    <h3 className="sub-objetivos-pendentes-titulo">Pendentes</h3>
                    { pendentes.map((goal, key) => <SubObjetivoPendente key={key} project={this.state.project} goal={goal} />) }
                </div>
            )
        }
    }

    renderCompletos() {
        const concluidos = this.state.project.goals.filter(g => g.status === 'CONCLUIDO');

        if (concluidos.length) {
            return (
                <div className="sub-objetivos-completos">
                    <h3 className="sub-objetivos-completos-titulo">Completos</h3>
                    { concluidos.map((goal, key) => <SubObjetivoCompleto key={key} project={this.state.project} goal={goal} />) }
                </div>
            )
        }
    }

    render() {
        return (
            <div className="sub-objetivos">
                <h2 className="sub-objetivos-titulo">Objetivos</h2>

                { this.renderPendentes() } 

                { this.renderCompletos() } 

            </div>
        )
    }
}
