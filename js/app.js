$(document).ready(function () {

    let punteros = 0;
    const secciones = $(".aplicacion-main .app-entrenamiento section");
    const totalsecciones = secciones.length;

    console.log(secciones);
    console.log(totalsecciones);

    // Funciones Globales
    function botonera() {
        if (punteros == 0) {
            $("#btnAtras").hide();
        };

        if (punteros != 0) {
            $("#btnAtras").show();
        };

    };

    // Oculto todas la secciones
    secciones.hide();

    // Relleno el campo de edades de la seccion edad
    $("#respuestas").append("<option selected><p>8</p></option>");
    for (var i = 9; i <= 100; i++) {
        var rellenop = "<option>" + i + "</option>";
        $("#respuestas").append(rellenop);
    };

    // Muestro solo la seccion edad
    $(secciones).eq(0).show();
    botonera();

    $("#btnSiguiente").click(function () {
        punteros = punteros + 1;
        console.log(punteros);
        console.log("Boton Siguiente");

        $(secciones).eq(punteros - 1).hide();
        $(secciones).eq(punteros).show();
        botonera();
    });

    $("#btnAtras").click(function () {
        punteros = punteros - 1;
        console.log(punteros);
        console.log("Boton Atras");

        $(secciones).eq(punteros + 1).hide();
        $(secciones).eq(punteros).show();
        botonera();
    });



});

