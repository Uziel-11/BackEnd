const usersDao = require('../models/usersDAO')
const bcrypt = require("bcrypt");
const token = require('../Utilerias/CrearToken')

const validarUsuario = (req, res) =>{

    usersDao.buscarUsuario(req.params.nomusuario, (dato)=>{
        try {
            if (!dato) throw new Err("Usuario Disponible")
            res.send({
                status: true,
                message: "Usuario no Disponible"
            })
        }catch (Err) {
            res.send({
                status: false,
                message: 'Usuario Disponible'
            })
            
        }
    })
}


const crearCuenta = (req, res) =>{
    console.log("Creando Cuenta")
    //if (req.usuario){
        const usuario ={
            //id : req.body.id,
            Nombre : req.body.nombre,
            Apellido : req.body.apellidoP,
            Usuario : req.body.usuario,
            //Contrasenia : req.body.contrasena
            contrasenia : bcrypt.hashSync(req.body.contrasena, 10)
        }
        usersDao.insertarUsuario(usuario, (dato)=>{
            res.send({
                status: true,
                message: 'La Cuenta a sido Creada'
            })
        },err =>{
            res.send({
                status: false,
                message: 'La Cuenta no se a Creado',
                errorMessage: err
            })

        })
    // }else {
    //     res.send({
    //         status: false,
    //         message: 'Requiere de un Token',
    //         error: 'Falta Token'
    //     })
    // }

}

const iniciarSesion = (req, res) =>{
    let nomusuario = req.body.usuario
    let contrasenia = req.body.contrasena
    usersDao.buscarUsuario(nomusuario, (dato)=>{
        if (dato){
            console.log('Dato => ', dato)
            if (contrasenia){
                res.send({
                    status: true,
                    message: 'Contraseña Correcta'
                })
            }else {
                res.send({
                    status: false,
                    message: 'Contraseña Incorrecta'
                    }
                )
            }
        }else {
            res.send({
                status: false,
                message: 'La Cuenta no Existe'
            })
        }
    })
    return token
}

module.exports = {
    validarUsuario,
    crearCuenta,
    iniciarSesion
}