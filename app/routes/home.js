module.exports = function(express) {
    express.get('/', function(req, res) {
        res.render('home/index.ejs');
    });
};
