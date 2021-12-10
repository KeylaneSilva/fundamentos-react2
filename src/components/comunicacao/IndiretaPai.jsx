import React, {useState} from 'react'
import IndiretaFilho from './IndiretaFilho'

export default function IndiretaPai() {
    //nome, idade, nerd
    const [nome, setNome] = useState('')
    const [idade, setIdade] = useState(0)
    const [nerd, setNerd] = useState(false)

    function fornecerInformacoes(nome,idade,nerd){
        setNome(nome)
        setIdade(idade)
        setNerd(nerd)
        console.log(nome,idade,nerd)
    }
    
    return (
        <div>
            <span><strong>{nome} </strong></span>
            <span><strong>{idade} </strong></span>
            <span><strong>{nerd ? 'Verdadeiro' : 'Falso'} </strong></span>

            <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>
            
        </div>
    )
}
