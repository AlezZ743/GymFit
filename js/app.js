$(document).ready(function () {

    let puntero = 0;
    const secciones = $("#botones-ejercicios .boton");
    const totalsecciones = secciones.length;
    var h3_ejercicios = $("#mis-ejercicios h3");

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

        // actualizamos variable con los h3
        
        h3_ejercicios = $("#mis-ejercicios h3");

        //$("#mis-ejercicios").append($(this).children("*"));

    });

    $(h3_ejercicios).click(function () {
        
        // Busco el boton correspondiente en la tabla de ejercicios
        console.log("ejercicio pulsado");

        for (var i = 0; i <= totalsecciones; i++) {
            console.log("Buscando boton");
            // Si el boton es el buscado, lo muestro

            if (alert($(this).attr("data-ejercicio")) == $(secciones(i).alert("data-ejercicio"))) {
                console.log("boton encontrado");
                console.log("i = " + i);

                i = totalsecciones + 1;
                $(secciones(i)).show();
            }
        }

        // Oculto el ejercicio seleccionado
        $(this).hide();
    });

    // preparar html y js para buscar nombre correspondiente al elemento seleccionado
    // y mostrarle de nuevo

});

