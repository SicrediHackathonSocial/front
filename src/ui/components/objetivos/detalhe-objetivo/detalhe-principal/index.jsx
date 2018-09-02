import React, { Component } from 'react'

import './styles.css'

export class DetalhePrincipal extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="detalhe-principal-objetivo">
                <h1 className="detalhe-principal-objetivo-titulo">Comprar um carro</h1>

                <div className="detalhe-principal-objetivo-values">
                    <h2 className="detalhe-principal-objetivo-reached">R$ 483,00</h2>
                    <h3 className="detalhe-principal-objetivo-target"> / R$ 500,00</h3>
                </div>

                <div className="detalhe-principal-objetivo-progress-wrapper">
                    <div className="detalhe-principal-objetivo-progress"></div>
                </div>
            </div>
        )
    }
}
