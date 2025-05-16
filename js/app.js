$(document).ready(function () {

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

