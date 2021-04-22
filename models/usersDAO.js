const bd = require('../configMysql')

module.exports = {
    buscarUsuario : (usuario, callback) =>{
        let sql = 'SELECT * FROM cliente WHERE Usuario=?'
        bd.query(sql,usuario, (err, data) => {
            if (err) throw err
            if (data.length>0)
                callback(data[0])
            else
                callback(null)
        })
    },

    insertarUsuario : (usuario, okCallback, failCallback) => {
        let sql = 'INSERT INTO cliente SET ?'
        bd.query(sql, usuario, (err, data) =>{
            if (err)
                return failCallback(err)
            else
                return okCallback(data)
        })
    }
}