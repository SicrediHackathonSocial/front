import React from 'react'
import { Link } from "react-router-dom";

import './styles.css'

const styleContribuition = (percentage) => ({
        background: '#FCBF49',
        width: 'calc('+percentage + '% - 1px',
        height: '9px',
        borderRadius: '6px' ,
})

const percent = (v1, v2) => {
    return v2 > 0 ? v1 / v2 * 100 : 0;
}

const completed = (project) => {
    return project.goals.filter(g => g.status === 'CONCLUIDO').length;
}

const all = (project) => {
    return project.goals.length;
}

export const ObjetivoUsuarioItem = ({ project, totalPercentage, titulo, objetivos }) => {
    const link = {
        pathname: '/detalhe-objetivo',
        project
    }

    return (
        <div className="card-usuario-item">
            <div className="card-percentage">
                <p className="card-percentage__value">{totalPercentage.toString().substr(0, 4)}%</p>
                <p className="card-percentage__text">Completo</p>
            </div>
            <div className="card-data">
                <h1 className="card-usuario-item__titulo">{titulo}</h1>
                <p className="card-usuario-item__realizados">Objetivos realizados: {completed(project)}/{all(project)}</p>
                <div className="card-usuario-item__objetivos">
                    { 
                        objetivos.map((objetivo, key) => (<div className="objetivo__projeto" key={key}>
                            {
                                objetivo.contribuitions.map((contribuition, keyb) => 
                                    (<div key={keyb} style={styleContribuition(percent(contribuition.value, objetivo.target))}></div>))
                            }
                        </div>))
                    }
                </div>
            </div>
            <div className="card-button-wrapper">
                <Link to={link}>
                    <div className="card-button"></div>
                </Link>
            </div>
        </div>
    )
}
