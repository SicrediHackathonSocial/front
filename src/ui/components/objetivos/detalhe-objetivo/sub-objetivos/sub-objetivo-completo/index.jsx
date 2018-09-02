import React, { Component } from 'react'

import './styles.css'

export class SubObjetivoCompleto extends Component {
    constructor(props) {
        super(props)

        this.state = {
            project: this.props.project,
            goal: this.props.goal
        }
    }

    render() {
        return (
            <div className="sub-objetivo-completo">

                <div className="sub-objetivo-checked">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M6.7498 12.15L3.5998 9.00001L2.5498 10.05L6.7498 14.25L15.7498 5.25001L14.6998 4.20001L6.7498 12.15Z" fill="#009688"/>
                    </svg>
                </div>
                <span className="sub-objetivo-completo-text">{ this.state.goal.title }</span>
                
            </div>
        )
    }
}
