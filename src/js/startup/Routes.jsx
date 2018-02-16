import React, { Component } from 'react'
import { Redirect, Switch } from 'react-router'
import { HashRouter, Route } from 'react-router-dom'

import Template from 'startup/Template'
import Index from 'component/page/Index'
import Apoio from 'component/page/Apoio'
import BaseDados from 'component/page/BaseDados'
import Cadastro from 'component/page/Cadastro'
import Colabore from 'component/page/Colabore'
import Contato from 'component/page/Contato'
import DadosIndicadores from 'component/page/DadosIndicadores'
import Editais from 'component/page/Editais'
import Equipe from 'component/page/Equipe'
import Glossario from 'component/page/Glossario'
import Links from 'component/page/Links'
import Mapa from 'component/page/Mapa'
import Metodologia from 'component/page/Metodologia'
import PerguntasFrequentes from 'component/page/PerguntasFrequentes'
import Sobre from 'component/page/Sobre'
import Tutoriais from 'component/page/Tutoriais'
import Versao from 'component/page/Versao'

export default class Routes extends Component {
    carregarPagina(componentePagina){
        return <Template pagina={componentePagina}/>
    }

    render(){
        return(
            <HashRouter>
                <Switch>
                    <Route path='/' exact render={() => this.carregarPagina(<Index/>)}/>
                    <Route path='/apoio' exact render={() => this.carregarPagina(<Apoio/>)}/>
                    <Route path='/basedados' exact render={() => this.carregarPagina(<BaseDados/>)}/>
                    <Route path='/cadastro' exact render={() => this.carregarPagina(<Cadastro/>)}/>
                    <Route path='/colabore' exact render={() => this.carregarPagina(<Colabore/>)}/>
                    <Route path='/contato' exact render={() => this.carregarPagina(<Contato/>)}/>
                    <Route path='/dadosindicadores' exact render={() => this.carregarPagina(<DadosIndicadores/>)}/>
                    <Route path='/editais' exact render={() => this.carregarPagina(<Editais/>)}/>
                    <Route path='/equipe' exact render={() => this.carregarPagina(<Equipe/>)}/>
                    <Route path='/glossario' exact render={() => this.carregarPagina(<Glossario/>)}/>
                    <Route path='/links' exact render={() => this.carregarPagina(<Links/>)}/>
                    <Route path='/mapa' exact render={() => this.carregarPagina(<Mapa/>)}/>
                    <Route path='/metodologia' exact render={() => this.carregarPagina(<Metodologia/>)}/>
                    <Route path='/perguntasfrequentes' exact render={() => this.carregarPagina(<PerguntasFrequentes/>)}/>
                    <Route path='/sobre' render={() => this.carregarPagina(<Sobre/>)}/>
                    <Route path='/tutoriais' render={() => this.carregarPagina(<Tutoriais/>)}/>
                    <Route path='/versao' render={() => this.carregarPagina(<Versao/>)}/>

                    <Redirect from='*' to='/' />
                </Switch>
            </HashRouter>
        )
    }
}