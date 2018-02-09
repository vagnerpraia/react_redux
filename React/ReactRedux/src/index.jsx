import React from 'react'
import ReactDOM from 'react-dom'

import Cabecalho from './js/Components/cabecalho'
import Login from './js/Components/login'
import { Basico, Avancado } from './js/Components/entradaTexto'

import './css/estilo'

ReactDOM.render(
    <div>
        <Cabecalho texto='React + Redux' />
        <Login teste='Fonte: Usuário'>
            <Avancado label='E-mail' name='email' value='' placeholder='Digite o e-mail' />
            <Avancado label='Senha' name='senha' value='' placeholder='Digite a senha' />
        </Login>
    </div>
    , document.getElementById('app')
)
