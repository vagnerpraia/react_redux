import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { manipularTecla } from 'util/manipulacaoTeclado'
import Button from 'basic/Button'
import Input from 'basic/Input'
import { atualizarEmail, atualizarSenha } from 'dao/redux/usuario/usuarioAction'
import { bindActionCreators } from 'redux'
import { login } from 'dao/api/usuario/login'

class FormularioLogin extends Component {
    constructor(props){
        super(props)

        this.state = {
            mensagem: ''
        }

        this.manipularTeclaEnter = this.manipularTeclaEnter.bind(this)
        this.entrar = this.entrar.bind(this)
    }

    manipularTeclaEnter(evento){
        manipularTecla(evento, 'Enter', this.entrar)
    }

    entrar(){
        if(this.props.usuario.email && this.props.usuario.senha){
            const response = login(this.props.usuario.email, this.props.usuario.senha)
            Promise.resolve(response)
                .then((response) => {
                    console.log(response)
                    if(response.code === 200){
                        // TODO: Armazenar token e redirecionar usuário
                    }
                    this.setState({mensagem: response.data.msg});
                })
                .catch((error) => {
                    console.log(error)
                    this.setState({mensagem: error.response.data.msg});
                })
        }else{
            this.setState({mensagem: 'Necessário informar e-mail e senha.'});
        }
    }

    render(){
        return(
            <div id='FormularioLogin'>
                <Input type='text' label='E-mail' placeholder='E-mail' value={this.props.usuario.email}
                    obrigatorio={true} onChange={this.props.atualizarEmail} onKeyDown={this.manipularTeclaEnter}/>

                <Input type='password' label='Senha' placeholder='Senha' value={this.props.usuario.senha} 
                    obrigatorio={true} onChange={this.props.atualizarSenha} onKeyDown={this.manipularTeclaEnter}/>

                <Button value='Entrar' onClick={this.entrar}/>

                <div>
                    <span>{this.state.mensagem}</span>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    usuario: state.usuario
})

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ atualizarEmail, atualizarSenha }, dispatch)
}

const connectComponent = connect(mapStateToProps, mapDispatchToProps)

export default connectComponent(FormularioLogin)