//Módulo express
let express = require('express');

//Método Router
let router = express.Router();

//LLamada al controlador
let ProductosControladores = require('..Controladores/ProductosControladores');


//Rutas
// Ruta raíz de los productos /Inicio
router.get('/', ProductosControladores.index);

// Ruta para obtener un producto por su ID /Detalle de producto
router.get('/detalle/:id', ProductosControladores.show);

// Ruta para cargar un producto /Cargar producto
router.get('/cargar', ProductosControladores.create);

//Exportar módulo
module.exports = router;
