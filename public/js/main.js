var map;
var thisKmlName = "Brisbane_City_Council";
var divisionName = [];
var kmlDivision = [];
var kmlName = [];
var kmlOverlay = [];
var kmlPath = [];
var kmlURL = "https://results.ecq.qld.gov.au/profiles/xml/";

function initMap() {
  // DO nothing (Loaded via click later)
}

function loadMap() {
    var brisbane = { lat: -27.470125, lng: 153.021072 };
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        center: brisbane
    });
    loadDivisionXML();
}

function loadXMLDoc(dname) {
  if (window.XMLHttpRequest) {
    var xhttp = new XMLHttpRequest();
  }
  else {
    var xhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xhttp.open("GET", dname, false);
  xhttp.send();
  return xhttp.responseXML;
}

function loadDivisionXML() {
  var xmlDoc_division = loadXMLDoc("data/divisions.xml");
  var placeMark = xmlDoc_division.getElementsByTagName('marker');
  var count = 10;

  divisionCount = 0;
  for (i = 0; i < placeMark.length; i++) {
      var divNo = divisionCount + 1;
      var divName = "Division " + divNo;
      divisionName[divisionCount] = placeMark[i].getAttribute("Division"); //divName;
      kmlDivision[divisionCount] = divisionName[divisionCount].replace(/ /g, "_"); // kml names
      kmlName[divisionCount] = thisKmlName + '_' + kmlDivision[divisionCount];
      kmlPath[divisionCount] = kmlURL + kmlName[divisionCount];
      kmlOverlay[divisionCount] = new google.maps.KmlLayer(kmlPath[divisionCount]);
      count-- && kmlOverlay[divisionCount].setMap(map);
      divisionCount++;
  }
  console.log(kmlPath);
}

$(document).ready(() => {
  runJS();
})