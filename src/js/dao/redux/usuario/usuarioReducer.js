const initialState = {
    email: 'teste2@gmail.com',
    senha: '123456'
}

export default (state = initialState, action) => {
    switch(action.type){
        case 'atualizar':
            return { ...state, [action.key]: action.payload }
        default:
            return state
    }
}