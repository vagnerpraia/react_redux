import React, { Component } from 'react'

import Formulario from 'components/basics/Formulario'
import { Basico, Avancado } from 'components/basics/EntradaTexto'

export default class Login extends Component {
    render(){
        return(
            <div id='Login'>
                <Formulario teste='Fonte: Usuário'>
                    <Avancado label='E-mail' name='email' value='' placeholder='Digite o e-mail' />
                    <Avancado label='Senha' name='senha' value='' placeholder='Digite a senha' />
                </Formulario>
            </div>
        )
    }
}