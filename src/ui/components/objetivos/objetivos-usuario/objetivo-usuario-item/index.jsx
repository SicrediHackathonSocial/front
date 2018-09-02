import React from 'react'

import './styles.css'

export const ObjetivoUsuarioItem = ({ titulo, objetivos }) => {
    return (
        <div className="card-usuario-item">
            <h1 className="card-usuario-item__titulo">{titulo}</h1>
            <div className="card-usuario-item__objetivos">
                { 
                    objetivos.map((element, key) => (<div className="objetivo__projeto" key={key}></div>)) 
                }
            </div>
        </div>
    )
}
