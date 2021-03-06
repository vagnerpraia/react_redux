import React, { Component } from 'react'
import { connect } from 'react-redux'
import { manipularTecla } from 'util/manipulacaoTeclado'
import Button from 'basic/Button'
import Input from 'basic/Input'
import { bindActionCreators } from 'redux'
import { atualizarEmail, atualizarSenha, login } from 'dao/usuario/usuarioAction'

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
            this.props.login(this.props.usuario)
            /*
            const request = login(this.props.usuario)
            Promise.resolve(request)
                .then((response) => {
                    console.log(response)
                    if(response.code === 200){
                        // TODO: Armazenar token e redirecionar usuário
                    }
                    this.setState({mensagem: response.data.msg});
                })
                .catch((error) => {
                    console.log(error)
                    //this.setState({mensagem: error.response.data.msg});
                })
            */
        }else{
            this.setState({mensagem: this.props.mensagem});
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
                    <span>{this.props.mensagem}</span>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    usuario: state.login.usuario,
    mensagem: state.login.mensagem
})

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ atualizarEmail, atualizarSenha, login }, dispatch)
}

const connectComponent = connect(mapStateToProps, mapDispatchToProps)

export default connectComponent(FormularioLogin)