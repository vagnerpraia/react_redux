import axios from 'axios'

const scheme = 'http'
const host = 'localhost'
const port = '8383'
const basePath = 'api'
const dataType = 'application/json'

const headers = {
    headers: {
        'Accept': dataType,
        'Content-Type': dataType
    }
}

export default (metodo, rota, dados) => {
    return axios({
        method: metodo,
        baseURL: scheme + '://' + host + ':' + port + '/' + basePath,
        url: rota,
        data: dados
    })
}