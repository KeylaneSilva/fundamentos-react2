import React from 'react'
import produtos from '../../data/listaProdutos'
import '../repeticao/RepeticaoProd.css'

export default function RepeticaoProd() {

    const tabelaProd = produtos.map((produto) => 
        <tr>
            <td>{produto.id}</td>
            <td>{produto.produto}</td>
            <td>{produto.valor}</td>
        </tr>
    )

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Produto</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    {tabelaProd}
                </tbody>
            </table>
        </div>
    )
}
