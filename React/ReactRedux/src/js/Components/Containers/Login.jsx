import React, { Component } from 'react'

import Formulario from 'components/basics/Formulario'
import { Basico, Avancado } from 'components/basics/EntradaTexto'

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
        this.cancelar = this.cancelar.bind(this);
    }

    atualizarState(chave, valor) {
        this.setState({...this.state, [chave]: valor});
    }

    atualizarTexto(evento){
        this.atualizarState(evento.target.name, evento.target.value)
    }

    entrar(){
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

        this.atualizarState('mensagem', mensagem);
    }

    cancelar(){
        console.log('cancelar')
    }

    render(){
        return(
            <div id='Login'>
                <form>
                    <div>
                        <label>E-mail: <span>(Campo Obrigatório)</span></label>
                        <input type='text' name='email' placeholder='Email' value={this.state.email} onChange={this.atualizarTexto}/>
                    </div>
                    <div>
                        <label>Senha: <span>(Campo Obrigatório)</span></label>
                        <input type='password' name='senha' placeholder='Senha' value={this.state.senha} onChange={this.atualizarTexto}/>
                    </div>
                    <div>
                        <input type='button' name='entrar' value='Entrar' onClick={this.entrar}/>
                        <input type='button' name='cancelar' value='Cancelar' onClick={this.cancelar}/>
                    </div>
                    <div>
                        <span>{this.state.mensagem}</span>
                    </div>
                </form>
            </div>
        )
    }
}