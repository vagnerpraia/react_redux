import React, { Component } from 'react'

import BarraAcessibilidade from '../Containers/BarraAcessibilidade'
import Menu from '../Containers/Menu'
import Login from '../Containers/Login'

export default class Superior extends Component {
    render(){
        return(
            <div id='Superior'>
                <div id='BarraBrasil-Superior'>
                    <p>Barra Brasil</p>
                </div>
                <div id='BarraAcessibilidade-Superior'>
                    <BarraAcessibilidade/>
                </div>
                <div id='LogoIpea-Superior'>
                    <p>Ipea</p>
                </div>
                <div id='LogoMapa-Superior'>
                    <h1>Mapa das Organizações da Sociedade Civil</h1>
                </div>
                <div id='Menu-Superior'>
                    <Menu/>
                </div>
                <div id='Login-Superior'>
                    <Login/>
                </div>
            </div>
        )
    }
}