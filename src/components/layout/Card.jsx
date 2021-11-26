import React from 'react'
import './Card.css'


export default function Card(props) {
    
    // recebendo estilo por props
    const styleCard = {
        backgroundColor : props.color || '#ff0000',
        borderColor: props.color || '#ff0000'
    }
    
    return (
        <div className="Card" style={styleCard}>
            <div className="Title">{props.titulo}</div>
            <div className="Content">{props.children}</div>
        </div>
    )
}
