const initialState = {
    email: '',
    senha: ''
}

export default (state = initialState, action) => {
    switch(action.type){
        case 'atualizar':
            return { ...state, [action.key]: action.payload }
        default:
            return state
    }
}