import React from 'react'

export default function Aleatorio(props) { 
    //função para gerar numero aleatorio
    function gerarNumero(){
        // const min = props.min // get min
        // const max = props.max // get max
        const { min, max } = props
        const num = Math.floor(Math.random()*(max-min)+min)
        // setando no h2
        const res = document.getElementById('numero').innerHTML = num

    }
    return (
        <div>
            <h2>Numero aleatorio: <span id="numero">0</span> </h2>
            <button onClick={gerarNumero}>Gerar número</button>
        </div>
    )
}
