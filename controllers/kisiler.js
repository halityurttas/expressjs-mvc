var model = require('../models/kisiler');

exports.index = function(req, res) {
    res.render('kisiler/index', model);
}