var classes = require("../classdata.json");

/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('index', classes);
};

