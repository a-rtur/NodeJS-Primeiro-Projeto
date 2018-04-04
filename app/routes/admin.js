module.exports = function(express) {
    express.get('/admin', function(req, res) {
        res.render('admin/form_add_noticia.ejs');
    });
};