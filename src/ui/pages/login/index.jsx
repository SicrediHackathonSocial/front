import React, { Component } from 'react'

export class LoginPage extends Component {
  render() {
    return (
      <div>
        <h1>Login</h1>

        <div>
          <label htmlFor="usuario">Usuário</label>
          <input type="text"/>
          <button type="submit">Entrar</button>
        </div>
      </div>
    )
  }
}