import React, { Component } from 'react'
import { SubObjetivoCompleto, SubObjetivoPendente } from 'app-components'

import EventEmitter from 'sm-event-emitter'

import './styles.css'

export class SubObjetivos extends Component {
    constructor(props) {
        super(props)

        this.state = {
            project: this.props.project
        };

        this.eventId
    }

    componentWillMount() {
        this.eventId = EventEmitter.on('GOAL_STATUS', ({ goalId, goalStatus }) => {
            const goal = this.state.project.goals.find(g => g.id === goalId)
            const index = this.state.project.goals.indexOf(goal)
            const goals = this.state.project.goals

            goals[index].status = goalStatus

            this.setState({
                project: {
                    ...this.state.project,
                    goals
                }
            })
        })
    }

    componentWillUnmount() {
        EventEmitter.remove(this.eventId)
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
