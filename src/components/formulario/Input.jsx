import React, {useState} from 'react'
import './Input.css'

export default function Input() {
    
    const [valor, setValor] = useState('Inicial')    
    
    function quandoMexer(e) {
        setValor(e.target.value)
    }

    return (
        <div>
            <div className='Input'>
                <div>{valor}</div>
                {/* componente controlado */}
                <input 
                    type="text"
                    value={valor}
                    onChange={quandoMexer} />

                {/* componente de leitura */}
                <input 
                    type="text"
                    value={valor}
                    readOnly />
                
                {/* componente não controlado */}
                <input 
                    type="text"
                    value={undefined} />
            </div>
        </div>
    )
}
