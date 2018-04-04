var express = require('./config/server.js');
var routeNoticias = require('./app/routes/noticias.js')(express);
var routeHome = require('./app/routes/home.js')(express);
var routeAdmin = require('./app/routes/admin.js')(express);

express.listen(3000, function(){
    console.log('Tudo OK! Servidor online.');
});
 