import React, { Component } from 'react'
import CurrencyInput from 'react-currency-masked-input'

import './styles.css'

export class ObjetivoPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      questionStep: 1,
      objectiveName: '',
      objectiveValue: 0,
      objectiveType: '1',
      objectiveVisibility: '1'
    }
  }

  renderSelectObjectiveType() {
    return (
      <div>
        {this.renderProfile()}

        <div className="question">
          <div className="question-label">Você tem um objetivo?</div>

          <div className="options">
            <div className="option-group">
              <input
                checked={this.state.objectiveType === '1'}
                value="1"
                type="radio"
                name="objectiveType"
                id="objetivo-pessoal"
                onChange={e => this.inputChanged(e)}
              />
              <label htmlFor="objetivo-pessoal">
                tenho um objetivo pessoal
              </label>
            </div>

            <div className="option-group">
              <input
                checked={this.state.objectiveType === '2'}
                value="2"
                type="radio"
                name="objectiveType"
                id="objetivo-familia-amigos"
                onChange={e => this.inputChanged(e)}
              />
              <label htmlFor="objetivo-familia-amigos">
                tenho um objetivo com família ou amigos
              </label>
            </div>

            <div className="option-group">
              <input
                checked={this.state.objectiveType === '3'}
                value="3"
                type="radio"
                name="objectiveType"
                id="objetivo-ong"
                onChange={e => this.inputChanged(e)}
              />
              <label htmlFor="objetivo-ong">quero ajudar uma ONG</label>
            </div>
          </div>
        </div>
      </div>
    )
  }

  inputChanged(event, masked) {
    const value = event.target.value
    const name = event.target.name
    masked = masked && masked.replace('.', ',')

    this.setState({
      [name]: masked || value,
    })
  }

  renderProfile() {
    return (
      <div className="profile">
        <div
          className="profile-picture"
          style={{
            backgroundImage: `url(${localStorage.getItem('profilePicture')})`,
          }}
        />

        <span className="profile-name">Oi, Pedro</span>
      </div>
    )
  }

  renderTypeObjective() {
    return (
      <div>
        {this.renderProfile()}

        <div className="question">
          <div className="question-label">Qual o seu objetivo?</div>

          <div className="question-input-group">
            <input
              name="objectiveName"
              type="text"
              value={this.state.objectiveName}
              onChange={e => this.inputChanged(e)}
              className="question-input"
              maxLength="60"
            />
            <div className="question-input-length">
              {this.state.objectiveName.length}
              /60
            </div>
          </div>
        </div>
      </div>
    )
  }

  renderObjectiveValue() {
    return (
      <div>
        <div className="objective-name">{this.state.objectiveName}</div>

        <div className="question">
          <div className="question-label">
            De quanto você precisa para esse objetivo?
          </div>

          <div className="question-input-group question-input-group--money">
            <CurrencyInput
              type="text"
              name="objectiveValue"
              className="question-input"
              maxLength="9"
              value={this.state.objectiveValue}
              onChange={(e, m) => this.inputChanged(e, m)}
            />
          </div>
        </div>
      </div>
    )
  }

  renderWhoWillSee() {
    return (
      <div>
        <div className="objective-name">{this.state.objectiveName}</div>

        <div className="objective-goal">
          Preciso de <span>R$ {this.state.objectiveValue}</span>
        </div>

        <div className="question">
          <div className="question-label">Quem pode ver o seu objetivo?</div>

          <div className="options">
            <div className="option-group">
              <input
                checked={this.state.objectiveVisibility === '1'}
                onChange={e => this.inputChanged(e)}
                type="radio"
                value="1"
                name="objectiveVisibility"
                id="objetivo-somenteu-eu"
              />
              <label htmlFor="objetivo-somente-eu">somente eu</label>
            </div>

            <div className="option-group">
              <input
                checked={this.state.objectiveVisibility === '2'}
                onChange={e => this.inputChanged(e)}
                type="radio"
                value="2"
                name="objectiveVisibility"
                id="objetivo-qualquer-pessoa"
              />
              <label htmlFor="objetivo-qualquer-pessoa">qualquer pessoa</label>
            </div>
          </div>
        </div>
      </div>
    )
  }

  renderQuestion() {
    switch (this.state.questionStep) {
      case 1:
        return this.renderSelectObjectiveType()
      case 2:
        return this.renderTypeObjective()
      case 3:
        return this.renderObjectiveValue()
      case 4:
        return this.renderWhoWillSee()
      default:
        return null
    }
  }

  nextStep() {
    const questionStep = this.state.questionStep + 1

    this.setState({
      questionStep,
    })
  }

  checkNextStepEnabled() {
    switch (this.state.questionStep) {
      case 1:
        return !this.state.objectiveType
      case 2:
        return !this.state.objectiveName
      case 3:
        return !this.state.objectiveValue
      case 4:
        return !this.state.objectiveVisibility
      default:
        return null
    }
  }

  render() {
    return (
      <section className="page-objetivo">
        {this.renderQuestion()}

        <div className="footer">
          <div className="footer-label">
            Você pode adicionar mais objetivos depois :)
          </div>

          <button
            onClick={() => this.nextStep()}
            className={`button-footer ${this.checkNextStepEnabled() &&
              'button-footer--disabled'}`}
          >
            próximo
          </button>
        </div>
      </section>
    )
  }
}
