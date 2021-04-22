const token = require('jsonwebtoken')
const configServidor = require('../configServidor')

const generarToken = (cliente) => {
    let Token = {
        id: cliente.idCliente,
        nombre: cliente.Nombre,
        usuario: cliente.Usuario
    }

    return token.sign(Token, configServidor.jwt.secret, {expiresIn: 60 * 60})
}

module.exports = {
    generarToken
}