import React, { Component } from 'react'

import { clonarChildrenProps } from 'util/clonagem'

export default class Principal extends Component {
    render(){
        return(
            <div id='Principal'>
                {clonarChildrenProps(this.props)}
            </div>
        )
    }
}