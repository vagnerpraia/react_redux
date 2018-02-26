import api from 'dao/api'

export const atualizarEmail = (e) => (
    {
        type: 'atualizar',
        key: 'email',
        payload: e.target.value
    }
)

export const atualizarSenha = (e) => (
    {
        type: 'atualizar',
        key: 'senha',
        payload: e.target.value
    }
)

export const login = (state) => {
    const request = api('post', 'user/login', state)
    return {
        type: 'login',
        payload: request
    }
}