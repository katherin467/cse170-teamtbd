var classes = require("../classdata.json")['classes'];


exports.view = function(req, res) {
    var lectureID = req.params.id; // turing-machines
    var lecture = getLectureData(lectureID);
    res.render('lecture', lecture);
  };

function getLectureData(lectureID) {
  //lectureID = parseInt(lectureID);
  var lecture = classes[1]["tasks"][0]; // hard coded oops
  return lecture;
}
