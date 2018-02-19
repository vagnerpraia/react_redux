import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducers from 'store/reducers'
import Routes from 'startup/Routes'

export default class App extends Component {
    render(){
        return(
            <div id='App'>
                <Provider store={createStore(reducers)}>
                    <Routes/>
                </Provider>
            </div>
        )
    }
}