var classes = require("../classdata.json")['classes'];

exports.view = function(req, res){
    var classID = req.params.id;
    var classs = getClassData(classID);
    res.render('classes', classs);
  };

function getClassData(classID) {
  classID = parseInt(classID);
  var classs = classes[classID-1];
  return classs;
}