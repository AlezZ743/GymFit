$(document).ready(function () {

    let puntero = 0;
    const secciones = $("#botones-ejercicios .boton");

    console.log('secciones=', secciones);

    const totalsecciones = secciones.length;
    var temporal;

    console.log("html Cargado con exito");
    console.log("Secciones: ", secciones);
    console.log("Numero de secciones: ")
    console.log(totalsecciones);

    // Comprueba si se pulsa un boton
    $('#botones-ejercicios .boton').click(function () {

        ejerciciosel = $(this).attr("data-ejercicio");

        ejercicioappend = '<h3>' + ejerciciosel + '</h3>';

        ejercicioappend = `<h3 data-ejercicio="${ejerciciosel}">${ejerciciosel}</h3>`;
        console.log(ejercicioappend);

        $("#mis-ejercicios").append(ejercicioappend);

        // Ocultamos el boton
        $(this).hide();

    });

    $(document).on('click', '#mis-ejercicios  h3', function () {

        // Busco el boton correspondiente en la tabla de ejercicios
        console.log("ejercicio pulsado");

        for (var i = 0; i <= totalsecciones; i++) {
            console.log("Buscando boton");

            // Si el boton es el buscado, lo muestro

            if ($(this).attr("data-ejercicio") == secciones.eq(i).attr("data-ejercicio")) {

                console.log('i=', secciones.eq(i).attr("data-ejercicio"));

                console.log("i = " + i);

                // Muestro otra vez el boton oculto

                secciones.eq(i).show();

                // Oculto el ejercicio seleccionado
                $(this).hide();

                // Salgo del bucle

                i = totalsecciones + 1;
            };
        };

    });

    // preparar html y js para buscar nombre correspondiente al elemento seleccionado
    // y mostrarle de nuevo

});

