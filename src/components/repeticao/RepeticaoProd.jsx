import React, { useState } from 'react'
import produtos from '../../data/listaProdutos'
import '../repeticao/RepeticaoProd.css'

export default function RepeticaoProd() {
    const [valor, setValor] = useState(0)
    
    const tabelaProd = produtos.map((produto) =>         
        <tr>
            <td>{produto.id}</td>
            <td>{produto.produto}</td>
            <td>{produto.valor}</td>
        </tr>
    ) 

    function total(){
        let acm = 0
        for(let i = 0; i< produtos.length; i++){
            acm += produtos[i].valor
        }
        document.getElementById('total').innerHTML = acm.toFixed(2)
    }

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
                <tfoot>
                    <tr>
                        <td>Total</td>
                        <td>-</td>
                        <td id="total"></td>
                    </tr>
                </tfoot>
            </table>
                    <button onClick={total}>Calcular total</button>
        </div>
    )
}
