/**
 * GET /
 */
exports.index = function(req, res) {
  var places = ["Brisbane", "Sydney", "Hamilton", "Northgate", "The Gabba", "West End", "Corinda"];

  var max = 0;

  for (var i = 0; i < places.length; i++) {
    var place = places[i];
    max = (place.length > max) ? place.length : max;
  }
  for (var i = 0; i < places.length; i++) {
    var place = places[i];
    /*while (place.length < max) {
      place += "&nbsp;";
    }*/
    places[i] = place;
  }

  res.render('home', {
    title: 'Home',
    places: places.join(',')
  });
};
