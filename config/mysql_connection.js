var mysql = require('mysql');
var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'admin',
    database : 'portal_noticias'
});
module.exports = connection;