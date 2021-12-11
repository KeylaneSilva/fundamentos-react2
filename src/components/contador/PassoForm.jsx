import React, {useState} from 'react'

export default function PassoForm(props) { 
    return (
        <div>
            <label>passe:</label>
            <input 
                type="number"
                value={undefined}
                onChange={e => props.pegar((e.target.value))}
             />
        </div>
    )
}
