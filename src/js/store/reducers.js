import { combineReducers } from "redux"

export default () => combineReducers({
    usuario: () => ({
        nome: 'Usuário Teste'
    })
});