import React from 'react'

const servico = (valor) => {
    console.log(valor)
}

export const Basico = (props) => (
    <div>
        {props.label + ': '}
        <input type="text" name={props.name} defaultValue={props.value} />
        {props.teste}
    </div>
)

export const Avancado = (props) => (
    <div>
        {props.label + ': ' }
        <input type="text" name={props.name} defaultValue={props.value} placeholder={props.placeholder} onChange={servico(props.value)} />
        {' ' + props.teste}
    </div>
)