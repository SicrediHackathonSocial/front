import React, { Component } from 'react'
import { GoalService } from 'app-services'
import CurrencyInput from 'react-currency-masked-input'

import EventEmitter from 'sm-event-emitter'

import './styles.css'

const stylePercentage = percentage => ({
  width: 'calc(' + percentage + '% - 1px',
})

const percent = (v1, v2) => {
  return v2 > 0 ? (v1 / v2) * 100 : 0
}

const styleContribuition = percentage => ({
  background: '#FCBF49',
  width: 'calc(' + percentage + '% - 1px',
  height: '5px',
  borderRadius: '0',
})

export class SubObjetivoPendente extends Component {
  constructor(props) {
    super(props)

    this.goalService = new GoalService()
    this.state = {
      project: this.props.project,
      goal: this.props.goal,
      modalAtiva: false,
    }
  }

  inputChanged(event, masked) {
    const value = event.target.value
    const name = event.target.name
    masked = masked && masked.replace('.', ',')

    this.setState({
      [name]: masked || value,
    })
  }

  save() {
    this.goalService.inserirValor({
        idGoal: this.state.goal.id, 
        value: this.state.goalValue 
    }).then((result) => {
        const parsedValue = parseFloat(this.state.goalValue.replace(',', '.'))

        this.setState({
            modalAtiva: false,
            goal: {
                ...this.state.goal,
                reached: this.state.goal.reached + parsedValue
            }
        })

        EventEmitter.emit('REACHED_VALUE_CHANGED', parsedValue)
        EventEmitter.emit('GOAL_STATUS', {
            goalId: this.state.goal.id,
            goalStatus: result.data.goalStatus
        })
    })
  }

  modalAdicionarValor() {
    return (
      <div>
        <div className="modal-overlay" />
        <div className="modal-content">
          <div className="detalhe-principal-objetivo-progress-wrapper">
            <div
              style={styleContribuition(
                percent(this.state.goal.reached, this.state.goal.target),
              )}
            />
          </div>
          <div
            className="modal__x"
            onClick={() => this.setState({ modalAtiva: false })}
          >
            ✕
          </div>
          <div className="modal-content__parte-superior">
            <p className="titulo">{this.state.goal.title}</p>
            <div className="detalhe-principal-objetivo-values">
              <h2 className="detalhe-principal-objetivo-reached">
                R$ {this.state.goal.reached.toFixed(2)}
              </h2>
              <h3 className="detalhe-principal-objetivo-target">
                {' '}
                / R$ {this.state.goal.target.toFixed(2)}
              </h3>
            </div>
          </div>
          <div className="modal-content__parte-inferior">
            <p className="titulo">Quanto você deseja adicionar?</p>
            <div className="question-input-group question-input-group--money">
              <CurrencyInput
                type="text"
                name="goalValue"
                className="question-input"
                maxLength="9"
                value={this.state.goalValue}
                onChange={(e, m) => this.inputChanged(e, m)}
                placeholder="1000,00"
              />
            </div>
            <div className="button-holder">
              <button className="button-conf" onClick={() => this.save()}>
                confirmar
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="sub-objetivo">
        <div className="sub-objetivo-progress-wrapper">
          <div
            className="sub-objetivo-progress"
            style={stylePercentage(
              percent(this.state.goal.reached, this.state.goal.target),
            )}
          />
        </div>

        <div className="sub-objetivo-pendente">
          <span className="sub-objetivo-pendente-text">
            {this.state.goal.title}
          </span>
          <div
            className="sub-objetivo-button-wrapper"
            onClick={() => this.setState({ modalAtiva: true })}
          >
            <div className="sub-objetivo-button" />
          </div>
        </div>
        {this.state.modalAtiva && this.modalAdicionarValor()}
      </div>
    )
  }
}
