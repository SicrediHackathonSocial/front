import React, { Component } from 'react'
import { SubObjetivoCompleto, SubObjetivoPendente } from 'app-components'

import './styles.css'

export class SubObjetivos extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="sub-objetivos">
                <h2 className="sub-objetivos-titulo">Objetivos</h2>

                <div className="sub-objetivos-pendentes">
                    <h3 className="sub-objetivos-pendentes-titulo">Pendentes</h3>
                    <SubObjetivoPendente />
                </div>

                <div className="sub-objetivos-completos">
                    <h3 className="sub-objetivos-completos-titulo">Completos</h3>
                    <SubObjetivoCompleto />
                    <SubObjetivoCompleto />
                    <SubObjetivoCompleto />
                    <SubObjetivoCompleto />
                </div>
            </div>
        )
    }
}
