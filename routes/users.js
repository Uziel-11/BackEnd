const express = require('express');
const router = express.Router();
const usuario = require('../controllers/servicioUsuario')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

///users/validarUsuario/${usuario}
///users/iniciarSesion`, usuari
///users/crearCuenta`, usuar

router.get('/validarUsuario/:nomusuario', usuario.validarUsuario);
router.post('/crearCuenta', usuario.crearCuenta)
router.post('/iniciarSesion', usuario.iniciarSesion)

module.exports = router;
