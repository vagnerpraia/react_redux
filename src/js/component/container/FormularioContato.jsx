import React, { Component } from 'react'

import Button from 'component/basic/Button'
import Input from 'component/basic/Input'

export default class FormularioContato extends Component {
    constructor(props){
        super(props)

        this.state = {
            assuntoContato: '',
            nomeContato: '',
            emailContato: '',
            mensagemContato: '',
            resposta: {}
        }

        this.atualizarEstado = this.atualizarEstado.bind(this);
        this.enviarContato = this.enviarContato.bind(this);
    }

    atualizarEstado(evento){
        this.setState({[evento.target.id]: evento.target.value});
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
                    <select id='assuntoContato' name='assunto' value={this.state.assunto}>
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

                <Input type='text' id='nomeContato' label='Nome' placeholder='Nome' value={this.state.nome} 
                    onChange={this.atualizarEstado}/>

                <Input type='text' id='emailContato' label='E-mail' placeholder='E-mail' value={this.state.email} 
                    obrigatorio={true} onChange={this.atualizarEstado}/>
                    
                <div>
                    <label>Mensagem:</label>
                    <textarea id="mensagemContato" placeholder='Mensagem'/>
                </div>
                
                <Button value='Enviar' onClick={this.enviarContato}/>
                
                <div>
                    <span id='mensagemResposta'>{this.state.resposta.mensagem}</span>
                </div>
            </div>
        )
    }
}