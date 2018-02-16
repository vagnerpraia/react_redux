import React, { Component } from 'react'

import Formulario from 'component/basic/Formulario'
import { Basico, Avancado } from 'component/basic/EntradaTexto'

export default class Login extends Component {
    constructor(props){
        super(props)

        this.state = {
            email: '',
            senha: '',
            mensagem: ''
        }

        this.atualizarTexto = this.atualizarTexto.bind(this);
        this.entrar = this.entrar.bind(this);
    }

    atualizarTexto(evento){
        this.setState({[evento.target.name]: evento.target.value});
    }

    entrar(){
        console.log(this.state)

        let token = {}
        let mensagem = ''

        if(this.state.email && this.state.senha){
            if(this.state.email == '1' && this.state.senha == '1'){
                mensagem = ''
                token = '123456abc'
            }else if(this.state.email == '2' && this.state.senha == '2'){
                mensagem = ''
                token = 'abc123456'
            }else{
                mensagem = 'E-mail e/ou senha incorreto(s).'
            }
        }else{
            mensagem = 'Necessário informar e-mail e senha.'
        }

        this.setState({'mensagem': mensagem});
    }

    render(){
        return(
            <div id='Login'>
                <div>
                    <label>E-mail: <span>(Campo Obrigatório)</span></label>
                    <input type='text' name='email' placeholder='Email' value={this.state.email} onChange={this.atualizarTexto}/>
                </div>
                <div>
                    <label>Senha: <span>(Campo Obrigatório)</span></label>
                    <input type='password' name='senha' placeholder='Senha' value={this.state.senha} onChange={this.atualizarTexto}/>
                </div>
                <div>
                    <input type='button' name='entrar' onClick={this.entrar} value='Entrar'/>
                </div>
                <div>
                    <span>{this.state.mensagem}</span>
                </div>
            </div>
        )
    }
}