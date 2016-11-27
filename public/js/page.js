var textData = [
    ["median_housing_cost", "#housing"], 
    ["traffic", "#traffic"], 
    ["poi", "#poi"], 
    ["construction", "#constructions"], 
    ["noise", "#noise"], 
    ["public_transport", "#transport"], 
    ["distance_to_cbd", "#distance"]
];
var scale = ["Very poor", "Poor", "Average", "Good", "Very good"];
var colors = ["red", "orange", "black", "green", "darkgreen"];
var allData = null;
var suburb;

function runJS() {
    $('#go').click(() => {
        $('.first').fadeOut({duration: 'fast', done: function() {
            $('.second').fadeIn({duration: 'fast', done: function() {
                loadMap();

                $('#search').val($('#sample1').val() + $('#sample2').val());
                $('#sample1').val('');
                $('#sample1').val('');

                $("#searchTerm").text($("#search").val());

                loadInfo($('#search').val().toLowerCase().replace(' ', '_'));

                $('#search').on('keyup', () => {
                    $("#searchTerm").text($("#search").val());
                    loadInfo($('#search').val().toLowerCase().replace(' ', '_'));
                })
            }});
        }});
    });
    $("#flipperOfShit").textrotator({
        animation: "dissolve", // You can pick the way it animates when rotating through words. Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
        separator: ",", // If you don't want commas to be the separator, you can define a new separator (|, &, * etc.) by yourself using this field.
        speed: 2000 // How many milliseconds until the next word show.
    });
}

function loadInfo(suburb2) {
    suburb = suburb2;
    $.getJSON('/data/' + suburb, {}, function(data) {
        allData = data;
        if (data.err) {
            $("#notFound").fadeIn();
        } else {
            loadGraphs();
            $("#notFound").fadeOut();
            for (var i = 0; i < textData.length; i++) {
                var item = textData[i];
                var id = item[1];
                var idx = Math.floor((data[item[0]]-1)/2);
                $(id).text(scale[idx]);
                $(id).css({'color': colors[idx]})
            }
        }
    });
}

function loadGraphs() {
    var raw = [];
    raw.push(['Year', 'Population'])
    for (var i = 2006; i < 2026; i++) {
        raw.push([i, allData.population[i - 2006]]);
    }
    var data = google.visualization.arrayToDataTable(raw);

    var options = {
        title: 'Population Growth for ' + $("#search").val(),
        curveType: 'function',
        legend: { position: 'bottom' },
        colors: ["#ff5722"],
        chartArea: {'width': '90%', 'height': '80%'},
        pointSize: 8,
        hAxis: {format: ''}
    };

    var chart = new google.visualization.LineChart(document.getElementById('population_chart'));

    chart.draw(data, options);

    loadTraffic();
    loadPastTraffic();
}

function fixString(string) {
    string = string.replace(/([a-z])([A-Z])/g, '$1 $2');
    string = string.replace(/([A-Z])([A-Z][a-z])/g, '$1 $2')
    return string;
}

function loadTraffic() {
    var raw = [];
    var something = ['Travel Time'];
    var length = 0;
    var count = 0;
    var max = 4;
    for (var road in allData.future_traffic) {
        if (count++ == max) {
            break;
        }
        if (allData.future_traffic.hasOwnProperty(road)) {
            something.push(fixString(road.replace('_', '')));
            length = road.length;
        }
    }
    raw.push(something)
    for (var i = 2016; i < 2016 + length; i++) {
        data = [i];
        count = 0;
        for (var road in allData.future_traffic) {
            if (count++ == max) {
                break;
            }
            if (allData.future_traffic.hasOwnProperty(road)) {
                data.push(allData.future_traffic[road][i - 2016]);
            }
        }
        raw.push(data);
    }
    var data = google.visualization.arrayToDataTable(raw);

    var options = {
        title: 'Future Travel Times for ' + $("#search").val(),
        curveType: 'function',
        legend: { position: 'bottom' },
        chartArea: {'width': '90%', 'height': '80%'},
        pointSize: 8,
        hAxis: {format: ''}
    };

    var chart = new google.visualization.LineChart(document.getElementById('future_traffic'));

    chart.draw(data, options);
}

function loadPastTraffic() {
    var raw = [];
    var something = ['Travel Time'];
    var length = 0;
    var count = 0;
    var max = 4;
    for (var road in allData.past_traffic) {
        if (count++ == max) {
            break;
        }
        if (allData.past_traffic.hasOwnProperty(road)) {
            something.push(fixString(road.replace('_', '')));
            length = road.length;
        }
    }
    raw.push(something)
    for (var i = 2016 - length; i < 2016; i++) {
        data = [i];
        count = 0;
        for (var road in allData.future_traffic) {
            if (count++ == max) {
                break;
            }
            if (allData.past_traffic.hasOwnProperty(road)) {
                data.push(allData.past_traffic[road][i - (2016 - length)]);
            }
        }
        raw.push(data);
    }
    var data = google.visualization.arrayToDataTable(raw);

    var options = {
        title: 'Past Travel Times for ' + $("#search").val(),
        curveType: 'function',
        legend: { position: 'bottom' },
        chartArea: {'width': '90%', 'height': '80%'},
        pointSize: 8,
        hAxis: {format: ''}
    };

    var chart = new google.visualization.LineChart(document.getElementById('past_traffic'));

    chart.draw(data, options);
}

google.charts.load('current', {'packages':['corechart']});
