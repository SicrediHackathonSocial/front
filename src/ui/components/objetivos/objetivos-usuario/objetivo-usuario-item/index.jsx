import React from 'react'

import './styles.css'

const styleContribuition = (percentage) => ({
        background: '#13CE66',
        width: 'calc('+percentage + '% - 1px',
        height: '4px',
        margin: '0 1px',
        borderRadius: '6px' ,
})

export const ObjetivoUsuarioItem = ({ totalPercentage, titulo, objetivos }) => {
    return (
        <div className="card-usuario-item">
            <div className="card-percentage">
                <p className="card-percentage__value">78%</p>
                <p className="card-percentage__text">Completo</p>
            </div>
            <div className="card-data">
                <h1 className="card-usuario-item__titulo">{titulo}</h1>
                <p className="card-usuario-item__realizados">Objetivos realizados: 8/1</p>
                <div className="card-usuario-item__objetivos">
                    { 
                        objetivos.map((objetivo, key) => (<div className="objetivo__projeto" key={key}>
                            {
                                objetivo.contribuitions.map((contribuition, keyb) => 
                                    (<div key={keyb}>
                                        <div style={styleContribuition((contribuition.value/objetivo.target)*100)}>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   </div>
                                    </div>))
                            }
                        </div>))
                    }
                </div>
            </div>
        </div>
    )
}
