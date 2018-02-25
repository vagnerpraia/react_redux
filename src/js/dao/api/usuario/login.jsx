import execute from 'dao/api/execute'

export const login = (email, senha) => {
    const login = {
        tx_email_usuario: email,
        tx_senha_usuario: senha
    }

    return execute('post', 'user/login', login)
}