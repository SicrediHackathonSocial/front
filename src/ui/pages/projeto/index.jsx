import React, { Component } from 'react'
import CurrencyInput from 'react-currency-masked-input'
import { Image } from 'app-components'

import './styles.css'

export class ProjetoPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      questionStep: 1,
      description: '',
      goals: [],
      goalDescription: '',
      goalValue: null,
      type: 'PRIVATE',
      visibility: 'PRIVATE'
    }
  }

  renderSelectProjectType() {
    return (
      <div>
        {this.renderProfile()}

        <div className="question">
          <div className="question-label">Você tem um projeto financeiro?</div>

          <div className="options">
            <div className="option-group">
              <input
                checked={this.state.type === 'PRIVATE'}
                value="PRIVATE"
                type="radio"
                name="type"
                id="objetivo-pessoal"
                onChange={e => this.inputChanged(e)}
              />
              <label htmlFor="objetivo-pessoal">
                tenho um projeto pessoal
              </label>
            </div>

            <div className="option-group">
              <input
                checked={this.state.type === 'SHARED'}
                value="SHARED"
                type="radio"
                name="type"
                id="objetivo-familia-amigos"
                onChange={e => this.inputChanged(e)}
              />
              <label htmlFor="objetivo-familia-amigos">
                tenho um projeto com família ou amigos
              </label>
            </div>

            <div className="option-group">
              <input
                checked={this.state.type === 'PUBLIC'}
                value="PUBLIC"
                type="radio"
                name="type"
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

  renderTypeProject() {
    return (
      <div>
        {this.renderProfile()}

        <div className="question">
          <div className="question-label">Qual o seu projeto?</div>

          <div className="question-input-group">
            <input
              name="description"
              type="text"
              value={this.state.description}
              onChange={e => this.inputChanged(e)}
              className="question-input"
              maxLength="60"
              placeholder="ex: comprar uma casa nova"
            />
            <div className="question-input-length">
              {this.state.description.length}
              /60
            </div>
          </div>
        </div>
      </div>
    )
  }

  renderProjectValue() {
    return (
      <div>
        <div className="project-name">{this.state.description}</div>

        <div className="question">
          <div className="question-label">
            De quanto você precisa para esse projeto?
          </div>

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
        </div>
      </div>
    )
  }

  renderObjectives() {
    return (
      <div className="objectives">
        {
          this.state.goals.map((goal, k) => (
            <div className="objective">
              <div className="objective-index">{k + 1}</div>

              <div className="objective-sumary">
                <div className="objective-title">{goal.title}</div>
                <div className="objective-value">R$ {goal.target}</div>
              </div>
            </div>
          ))
        }
      </div>
    )
  }

  renderGoalValue() {
    return (
      <div>
        <div className="project-name">{this.state.description}</div>

        { this.renderObjectives() }

        <div className="question">
          <div className="question-label">
            De quanto você precisa para esse objetivo?
          </div>

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
        </div>
      </div>
    )
  }

  renderGoalDescription() {
    return (
      <div>
        <div className="project-name">{this.state.description}</div>

        { this.renderObjectives() }

        <div className="question">
          <div className="question-label">
            {
              this.state.goals.length === 0 ?
                'Tente dividi-lo em objetivos menores' :
                'Cadastre um objetivo'
            }
          </div>

          <div className="question-input-group">
            <input
              name="goalDescription"
              type="text"
              value={this.state.goalDescription}
              onChange={e => this.inputChanged(e)}
              className="question-input"
              maxLength="60"
              placeholder="ex: pagar a entrada da casa nova"
            />
            <div className="question-input-length">
              {this.state.goalDescription.length}
              /60
            </div>
          </div>
        </div>
      </div>
    )
  }

  renderWhoWillSeeProject() {
    return (
      <div>
        <div className="project-name">{this.state.description}</div>

        <div className="project-goal">
          <div className="goals-length">{this.state.goals.length} objetivos</div>
          <div>Total de <span>R$ {this.state.goals.reduce((a, i) => a += parseFloat(i.target.replace(',', '.')), 0).toString().replace('.', ',')}</span></div>
        </div>

        <div className="question">
          <div className="question-label">Quem pode ver o seu projeto?</div>

          <div className="options">
            <div className="option-group">
              <input
                checked={this.state.visibility === 'PRIVATE'}
                onChange={e => this.inputChanged(e)}
                type="radio"
                value="PRIVATE"
                name="visibility"
                id="objetivo-somente-eu"
              />
              <label htmlFor="objetivo-somente-eu">somente eu</label>
            </div>

            <div className="option-group">
              <input
                checked={this.state.visibility === 'PUBLIC'}
                onChange={e => this.inputChanged(e)}
                type="radio"
                value="PUBLIC"
                name="visibility"
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
        return this.renderSelectProjectType()
      case 2:
        return this.renderTypeProject()
      case 3:
        return this.renderGoalDescription()
      case 4:
        return this.renderGoalValue()
      case 10:
        return this.renderProjectValue()
      case 11:
        return this.renderWhoWillSeeProject()
      default:
        return null
    }
  }

  nextStep() {
    if(this.state.questionStep === 10) {
      const questionStep = this.state.questionStep + 1
      const newGoal = {
        title: this.state.description,
        target: this.state.goalValue
      }

      const goals = this.state.goals
      goals.push(newGoal)

      this.setState({
        goals,
        customNextStep: null,
        questionStep
      })

      return
    }

    if(this.state.questionStep === 4) {
      const questionStep = 3
      const newGoal = {
        title: this.state.goalDescription,
        target: this.state.goalValue
      }

      const goals = this.state.goals
      goals.push(newGoal)

      this.setState({
        goals,
        customNextStep: null,
        questionStep,
        goalDescription: '',
        goalValue: null
      })

      return
    }

    if(this.state.questionStep === 11) {
      console.log(this.state.goals)
      return
    }

    const questionStep = this.state.questionStep + 1

    this.setState({
      questionStep,
    })
  }

  backStep() {
    const questionStep = this.state.questionStep - 1

    this.setState({
      questionStep,
    })
  }

  goToStep(questionStep) {
    this.setState({
      questionStep
    })
  }

  checkNextStepEnabled() {
    switch (this.state.questionStep) {
      case 1:
        return !this.state.type
      case 2:
        return !this.state.description
      case 3:
        return !this.state.goalDescription
      case 4:
        return !this.state.goalValue
      default:
        return null
    }
  }

  render() {
    return (
      <section className="page-objetivo">
        {
          this.state.questionStep > 1 && (
            <button className="back-step-button" onClick={() => this.backStep()}>
              {Image.ICONS.Back}
            </button>
          )
        }

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
            {this.state.questionStep !== 10 ? 'próximo' : 'pronto'}
          </button>

          {
            this.state.questionStep === 3 && this.state.goals.length === 0 && (
              <button onClick={() => this.goToStep(10)} className="button-transparent">não quero dividir</button>
            )
          }

          {
            this.state.questionStep === 3 && this.state.goals.length > 0 && (
              <button onClick={() => this.goToStep(11)} className="button-transparent">finalizar cadastro</button>
            )
          }
        </div>
      </section>
    )
  }
}
