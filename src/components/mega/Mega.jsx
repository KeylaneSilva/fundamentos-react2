import React, { useState } from 'react'
import DisplayMega from './DisplayMega'
import FormMega from './FormMega'
import BotoesMega from './BotoesMega'

export default function Mega() {
    
    const [numeros, setNumeros] = useState([]) 
    const [qtd, setQtd] = useState(0)

    // capturando quantidade
    function pegarQtd(qtd){
        setQtd(qtd)
        // console.log('Quantidade: ' + qtd)
    }

    // gerando numeros
    function gerarNumeros(qtdPx){
        var acmNumeros = []
        var uniqueArr = []

        for(let i = 0; uniqueArr.length <= (qtd-1) ; i++){ 
            acmNumeros.push(Math.ceil(Math.random() * (60) + 0))
            
            // eliminando os números iguais
            uniqueArr = [...new Set(acmNumeros)]

            //ordenando
            uniqueArr.sort((a,b) =>{
                if(a > b) return 1
                if(a < b) return -1
                return 0
            })
            
            setNumeros([uniqueArr])
            
        }
        // console.log(numeros)
    }
    
    
    return (
        <div>
            <div>
                <h2>Gere o seu número da mega sena aqui!!</h2>
                <DisplayMega numero={numeros}/>
                <FormMega capturarQtd={pegarQtd}/>
                <BotoesMega gerar={gerarNumeros}/>

            </div>
        </div>
    )
}
