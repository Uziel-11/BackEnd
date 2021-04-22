const productoDAO = require('../models/productoDao')

const agregarProducto = (req, res) =>{

    console.log("Agregando Producto")
    //if (req.usuario){
    const product ={
        //id : req.body.id,
        nombre : req.body.nombre,
        descripcion : req.body.descripcion,
        precio : req.body.precio,
        marca : req.body.marca,
        talla : req.body.talla,
        color : req.body.color
    }
    productoDAO.insertarProducto(product, (dato)=>{
        res.send({
            status: true,
            message: 'El Producto se Agregado Correctamente'
        })
    },err =>{
        res.send({
            status: false,
            message: 'E l Producto no se pudo Agregar',
            errorMessage: err
        })

    })
}

module.exports = {
    agregarProducto
}