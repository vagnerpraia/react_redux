import React, { Component } from 'react'

import Superior from './Containers/Superior'
import Principal from './Containers/Principal'
import Inferior from './Containers/Inferior'

import '../css/estilo'

export default class App extends Component {
    render(){
        return(
            <div id='App' className='inner-container'>
                <Superior />
                <Principal />
                <Inferior />
            </div>
        )
    }
}