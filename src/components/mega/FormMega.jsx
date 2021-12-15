import React from 'react'

export default function FormMega(props) {
    
    return (
        <div>
            <label>Quantidade de numeros</label>
            <input 
                type="number"
                value={undefined}
                onChange={e => props.capturarQtd((e.target.value))} />
        </div>
    )
}
