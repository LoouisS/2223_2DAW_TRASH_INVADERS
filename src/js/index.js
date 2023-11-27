class trashInvaders{

    constructor() {
        // Guardamos todas las vistas del juego
        this.views = {
            vistaPrincipal: document.getElementById('vista-principal'),
            vistaRegistro: document.getElementById('vista-registro'),
            vistaLogin: document.getElementById('vista-login'),
            vistaMenu: document.getElementById('vista-menu-usuario'),
            vistaJuego: document.getElementById('vista-principal-juego'),
            vistaMejoras: document.getElementById('vista-menu-mejoras'),
            vistaClasificaciones: document.getElementById('vista-clasificaciones'),
            vistaOpcionesAdmin: document.getElementById('vista-opciones-administrador'),
            vistaPoolImagenes: document.getElementById('vista-pool-imagenes')
        }

        for (const view of Object.values(this.views)) {
            view.style.display = 'none';
        }

        this.views.vistaPrincipal.style.display = 'block';
    }

}


// Punto de entrada de la aplicacion
window.onload = () => {
    new trashInvaders()
    const divs = document.getElementsByClassName('vistas')   
    console.log(divs);
}
