import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { manipularTecla } from 'util/manipulacaoTeclado'
import Button from 'basic/Button'
import Input from 'basic/Input'

class FormularioLogin extends Component {
    constructor(props){
        super(props)

        this.state = {
            mensagem: ''
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
        if(this.props.usuario.email && this.props.usuario.senha){
            const scheme = 'http'
            const host = 'localhost'
            const port = '8383'
            const basePath = 'api'
            const dataType = 'application/json'

            const dataRequest = {
                tx_email_usuario: this.props.usuario.email,
                tx_senha_usuario: this.props.usuario.senha
            }

            const headers = {
                headers: {
                    'Accept': dataType,
                    'Content-Type': dataType
                }
            }
            
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
                this.setState({mensagem: response.data.msg});
            })
            .catch((error) => {
                this.setState({mensagem: error.response.data.msg});
            })

        }else{
            this.setState({mensagem: 'Necessário informar e-mail e senha.'});
        }
    }

    render(){
        return(
            <div id='FormularioLogin'>
                <Input type='text' id='emailLogin' label='E-mail' placeholder='E-mail' value={this.props.usuario.email}
                    obrigatorio={true} onChange={this.atualizarEstado} onKeyDown={this.manipularTeclaEnter}/>

                <Input type='password' id='senhaLogin' label='Senha' placeholder='Senha' value={this.props.usuario.senha} 
                    obrigatorio={true} onChange={this.atualizarEstado} onKeyDown={this.manipularTeclaEnter}/>

                <Button value='Entrar' onClick={this.entrar}/>

                <div id='mensagemLogin'>
                    <span>{this.state.mensagem}</span>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        usuario: state.usuario
    }
}

const connectusuario = connect(mapStateToProps)

export default connectusuario(FormularioLogin)