const express = require('express');
const router = express.Router();
const product = require('../controllers/sercioProducto')

router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.post('/agregar', product.agregarProducto)

module.exports = router;