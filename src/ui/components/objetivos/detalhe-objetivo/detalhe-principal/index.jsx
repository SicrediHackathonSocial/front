import React, { Component } from 'react'
import { ProjectService, UserService } from 'app-services'
import { CopyToClipboard } from 'react-copy-to-clipboard';

import EventEmitter from 'sm-event-emitter'

import './styles.css'

const styleContribuition = (percentage) => ({
    background: '#FCBF49',
    width: 'calc(' + percentage + '% - 1px',
    height: '9px',
    borderRadius: '6px',
})

const percent = (v1, v2) => {
    return v2 > 0 ? v1 / v2 * 100 : 0;
}

export class DetalhePrincipal extends Component {
    constructor(props) {
        super(props)

        this.state = {
            project: this.props.project,
            showShare: true,
            isShared: this.props.project.type === 'SHARED',
            estimate: null
        }

        this.projectService = new ProjectService()
        this.userService = new UserService()
        this.eventId
    }

    componentDidMount() {
        this.projectService.estimate(this.state.project.id)
           .then((response) => {
               const x = response.data.date.split('-');
               this.setState({ estimate: `${x[2]}/${x[1]}/${x[0]}` })
            })

        this.eventId = EventEmitter.on('REACHED_VALUE_CHANGED', value => {
            const newValue = this.state.project.reached + value

            this.setState({
                project: {
                    ...this.state.project,
                    reached: newValue
                }
            })
        })
    }

    componentWillUnmount() {
        EventEmitter.remove(this.eventId)
    }

    share() {
        this.setState({ showShare: false })
    }

    renderShare() {
        if (this.state.isShared) {

            if (this.state.showShare) {
                return (
                    <CopyToClipboard text={'http://localhost:3000/invite/' + this.state.project.id}
                    onCopy={() => this.setState({ showShare: false })}>
                    <button className="share-text as-link">(compartilhar)</button>
                </CopyToClipboard>
            )
                
            } else {
                return <span className="share-text">link copiado</span>
            }
        }
    }

    renderEstimate() {
        if (this.state.estimate) {
            return (
                <span className="share-text">previsão de conclusão em {this.state.estimate}</span>
            )
        }
    }
    
    render() {
        return (
            <div className="detalhe-principal-objetivo">
                <h1 className="detalhe-principal-objetivo-titulo">{this.state.project.title}</h1>
                {this.renderShare()}

                <div className="detalhe-principal-objetivo-values">
                    <h2 className="detalhe-principal-objetivo-reached">R$ {this.state.project.reached.toFixed(2)}</h2>
                    <h3 className="detalhe-principal-objetivo-target"> / R$ {this.state.project.target.toFixed(2)}</h3>
                    {this.renderEstimate()}
                </div>

                <div className="detalhe-principal-objetivo-progress-wrapper">
                    <div style={styleContribuition(percent(this.state.project.reached, this.state.project.target))}></div>
                </div>
            </div>
        )
    }
}
