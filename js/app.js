$(document).ready(function () {

    $("#respuestas").append("<option selected><p>18</p></option>");
    
    for (var i = 18; i <= 100; i++) {
        var rellenop = "<option>" + i + "</option>";
        $("#respuestas").append(rellenop);
    };

    
});

