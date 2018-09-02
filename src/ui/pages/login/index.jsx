import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import { UserService } from 'app-services'

import './styles.css'

const getLinkHome = (id) => ({
  pathname: '/meus-objetivos',
  invite: id
})

export class LoginPage extends Component {

  constructor(props) {
    super(props)

    this.userService = new UserService()

    this.state = {
      username: '',
      password: '',
      redirectHome: false,
      invite: this.props.location.invite
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
    if (this.state.redirectHome) {
      return <Redirect to={getLinkHome(this.state.invite)} />
    }

    return (
      <div className="tudo">
        <div className="tudo__logo-area">
          <div className="logo">
          
          <svg width="100%" height="69" viewBox="0 0 136 69" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M111.198 0C101.539 0 93.2716 3.36621 86.3967 10.0986C83.0304 13.3952 88.1041 27.0132 86.3967 30.9586C84.6173 35.0707 77.9331 31.5144 77.9331 36.3202C77.9331 45.7796 79.5219 51.8993 86.3967 58.6317C93.2716 65.3641 101.539 68.6877 111.198 68.6877C115.985 68.6877 120.51 67.7929 124.774 66.0032C128.481 64.4472 131.794 62.3758 134.712 59.789C135.437 59.1467 135.434 58.035 134.743 57.3577L127.303 50.0718C126.624 49.4076 125.539 49.4139 124.814 50.0276C120.945 53.3026 116.406 54.9246 111.198 54.9246C105.368 54.9246 100.407 52.9219 96.3174 48.9165C92.2273 44.9112 90.1823 40.0536 90.1823 34.3438C90.1823 28.7193 92.2273 23.8617 96.3174 19.8138C100.407 15.7658 105.368 13.7205 111.198 13.7205C116.374 13.7205 120.913 15.3813 124.817 18.6404C125.541 19.2446 126.617 19.2451 127.29 18.5858L134.725 11.3044C135.424 10.6205 135.418 9.49605 134.679 8.85629C131.769 6.33867 128.467 4.27713 124.774 2.72705C120.51 0.937425 115.985 0 111.198 0Z" fill="#003049" />
              <path d="M59.9714 46.3754C60.6646 46.3762 61.2913 46.7849 61.5673 47.4162L70.4125 67.6469C70.6888 68.2788 71.3165 68.6877 72.0104 68.6877H82.1255C83.3853 68.6877 84.2285 67.4008 83.718 66.2573L75.5228 47.9007C75.1033 46.961 75.6001 45.8729 76.5566 45.4798C85.3016 41.8859 90.2223 33.6385 89.2556 24.0405C87.8609 10.1923 77.2502 2.42135 63.67 2.42135H43.0108C41.7407 2.42135 40.8976 3.7276 41.4282 4.87341L46.3262 15.45L63.67 33.9979H52.3279H42.7278C41.7658 33.9979 40.9859 34.7723 40.9859 35.7275V44.6243C40.9859 45.5786 41.7643 46.3525 42.7254 46.3539L50.1784 46.3641L59.9714 46.3754ZM63.67 33.9979L46.3262 15.45H48.4797H63.67C66.5417 15.45 69.922 15.423 72.0105 17.4683C74.0556 19.5136 75.146 22.093 75.146 24.9053C75.146 27.7602 74.0556 29.6478 72.0105 31.6504C69.922 33.6957 66.5417 33.9979 63.67 33.9979Z" fill="white" />
              <path d="M23.9185 46.6974L28.7314 35.5472C28.9819 34.9669 29.5566 34.5906 30.1924 34.5906C30.8253 34.5906 31.3978 34.9634 31.6501 35.5396L36.4604 46.5244L42.0906 59.503L46.1024 68.0043C46.3891 68.6119 47.0039 69 47.6797 69H48.617H49.2262H58.5521C59.3871 69 59.9467 68.148 59.6099 67.3894L44.8216 34.0718L31.1485 3.84948C30.7782 3.03081 29.6066 3.0334 29.2399 3.85371L15.7314 34.0718L10.7184 45.1408L1.09346 66.5659C0.579561 67.7099 1.42275 69 2.68431 69H2.95879H10.1527H10.7184H12.3591C13.0315 69 13.6438 68.6158 13.9324 68.0128L17.9851 59.5456L23.9185 46.6974Z" fill="#003049" />
            </svg>

          </div>
        </div>
        <div className="tudo__nao-logo">
          {this.renderForm()}

          {this.renderForgotPassword()}

          {this.renderFooter()}

          {this.renderRegister()}
        </div>
      </div>
    )
  }
}