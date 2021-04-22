const mysql = require('mysql')

const config = {
    host: 'localhost',
    user: 'user.nodejs',
    database: 'tienda',
    password: 'PerezLopez11'
};

const conn = mysql.createConnection(config);

conn.connect(function (err) {
    if (err) throw err;
    console.log('La conexion a la Base de Datos Fue Exitosa')
    
});

module.exports = conn;