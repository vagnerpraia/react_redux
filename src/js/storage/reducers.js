import { combineReducers } from "redux"

import 'storage/reducer/usuario'

const rootReducer = combineReducers({
    usuario: () => usuario
});

export {
    rootReducer as default
}