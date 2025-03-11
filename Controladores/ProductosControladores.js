const ProductosControladores = {
    //Mostrar listado de productos
    index: function(req, res) {
        return res.send('Listado de productos');
    },

    //Mostrar detalle de un producto
    show:  function (req, res) {
        return res.send('Detalle de producto' + req.params.id);
    },

    //Cargar un producto
    create: function (req, res) {
        return res.send('Cargar producto');
    }
}

//Exportar módulo
module.exports = ProductosControladores;