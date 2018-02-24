import { combineReducers } from 'redux'

import usuarioReducer from 'storage/usuario/usuarioReducer'

export default combineReducers({
    usuario: usuarioReducer
});