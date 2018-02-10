import React, { Component } from 'react'

import Superior from './Components/Structures/Superior'
import Principal from './Components/Structures/Principal'
import Inferior from './Components/Structures/Inferior'

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