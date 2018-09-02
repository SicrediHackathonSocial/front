import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import { UserService } from 'app-services'

import './styles.css'

export class LoginPage extends Component {

  constructor(props) {
    super(props)

    this.userService = new UserService()

    this.state = {
      username: '',
      password: '',
      redirectHome: false
    }
  }

  inputChanged(event) {
    const value = event.target.value
    const name = event.target.name

    this.setState({
      [name]: value,
    })
  }

  login() {
    this.userService.login({
      username: this.state.username,
      password: this.state.password
    }).then(() => this.setState({ redirectHome: true }));
  }

  renderHeader() {
    return (
      <span>ARC</span>
    )
  }

  renderForm() {
    return (
      <div className="question">
        <div className="question-input-group">
          <input
            name="username"
            type="text"
            value={this.state.username}
            onChange={e => this.inputChanged(e)}
            className="question-input"
            maxLength="60"
            placeholder="Usuário"
          />

          <input
            name="password"
            type="password"
            value={this.state.password}
            onChange={e => this.inputChanged(e)}
            className="question-input"
            maxLength="60"
            placeholder="Senha"
          />
        </div>
      </div>
    )
  }

  renderFooter() {
    return (
      <div className="footer">
        <button className="button-footer" type="submit" onClick={() => this.login()}>
          Entrar
        </button>
      </div>
    )
  }

  renderForgotPassword() {
    return (
      <div className="action">
        <button className="as-link" onClick={() => alert('not implemented')}>esqueci a senha</button>
      </div>
    )
  }

  renderRegister() {
    return (
      <div className="action">
        <button className="as-link" onClick={() => alert('not implemented')}>criar conta</button>
      </div>
    )
  }

  render() {
    if(this.state.redirectHome) {
      return <Redirect to="/home" />
    }

    return (
      <div>

        {this.renderHeader()}

        {this.renderForm()}

        {this.renderForgotPassword()}

        {this.renderFooter()}

        {this.renderRegister()}

      </div>
    )
  }
}