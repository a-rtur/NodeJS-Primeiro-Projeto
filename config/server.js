var express = require('express')();
var consign = require('consign');
express.set('view engine', 'ejs');
express.set('views', './app/views');
consign().include('./app/routes').then('./app/models').into(express);
module.exports = express;