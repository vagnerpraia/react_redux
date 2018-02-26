import { combineReducers } from 'redux'

import usuarioReducer from 'dao/usuario/usuarioReducer'

export default combineReducers({
    login: usuarioReducer
});