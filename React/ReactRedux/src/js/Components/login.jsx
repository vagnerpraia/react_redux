import React from 'react'
import { Basico, Avancado } from './entradaTexto'

export default (props) => (
    <form name='form'>
        Email: <Basico name='nome' value='' /><br/>
        Senha: <Avancado name='nome' value='' placeholder='Digite a senha' /><br/>
        <input type="submit" value="Entrar" />
    </form>
)