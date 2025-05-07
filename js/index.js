$(document).ready(function() {
    /* ------------------------------------------------------------------------------------- VARIABLES CARRUSEL */
    let puntero = 0;
    const imagenes = $('.carrusel-imagenes img');
    const totalImagenes = imagenes.length;
    /* ------------------------------------------------------------------------------------- FUNCIONES CARRUSEL */
    function verImagen(index) {
        const offset = -index * 100;
        $('.carrusel-imagenes').css('transform', `translateX(${offset}%)`);
    }

    $('.siguiente').click(function() {
        puntero = (puntero + 1) % totalImagenes;
        verImagen(puntero);
    });

    $('.previo').click(function() {
        puntero = (puntero - 1 + totalImagenes) % totalImagenes;
        verImagen(puntero);
    });
});
//*565465465