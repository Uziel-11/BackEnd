const bd = require('../configMysql')

module.exports = {

    insertarProducto : (product, okCallback, failCallback) => {
        let sql = 'INSERT INTO producto SET ?'
        bd.query(sql, product, (err, data) =>{
            if (err)
                return failCallback(err)
            else
                return okCallback(data)
        })
    },

    consultarProductos : (producto, callback) =>{
        let sql = 'SELECT * FROM prodcuto'
        bd.query(sql,producto, (err, data) => {
            if (err) throw err
            if (data.length>0)
                callback(data[0])
            else
                callback(null)
        })
    }
}