import React, {useState} from 'react'
import Display from './Display'
import PassoForm from './PassoForm'
import Botoes from './Botoes'

export default function Contador() {

    const [numero, setNumero] = useState(0)
    const [valor, setValor] = useState(0)
    
    function pegarNumero(valor){
        setValor(valor)
    }

    function subtrair(){
        setNumero(numero-valor)
    } 
    function adicionar(){
        setNumero(parseInt(numero)+parseInt(valor))
    } 

    return (
        <div>
            Contador
            <Display numero={numero}/>
            <PassoForm pegar={pegarNumero}/>
            <Botoes soma={adicionar} sub={subtrair}/>
        </div>
    )
}
