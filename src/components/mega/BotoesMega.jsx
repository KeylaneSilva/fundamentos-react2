import React from 'react'

export default function BotoesMega(props) { 
    
    return (
        <div>
            <button onClick={_ => props.gerar()} >Gerar númeos</button>

            <h3>Boa sorte!!</h3>
        </div>
    )
}
