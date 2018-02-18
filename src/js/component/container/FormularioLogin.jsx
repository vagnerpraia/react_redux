import React, { Component } from 'react'

import axios from 'axios';

import { manipularTecla } from 'util/manipulacaoTeclado'

import Button from 'basic/Button'
import Input from 'basic/Input'

export default class FormularioLogin extends Component {
    constructor(props){
        super(props)

        this.state = {
            emailLogin: '',
            senhaLogin: '',
            resposta: {}
        }

        this.atualizarEstado = this.atualizarEstado.bind(this)
        this.manipularTeclaEnter = this.manipularTeclaEnter.bind(this)
        this.entrar = this.entrar.bind(this)
    }

    atualizarEstado(evento){
        this.setState({[evento.target.id]: evento.target.value})
    }

    manipularTeclaEnter(evento){
        manipularTecla(evento, 'Enter', this.entrar)
    }

    entrar(){
        let token = {}
        let mensagem = ''

        if(this.state.emailLogin && this.state.senhaLogin){
            axios.post({
                method: 'post',
                baseURL: 'http://localhost:8383/api/',
                url: '/login',
                data: {
                    tx_email_usuario: "teste2@gmail.com",
                    tx_senha_usuario: "123456"
                }
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

            /*
            if(this.state.emailLogin == '1' && this.state.senhaLogin == '1'){
                mensagem = 'Representante de OSC'
                token = '123456abc'
            }else if(this.state.emailLogin == '2' && this.state.senhaLogin == '2'){
                mensagem = 'Representante de Governo'
                token = 'abc123456'
            }else{
                mensagem = 'E-mail e/ou senha incorreto(s).'
            }
            */
        }else{
            mensagem = 'Necessário informar e-mail e senha.'
        }

        this.setState({resposta: {mensagem: mensagem}});
    }

    render(){
        return(
            <div id='FormularioLogin'>
                <Input type='text' id='emailLogin' label='E-mail' placeholder='E-mail' value={this.state.email}
                    obrigatorio={true} onChange={this.atualizarEstado} onKeyDown={this.manipularTeclaEnter}/>

                <Input type='password' id='senhaLogin' label='Senha' placeholder='Senha' value={this.state.senha} 
                    obrigatorio={true} onChange={this.atualizarEstado} onKeyDown={this.manipularTeclaEnter}/>

                <Button value='Entrar' onClick={this.entrar}/>
                
                <div>
                    <span>{this.state.resposta.mensagem}</span>
                </div>
            </div>
        )
    }
}