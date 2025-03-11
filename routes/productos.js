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
router.get('/detalle/:id', function (req, res) {
  return res.send('Detalle de producto' + req.params.id);
});

// Ruta para comentarios del producto /Comentarios de producto
router.get('/comentarios/:id?', function (req, res) {
  return res.send('Comentarios de producto' + req.params.id);
});

//Exportar módulo
module.exports = router;
