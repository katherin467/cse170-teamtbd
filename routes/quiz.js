var classes = require("../classdata.json")['classes'];

exports.view = function(req, res){
    res.render('quiz', classes);
  };

// see classes.js for specific class data for quiz