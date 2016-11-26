var sliders = ["public", "traffic", "poi", "crime", "housing"];

function runJS() {
    $('#go').click(() => {
        $('.first').fadeOut({duration: 'fast', done: function() {
            $('.second').fadeIn({duration: 'fast', done: function() {
                loadMap();
                $('#search').val($('#sample1').val() + $('#sample2').val());
                $('#sample1').val('');
                $('#sample1').val('');

                loadSliders();
            }});
        }});
    });
    $("#flipperOfShit").textrotator({
        animation: "dissolve", // You can pick the way it animates when rotating through words. Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
        separator: ",", // If you don't want commas to be the separator, you can define a new separator (|, &, * etc.) by yourself using this field.
        speed: 2000 // How many milliseconds until the next word show.
    });
}

function loadSliders() {
    for (var i = 0; i < sliders.length; i++) {
        $('#' + sliders[i]).on("change", (value, event) => {
            console.log(value, event);
            $('#' + sliders[i] + "_value").val($('#' + sliders[i]).val());
        });
    }
}