import React from 'react'

export default function Botoes(props) {
    return (
        <div>
            <button onClick={_ => props.soma()}>+</button>
            <button onClick={_ => props.sub()}>-</button>
        </div>
    )
}
