import React, { Component } from 'react'

export default class Menu extends Component {
    render(){
        return(
            <div id='Menu'>
                <nav>
                    <ul>
                        <li>
                            <a href='#'>Home</a>
                        </li>
                        <li>
                            <a href='#'>O Mapa</a>
                        </li>
                        <li>
                            <a href='#'>Contato</a>
                        </li>
                        <li>
                            <a href='#'>Entrar</a>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}