import React, { Component } from 'react'

import './styles.css'

const stylePercentage = (percentage) => ({
    width: 'calc('+percentage + '% - 1px'
})

const percent = (v1, v2) => {
    return v2 > 0 ? v1 / v2 * 100 : 0;
}

export class SubObjetivoPendente extends Component {
    constructor(props) {
        super(props)

        this.state = {
            project: this.props.project,
            goal: this.props.goal,
        }

    }

    render() {
        return (
            <div className="sub-objetivo">
                <div className="sub-objetivo-progress-wrapper">
                    <div className="sub-objetivo-progress" style={stylePercentage(percent(this.state.goal.reached, this.state.goal.target))}></div>
                </div>

                <div className="sub-objetivo-pendente">
                    <span className="sub-objetivo-pendente-text">{this.state.goal.title}</span>
                    <div className="sub-objetivo-button-wrapper">
                        <div className="sub-objetivo-button"></div>
                    </div>
                </div>
            </div>
        )
    }
}
