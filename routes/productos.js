//Módulo express
let express = require('express');

//Método Router
let router = express.Router();

//Rutas
// Ruta raíz de los productos /Inicio
router.get('/', function (req, res) {
  res.send('Ruta de productos');
});

// Ruta para obtener un producto por su ID /Detalle de producto
router.get('/detalle/:id', function (req, res) {
  res.send('Detalle de producto');
});

//Exportar módulo
module.exports = router;
