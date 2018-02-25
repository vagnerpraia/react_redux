import { combineReducers } from 'redux'

import usuarioReducer from 'dao/redux/usuario/usuarioReducer'

export default combineReducers({
    usuario: usuarioReducer
});