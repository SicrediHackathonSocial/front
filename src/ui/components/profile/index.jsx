import React, { Component } from 'react'
import { UserService } from 'app-services'

import './styles.css'


export class Profile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: {}
    }
  }

  componentWillMount() {
    const user = UserService.getUserLogado()
    this.setState({ user })
  }


  render() {
    return (
      <div className="profile">
        <div
          className="profile-picture"
          style={{
            backgroundImage: `url(${this.state.user.picture})`,
          }}
          />
        <span className="profile-name">Oi, {this.state.user.username}</span>
      </div>
    )
  }
}