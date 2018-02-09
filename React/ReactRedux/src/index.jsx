import React from 'react'
import ReactDOM from 'react-dom'

import Cabecalho from './js/Components/cabecalho'
import Login from './js/Components/login'

import './css/estilo'

ReactDOM.render(
    <div>
        <Cabecalho texto='React + Redux' />
        <Login />
    </div>
    , document.getElementById('app')
)
