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
        let ejercicioSeleccionado = $(this).clone(); // Clona el objeto completo
        $("#mis-ejercicios").append(ejercicioSeleccionado); // Lo añade a la zona de ejercicios
        $(this).hide(); // Oculta el botón original
    });

    $(document).on('click', '#mis-ejercicios .boton', function () {
        let ejercicioSeleccionado = $(this).attr("data-ejercicio");

        // Buscar el botón original en la lista de ejercicios y mostrarlo
        $(`#botones-ejercicios .boton[data-ejercicio="${ejercicioSeleccionado}"]`).show();

        // Ocultar el botón en la zona de 'Mis Ejercicios'
        $(this).remove();
    });
});

