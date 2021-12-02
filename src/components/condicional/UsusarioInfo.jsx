import React from 'react'
import If from '../condicional/if'

export default function UsusarioInfo(props) {

    const usuario = props.usuario || {}

    return (
        <div>
            <If teste={usuario && usuario.nome}>
                <p>Seja bem vindo <strong>{usuario.nome}</strong></p>
            </If>
            <If teste={usuario && usuario.email}>
                <p>Email cadastrado <strong>{usuario.email}</strong></p>
            </If>
        </div>
    )
}
