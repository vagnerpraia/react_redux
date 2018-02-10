import React, { Component } from 'react'

import Login from '../Components/login'
import { Basico, Avancado } from '../Components/entradaTexto'

export default class Principal extends Component {
    render(){
        return(
            <div id='Principal' className='inner-container'>
                <Login teste='Fonte: Usuário'>
                    <Avancado label='E-mail' name='email' value='' placeholder='Digite o e-mail' />
                    <Avancado label='Senha' name='senha' value='' placeholder='Digite a senha' />
                </Login>
            </div>
        )
    }
}