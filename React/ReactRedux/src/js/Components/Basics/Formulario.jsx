import React from 'react'
import { clonarChildrenProps } from '../../Utils/util'

export default (props) => (
    <div id='Formulario'>
        <form name='form'>
            {clonarChildrenProps(props)}
            <input type='submit' value='Entrar' />
        </form>
    </div>
)