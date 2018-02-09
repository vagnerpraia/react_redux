import React from 'react'

const servico = (valor) => {
    console.log(valor)
}

export const Basico = (props) => (
    <input type="text" name={props.name} defaultValue={props.value} />
)

export const Avancado = (props) => (
    <input type="text" name={props.name} defaultValue={props.value} placeholder={props.placeholder} onChange={servico(props.value)} />
)