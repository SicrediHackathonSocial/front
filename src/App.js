import React, { Component } from 'react'
import { Main, Sidenav, Header } from 'app-components'

export default class App extends Component {
  render() {
    return (
      <section className="container">
        <Header />
        <Sidenav />

        <section className="content">
          <Main />
        </section>
      </section>
    )
  }
}
