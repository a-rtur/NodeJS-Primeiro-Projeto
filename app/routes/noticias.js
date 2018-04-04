module.exports = function(express) {
    express.get("/noticias", function(req, res) {
        var connection = require('../../config/mysql_connection.js');
        connection.query('select * from noticias', function(error, result) {
            if (error == null) {
                res.render("noticias/noticias.ejs", {noticias : result});
            }
            else {
                res.end('Algo deu errado!');
            }
        });
    });
};
