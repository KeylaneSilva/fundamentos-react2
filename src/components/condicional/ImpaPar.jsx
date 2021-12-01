import React from 'react'

export default function ImpaPar(props) {
    
    const numero = props.numero % 2 == 0

    return (
        <div>
            {numero ? 
                <strong>Par</strong> : 
                <strong>Impar</strong>}
        </div>
    )
}
