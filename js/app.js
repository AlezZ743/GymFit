$(document).ready(function () {

    let puntero = 0;
    const secciones = $("#botones-ejercicios .boton");
    const h3_ejercicios = $("#mis-ejercicios h3");
    const totalsecciones = secciones.length;

    console.log("Secciones: ");
    console.log(secciones);
    console.log("Numero de secciones: ")
    console.log(totalsecciones);

    console.log("h3 en ejercicios");

    // Comprueba si se pulsa un boton
    $(secciones).click(function () {

        // Ocultamos el boton
        $(this).hide();

        // Copiamos el h3 del boton y lo pego en la parte de la tabla
        // de mis ejercicios

        $("#mis-ejercicios").append($(this).children("h3"));

    });

    $(h3_ejercicios).click(function () {

        // Oculto el ejercicio seleccionado
        $(this).hide();

        // vuelvo a activar el boton del ejercicio correspondiente
        for (var i = 0; i <= totalsecciones; i++) {
            if ($(secciones(i)).children("h3") == $(this.children("h3"))) {
                puntero = i;
            };
        };
        secciones(puntero).show();

        console.log("Has hecho click en: ");
        console.log(puntero);

    });

    // preparar html y js para buscar nombre correspondiente al elemento seleccionado
    // y mostrarle de nuevo

});

