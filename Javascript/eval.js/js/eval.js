$(document).ready(function () {

    $('#date').focus(function () {
        $(this).css('background-color', 'yellow');
    });
    $('#date').blur(function () {
        $(this).css('background-color', 'white');
    });

});

$(document).ready(function () {

    $('#date').focus(function () {
        $(this).css('background-color', 'yellow');
    });
    $('#date').blur(function () {
        $(this).css('background-color', 'purple');
    });

});

$(document).ready(function () {
    $("#choix").change(function () {
        alert("Nouvelle option sel      ectionnée");
    });
});