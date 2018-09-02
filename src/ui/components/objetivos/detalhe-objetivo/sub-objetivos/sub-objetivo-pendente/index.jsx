import React, { Component } from 'react'

import './styles.css'

export class SubObjetivoPendente extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="sub-objetivo">
                <div className="sub-objetivo-progress"></div>
                <div className="sub-objetivo-pendente">
                    <span className="sub-objetivo-pendente-text">Dinheiro para financiamento</span>
                    <div className="sub-objetivo-button-wrapper">
                        <div className="sub-objetivo-button"></div>
                    </div>
                </div>
            </div>
        )
    }
}
