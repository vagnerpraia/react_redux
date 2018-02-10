import React, { Component } from 'react'

import Superior from 'components/structures/Superior'
import Principal from 'components/structures/Principal'
import Inferior from 'components/structures/Inferior'

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