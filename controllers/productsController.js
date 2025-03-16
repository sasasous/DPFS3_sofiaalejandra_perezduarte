//Controladores de productos
let productController = {
    index: function(req, res){
        let productList = ['Agua','Lev', 'Serpiente', 'Love'];
        return res.render('products', {title: 'Products', listaIlustraciones: illustrationList});
    },
    show: function(req,res){
        return res.send('Detalle de la iñlustración: $(req.params.is)')
    },
    create: function(req,res){
        return res.send('Formulario de carga de ilustraciones')
    },
    search: function(req,res){
        return res.render('searchResults', {title: 'Resultados de búsqueda'})
    }
}