import React, { Component } from 'react'
import { DetalhePrincipal, SubObjetivos, Image } from 'app-components'
import { Redirect } from 'react-router-dom'

import './styles.css'

export class DetalheObjetivoPage extends Component {
  constructor(props) {
    super(props)

    if (this.props.location.project) {
      this.state = {
        project: this.props.location.project
      }
    } else {
      this.state = {
        redirectObjetivos: true
      }
    }
  }

  componentDidMount() {
    console.log(this.state.project)
  }

  backStep() {
    window.history.back()
  }

  render() {
    if (this.state.redirectObjetivos) {
      return <Redirect to="/meus-objetivos" />
    }

    return (
      <section className="page-objetivo">
        {
          <button className="back-step-button" onClick={() => this.backStep()}>
            {Image.ICONS.Back}
          </button>
        }

        <DetalhePrincipal project={this.state.project} />

        <SubObjetivos project={this.state.project} />

      </section>
    )
  }
}