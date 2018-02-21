const usuario = () => ({
    nome: 'Usuário Teste',
    tipo: '1',
    representacao: [{
        id_osc: '987654',
        nome_osc: 'OSC Teste 1'
    },
    {
        id_osc: '789809',
        nome_osc: 'OSC Teste 2'
    }],
    token: '123456'
})

export {
    usuario as default
}