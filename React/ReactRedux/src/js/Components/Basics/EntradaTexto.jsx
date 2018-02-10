import React from 'react'

const servico = (valor) => {
    console.log(valor)
}

export const Basico = (props) => (
    <div id='EntradaTexto-Basico'>
        {props.label + ': '}
        <input type="text" name={props.name} defaultValue={props.value} />
        {props.teste}
    </div>
)

export const Avancado = (props) => (
    <div id='EntradaTexto-Avancado'>
        {props.label + ': ' }
        <input type="text" name={props.name} defaultValue={props.value} placeholder={props.placeholder} onChange={servico(props.value)} />
        {' ' + props.teste}
    </div>
)