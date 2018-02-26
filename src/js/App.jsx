import React, { Component } from 'react'
import { Provider } from 'react-redux'

import store from 'dao/store'
import Routes from 'startup/Routes'

export default class App extends Component {
    render(){
        return(
            <div id='App'>
                <Provider store={store}>
                    <Routes/>
                </Provider>
            </div>
        )
    }
}