var data = require('../public/data/data.js');

/**
 * GET /
 */
exports.index = function(req, res) {
  var places = ["Brisbane", "Hamilton", "Northgate", "The Gabba", "West End", "not Melbourne", "definitely not Sydney"];

  var max = 0;

  for (var i = 0; i < places.length; i++) {
    var place = places[i];
    max = (place.length > max) ? place.length : max;
  }
  for (var i = 0; i < places.length; i++) {
    var place = places[i];
    places[i] = place;
  }

  res.render('home', {
    title: 'Home',
    places: places.join(',')
  });
};

exports.dataGet = function(req, res) {
  var suburb = req.params.suburb;
  var result = data[suburb];

  if (result == null) {
    res.send({"err": "NotFound"});
  } else {
    res.send(JSON.stringify(result));
  }
};