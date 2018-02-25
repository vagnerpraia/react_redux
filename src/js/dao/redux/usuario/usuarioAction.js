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