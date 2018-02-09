import 'react'
import './css/estilo.css'
import { props } from './js/Component/component'
import { clonarObjeto } from './js/Util/util'
import Usuario from './js/Model/usuario'

const usuario = new Usuario()

usuario.email = 'teste@gmail.com'
usuario.senha = ''

usuario.validarDados()
usuario.verificarDadosObrigatorios()

console.log(usuario.email)



const usuarioClone = clonarObjeto(usuario)
usuarioClone.email = 'teste@hotmail.com'

console.log(usuarioClone.email)


