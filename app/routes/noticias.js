module.exports = function(express) {
    express.get("/noticias", function(req, res) {
        var connection = require('../../config/mysql_connection.js');
        var noticiasModel = express.app.models.noticiasModel;
        noticiasModel.getNoticias(connection, function(error, result) {
            if (error == null) {
                res.render("noticias/noticias.ejs", {noticias : result});
            }
            else {
                res.end('Algo deu errado!');
                console.log('Algo de errado não está certo:' + error + '...Fim');
            }
        });
    });
};
