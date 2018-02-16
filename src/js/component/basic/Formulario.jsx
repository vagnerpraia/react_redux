import React, { Component } from 'react'

import { clonarChildrenProps } from 'util/clonagem'

export default class Formulario extends Component {
    constructor(props){
        super(props)

        this.state = {
            usuario: ''
        }
    }

    verificarNomeFormulario(){
        this.props.children.forEach((p) => {
            if(p.props.name == 'email'){
                this.setState({
                    ...this.state,
                    usuario: p.props.value
                })
            }
        })
    }

    render(){
        return(
            <div id='Formulario'>
                <p>{this.state.usuario}</p>
                <form name='form'>
                    {clonarChildrenProps(this.props)}
                    <input type='submit' value='Entrar' onClick={() => this.verificarNomeFormulario()} />
                </form>
            </div>
        )
    }
}