import React, { Component } from 'react'

export default class Menu extends Component {
    render(){
        return(
            <div id='Menu'>
                <nav>
                    <ul>
                        <li>
                            <a href='/#'>Home</a>
                        </li>
                        <li>
                            <a href='/#apoio'>Apoio</a>
                        </li>
                        <li>
                            <a href='/#mapa'>O Mapa</a>
                        </li>
                        <li>
                            <a href='/#contato'>Contato</a>
                        </li>
                        <li>
                            <a href='/#cadastro'>Cadastro</a>
                        </li>
                        <li>
                            <a href='/#login'>Entrar</a>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}