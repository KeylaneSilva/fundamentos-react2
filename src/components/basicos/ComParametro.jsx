import React from 'react'

export default function ComParametro(props) {
    // console.log(props)
    const status = props.nota >=7 ? 'Aprovado' : 'Reprovado'

    return (
        <div>
            <hr />
            <h2>
                Olá  
                <strong> { props.aluno } </strong>
                <br />     
                Sua nota é 
                <strong> { props.nota } </strong>
                e vocé está 
                <strong> { status }</strong>
            </h2> 
            
            
        </div>
    )
}
