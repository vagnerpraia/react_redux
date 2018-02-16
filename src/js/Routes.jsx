import React, { Component } from 'react'
import { Switch, Redirect } from 'react-router'
import { HashRouter, Route } from 'react-router-dom'

import App from 'App'
import Index from 'component/page/Index'
import Apoio from 'component/page/Apoio'
import BaseDados from 'component/page/BaseDados'
import Cadastro from 'component/page/Cadastro'
import Sobre from 'component/page/Sobre'

export default class Routes extends Component {
    render(){
        return(
            <HashRouter>
                <Switch>
                    <Route path='/' exact render={() => <App pagina={<Index/>}/>}/>
                    <Route path='/index' render={() => <App pagina={<Index/>}/>}/>

                    <Route path='/apoio' render={() => <App pagina={<Apoio/>}/>}/>
                    <Route path='/BaseDados' render={() => <App pagina={<BaseDados/>}/>}/>
                    <Route path='/Cadastro' render={() => <App pagina={<Cadastro/>}/>}/>
                    <Route path='/sobre' render={() => <App pagina={<Sobre/>}/>}/>

                    <Redirect from='*' to='/' />
                </Switch>
            </HashRouter>
        )
    }
}