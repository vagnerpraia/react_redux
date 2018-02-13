import React, { Component } from 'react'

import Formulario from 'components/basics/Formulario'
import { Basico, Avancado } from 'components/basics/EntradaTexto'

export default class Login extends Component {
    constructor(props){
        super(props)

        this.state = {
            email: '',
            senha: '',
            mensagem: '',
            teste: ''
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({...this.state, [event.target.name]: event.target.value});
    }

    verificarUsuario(){
        console.log(this.state)
        
        let nomeTipo = ''

        if(this.state.email == '1' && this.state.senha == '1'){
            nomeTipo = 'Representante de OSC'
        }if(this.state.email == '2' && this.state.senha == '2'){
            nomeTipo = 'Representante de estado ou município'
        }

        console.log('nomeTipo: ' + nomeTipo)

        this.setState({...this.state, mensagem: nomeTipo})
    }

    render(){
        return(
            <div id='Login'>
                <p>{this.state.mensagem}</p>
                <form>
                    <label>Email: </label>
                    <input type='text' name='email' placeholder='Digite o e-mail' value={this.state.email} onChange={this.handleChange}/>
                    <label>Senha: </label>
                    <input type='text' name='senha' placeholder='Digite a senha' value={this.state.senha} onChange={(e) => this.handleChange(e)}/>
                    <label>Teste: </label>
                    <input type='text' name='teste' placeholder='Digite o teste' value={this.state.teste} onChange={(event) => this.setState({...this.state, 'teste': event.target.value})}/>
                    <input type='button' value='Entrar' onClick={() => this.verificarUsuario()}/>
                </form>
            </div>
        )
    }
}