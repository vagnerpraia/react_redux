import React, { Component } from 'react'

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
        this.entrar = this.entrar.bind(this)
    }

    atualizarEstado(evento){
        this.setState({[evento.target.id]: evento.target.value})
    }

    entrar(){
        let token = {}
        let mensagem = ''

        if(this.state.email && this.state.senha){
            if(this.state.email == '1' && this.state.senha == '1'){
                mensagem = ''
                token = '123456abc'
            }else if(this.state.email == '2' && this.state.senha == '2'){
                token = 'abc123456'
            }else{
                mensagem = 'E-mail e/ou senha incorreto(s).'
            }
        }else{
            mensagem = 'Necessário informar e-mail e senha.'
        }

        this.setState({resposta: {mensagem: mensagem}});
        console.log(this.state)
    }

    render(){
        return(
            <div id='FormularioLogin'>
                <Input type='text' id='emailLogin' label='E-mail' placeholder='E-mail' value={this.state.email}
                    obrigatorio={true} onChange={this.atualizarEstado}/>

                <Input type='password' id='senhaLogin' label='Senha' placeholder='Senha' value={this.state.senha} 
                    obrigatorio={true} onChange={this.atualizarEstado}/>

                <Button value='Entrar' onClick={this.entrar}/>
                
                <div>
                    <span>{this.state.mensagem}</span>
                </div>
            </div>
        )
    }
}