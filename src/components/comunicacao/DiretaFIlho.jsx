import React from 'react'

export default function DiretaFIlho(props) {
    return (
        <div>
            <p><strong>{props.nome}</strong></p>
            <p><strong>{props.idade}</strong></p>
            <p><strong>{props.bool ? 'Verdadeiro' : 'Falso'}</strong></p>
        </div>
    )
}
