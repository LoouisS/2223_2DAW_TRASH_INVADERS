function mostrarVista(idVista) {
    // Ocultar todas las vistas
    let vistas = document.getElementsByClassName('vista');
    for (let i = 0; i < vistas.length; i++) {
        vistas[i].style.display = 'none';
    }

    // Mostrar la vista seleccionada
    let vistaSeleccionada = document.getElementById(idVista);
    if (vistaSeleccionada) {
        vistaSeleccionada.style.display = 'block';
    }
}
