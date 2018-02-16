import React, { Component } from 'react'

import Superior from 'component/template/Superior'
import Principal from 'component/template/Principal'
import Inferior from 'component/template/Inferior'

import Index from 'component/page/Index'
import Sobre from 'component/page/Sobre'

import 'estilo'

export default class App extends Component {
    render(){
        return(
            <div id='App' className='inner-container'>
                <Superior/>
                <Principal>
                    <Index/>
                </Principal>
                <Inferior/>
            </div>
        )
    }
}