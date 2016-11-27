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
var data = null;

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

function loadInfo(suburb) {
    $.getJSON('/data/' + suburb, {}, function(data) {
        console.log(data);
        if (data.err) {
            $("#notFound").fadeIn();
        } else {
            $("#notFound").fadeOut();
            for (var i = 0; i < textData.length; i++) {
                var item = textData[i];
                var id = item[1];
                var idx = Math.floor(data[item[0]]/2);
                $(id).text(scale[idx]);
                $(id).css({'color': colors[idx]})
            }
        }
    });
}
