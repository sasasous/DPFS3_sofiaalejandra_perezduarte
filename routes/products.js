//Módulo express
let express = require('express');

//Método Router
let router = express.Router();

//LLamada al controlador
let ProductosControladores = require('..Controladores/ProductosControladores');


//Rutas
router.get('/', productsController.index);
router.get('/id/:id?', productsController.show);
router.get('/productsNew', ProductosControladores.create);
router.get('/results', productsController.search);

//Exportar módulo
module.exports = router;
