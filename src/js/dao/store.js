import { applyMiddleware, createStore } from 'redux'
import promise from 'redux-promise'
import reducers from 'dao/reducers'

const middlewares = applyMiddleware(promise)
const store = middlewares(createStore)
export default store(reducers)