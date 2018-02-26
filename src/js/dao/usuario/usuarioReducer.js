const initialState = {
    usuario: {
        id: '',
        tipo: '',
        email: 'teste2@gmail.com',
        senha: '123456',
        nome: '',
        token: '',
        representacao: []
    },
    mensagem: ''
}

export default (state = initialState, action) => {
    switch(action.type){
        case 'atualizar': {
            const usuario = {...state.usuario, [action.key]: action.payload}
            return { ...state, usuario: usuario }
        }

        case 'login': {
            let tempState = state

            if(action.error){
                if(action.payload.request.status === 0){
                    tempState.mensagem = 'Ocorreu um erro.'
                }else{
                    tempState.mensagem = action.payload.response.data.msg
                }
            }else{
                if(action.payload.request.status == 200){
                    tempState.usuario.email = ''
                    tempState.usuario.senha = ''

                    tempState.usuario.id = action.payload.data.id_usuario
                    tempState.usuario.tipo = action.payload.data.cd_tipo_usuario
                    tempState.usuario.nome = action.payload.data.tx_nome_usuario
                    tempState.usuario.token = action.payload.data.access_token
                    tempState.usuario.representacao = action.payload.data.representacao
                }

                tempState.mensagem = action.payload.data.msg
            }

            return { ...state, tempState }
        }

        default:
            return state
    }
}