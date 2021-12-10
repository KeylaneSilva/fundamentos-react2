import React from 'react'

export default function IndiretaFilho(props) {
 
    const gerarIdade = () => parseInt(Math.random() * (50 - 1) + 1)
    
    return (
        <div>
            <div>filho</div>
            <button onClick={_ => props.quandoClicar('Keylane', gerarIdade(), true)}
           
            >Fornecer informações</button>
        </div>
    )
}
