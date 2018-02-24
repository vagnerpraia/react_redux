import { combineReducers } from 'redux'

import usuario from 'storage/reducer/usuario'

export default combineReducers({
    usuario: usuario
});