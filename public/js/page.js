var textData = ["#housing", "#traffic", "#poi", "#construction", "#noise", "#transport", "distance"];
var scale = ["Very poor", "Poor", "Average", "Good", "Very good"]

function runJS() {
    $('#go').click(() => {
        $('.first').fadeOut({duration: 'fast', done: function() {
            $('.second').fadeIn({duration: 'fast', done: function() {
                loadMap();

                $('#search').val($('#sample1').val() + $('#sample2').val());
                $('#sample1').val('');
                $('#sample1').val('');

                loadInfo();
            }});
        }});
    });
    $("#flipperOfShit").textrotator({
        animation: "dissolve", // You can pick the way it animates when rotating through words. Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
        separator: ",", // If you don't want commas to be the separator, you can define a new separator (|, &, * etc.) by yourself using this field.
        speed: 2000 // How many milliseconds until the next word show.
    });
}

function loadInfo() {
    for (var i = 0; i < textData.length; i++) {
        (function(index) {
            $(sliders[index]).on("change", (value, event) => {
                $(sliders[index] + "_value").text($(sliders[index]).val());
            });
        })(i);
    }
}