import React, { Component } from 'react'

import EventEmitter from 'sm-event-emitter'

import './styles.css'

const getContribuidores = (project) => {

    const contribuidores = [];

    project.goals.forEach(goal => {
        goal.contribuitions.forEach(contribuition => {
            contribuidores.push(contribuition.contribuitor)
        })
    })

    return contribuidores

}

export class Contribuidores extends Component {
    constructor(props) {
        super(props)

        this.state = {
            project: this.props.project
        };

        this.eventId
    }

    render() {
        return (
            <div className="contribuidores">
                <h2 className="contribuidores-titulo">Contribuidores</h2>

                <div className="contribuidores-wrapper">
                <ul>
                {
                    getContribuidores(this.state.project)
                    .map((contribuidor, key) => (
                            <li key={key}>{contribuidor.username}</li>
                    ))
                }
                </ul>
                </div>
            </div>
        )
    }
}
