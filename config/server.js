var express = require('express')();
var consign = require('consign');
express.set('view engine', 'ejs');
express.set('views', './app/views');
consign().include('./app/routes').into(express);
module.exports = express;