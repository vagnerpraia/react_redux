import React, { Component } from 'react'

import BarraAcessibilidade from 'component/container/BarraAcessibilidade'
import Menu from 'component/container/Menu'
import Login from 'component/container/Login'

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
                    <img src="img/logo.png"/>
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