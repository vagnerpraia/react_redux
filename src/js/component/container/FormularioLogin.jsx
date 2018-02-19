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
            mensagemLogin: ''
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
        if(this.state.emailLogin && this.state.senhaLogin){
            const scheme = 'http'
            const host = 'localhost'
            const port = '8383'
            const basePath = 'api'
            const dataType = 'application/json'

            const dataRequest = {
                tx_email_usuario: this.state.emailLogin,
                tx_senha_usuario: this.state.senhaLogin
            }

            const headers = {
                headers: {
                    'Accept': dataType,
                    'Content-Type': dataType
                }
            }
            console.log(dataRequest)
            axios({
                method: 'post',
                baseURL: scheme + '://' + host + ':' + port + '/' + basePath,
                url: '/user/login',
                data: dataRequest
            })
            .then((response) => {
                if(response.code === 200){
                    // TODO: Armazenar token e redirecionar usuário
                }
                this.setState({mensagemLogin: response.data.msg});
            })
            .catch((error) => {
                console.log(error.response)
                this.setState({mensagemLogin: error.response.data.msg});
            })

        }else{
            this.setState({mensagemLogin: 'Necessário informar e-mail e senha.'});
        }
    }

    render(){
        return(
            <div id='FormularioLogin'>
                <Input type='text' id='emailLogin' label='E-mail' placeholder='E-mail' value={this.state.email}
                    obrigatorio={true} onChange={this.atualizarEstado} onKeyDown={this.manipularTeclaEnter}/>

                <Input type='password' id='senhaLogin' label='Senha' placeholder='Senha' value={this.state.senha} 
                    obrigatorio={true} onChange={this.atualizarEstado} onKeyDown={this.manipularTeclaEnter}/>

                <Button value='Entrar' onClick={this.entrar}/>

                <div id='mensagemLogin'>
                    <span>{this.state.mensagemLogin}</span>
                </div>
            </div>
        )
    }
}