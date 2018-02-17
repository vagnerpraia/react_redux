import React, { Component } from 'react'

import TituloSecao from 'basic/TituloSecao'
import TituloSubsecao from 'basic/TituloSubsecao'
import FormularioContato from 'container/FormularioContato'

export default class Contato extends Component {
    render(){
        return(
            <div id='Contato'>
                <div id='page-secao'>
                    <TituloSecao titulo='Contato'/>
                    <p>Prezado usuário,</p>
                    <p>Disponibilizamos as seguintes opções para ajudar na solução de dúvidas e questões que possam surgir durante a utilização do Mapa das OSCs:</p>
                    <ul>
                        <li>Tutoriais que ensinam a atualizar e alterar informações da OSC no Mapa.</li>
                        <li>Seção de Perguntas Frequentes.</li>
                        <li>Informamos que os pedidos de dados são atendidos no prazo legal de até 20 dias úteis e que, por força da Lei 12.527Site Externo., não disponibilizamos extrações de dados com informações referentes a CNPJ, logradouro, bairro, CEP, telefone ou e-mail das organizações.</li>
                    </ul>
                    <p>Caso as opções descritas não solucionem seu questionamento, por favor, utilize o formulário abaixo para entrar em contato com a nossa equipe.</p>
                </div>

                <div id='page-subsecao'>
                    <TituloSubsecao titulo='Informe sua Mensagem'/>
                    <FormularioContato/>
                </div>
            </div>
        )
    }
}