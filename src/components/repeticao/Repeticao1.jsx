import React from 'react'
import alunos from '../../data/lista.js'

export default function Repeticao1() {
    
    const alunosLI = alunos.map((aluno) =>
        <li>{aluno.id} - {aluno.nome} : {aluno.nota}</li> 
    )
    
    return (
        <div>
            <ul style={{listStyle: 'none'}}>
                {alunosLI}
            </ul>
        </div>
    )
}
