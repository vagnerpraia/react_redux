import React, { Component } from 'react'

import Superior from 'component/template/Superior'
import Principal from 'component/template/Principal'
import Inferior from 'component/template/Inferior'

import 'estilo'

export default class Template extends Component {
    render(){
        return(
            <div id='Template' className='inner-container'>
                <Superior/>
                <Principal>
                    {this.props.pagina}
                </Principal>
                <Inferior/>
            </div>
        )
    }
}