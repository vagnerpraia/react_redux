import { validarEmail, validarrSet } from 'utils/validacao'

export default class Usuario {
    constructor(){
        this._flag = true
        this._mensagem = new Array()
    }

    get email(){
        return this._email
    }
    set email(value){
        this._email = value
    }

    get senha(){
        return this._senha
    }
    set senha(value){
        this._senha = value
    }

    get mensagem(){
        return this._mensagem
    }

    get flag(){
        return this._flag
    }

    validarDados(){
        if(!validarEmail(this.email)){
            this._flag = false
            this._mensagem.push('E-mail inválido.')
        }
    }

    verificarDadosObrigatorios(){
        if(!validarrSet(this.email)){
            this._flag = false
            this._mensagem.push('E-mail não informado.')
        }

        if(!validarrSet(this.senha)){
            this._flag = false
            this._mensagem.push('Senha não informada.')
        }
    }
}