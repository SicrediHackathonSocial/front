import React, { Component } from 'react'
import { DetalhePrincipal, SubObjetivos, Image } from 'app-components'

import EventEmitter from 'sm-event-emitter'

import { Route, Link } from 'react-router-dom'
import { HeaderActions } from 'app-components'

import './styles.css'

export class DetalheObjetivoPage extends Component {
  render() {
    return (
      <section className="page-objetivo">
        {
          <button className="back-step-button" onClick={() => this.backStep()}>
            {Image.ICONS.Back}
          </button>
        }

        <DetalhePrincipal />

        <SubObjetivos />

      </section>
    )
  }
}