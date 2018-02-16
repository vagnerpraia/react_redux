import React, { Component } from 'react'

import Formulario from 'component/basic/Formulario'
import { Basico, Avancado } from 'component/basic/EntradaTexto'

export default class FormularioContato extends Component {
    constructor(props){
        super(props)

        this.state = {
            assunto: '',
            nomeUsuario: '',
            email: '',
            mensagem: '',
            resposta: {}
        }

        this.atualizarEstado = this.atualizarEstado.bind(this);
        this.enviarContato = this.enviarContato.bind(this);
    }

    atualizarEstado(evento){
        this.setState({[evento.target.name]: evento.target.value});
    }

    enviarContato(){
        console.log(this.state)
        this.setState({resposta: {mensagem: 'Contato enviado'}})
    }

    render(){
        return(
            <div id='FormularioContato'>
                <div>
                    <label>Como podemos ajudar?</label>
                    <select id='assunto' name='assunto' value={this.state.assunto}>
                        <option value=''>Selecione o assunto</option>
                        <option value='1'>Cadastro Município-Estado</option>
                        <option value='2'>Cadastro Representante</option>
                        <option value='3'>Dúvidas</option>
                        <option value='4'>Inserção/Edição de dados</option>
                        <option value='5'>Pedidos de dados</option>
                        <option value='6'>Relatar Problemas</option>
                        <option value='7'>Sugestão</option>
                        <option value='8'>Outros</option>
                    </select>
                </div>
                <div>
                    <label>Nome:</label>
                    <input type='text' id='nome' name='nome' placeholder='Nome'/>
                </div>
                <div>
                    <label>E-mail: <span>(Campo Obrigatório)</span></label>
                    <input type='text' id='email' name='email' placeholder='E-mail'/>
                </div>
                <div>
                    <label>Mensagem:</label>
                    <textarea id="mensagem" name='mensagem' placeholder='Mensagem'/>
                </div>
                <div>
                    <input type='button' id='enviarContato' onClick={this.enviarContato} value='Enviar'/>
                </div>
                <div>
                    <span id='mensagemResposta'>{this.state.resposta.mensagem}</span>
                </div>
            </div>
        )
    }
}