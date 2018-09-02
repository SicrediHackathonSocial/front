import React from 'react'

import './styles.css'

const styleContribuition = (percentage) => ({
        background: '#13CE66',
        width: 'calc('+percentage + '% - 1px',
        height: '4px',
        margin: '0 1px',
        borderRadius: '6px' ,
})

export const ObjetivoUsuarioItem = ({ titulo, objetivos }) => {
    return (
        <div className="card-usuario-item">
            <h1 className="card-usuario-item__titulo">{titulo}</h1>
            <div className="card-usuario-item__objetivos">
                { 
                    objetivos.map((element, key) => (<div className="objetivo__projeto" key={key}>
                        {
                            element.contribuitions.map((contribuition, keyb) => 
                                (<div key={keyb} style={styleContribuition((contribuition.value/element.target)*100)}></div>))
                        }             
                    </div>)) 
                }
            </div>
        </div>
    )
}
