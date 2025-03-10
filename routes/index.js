//Módulo express
const express = require('express');

//Método Router
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
  res.render('index', { title: 'Express' });
});

//Exportar módulo
module.exports = router;
