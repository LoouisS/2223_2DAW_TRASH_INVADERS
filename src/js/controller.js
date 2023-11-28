import { Modelo } from './modelos/modelo_configuracion.js'
import { VistaPrincipal } from './vistas/vistaPrincipal.js'
import { VistaLogin } from './vistas/vistaLogin.js'

class trashInvaders{

    vistaActual =  null;
    modelo = null;
    views = null;

    constructor() {
        // Guardamos todas las vistas del juego
        this.views = {
            'vistaPrincipal': document.getElementById('vista-principal'),
            'vistaRegistro': document.getElementById('vista-registro'),
            'vistaLogin': document.getElementById('vista-login'),
            'vistaMenu': document.getElementById('vista-menu-usuario'),
            'vistaJuego': document.getElementById('vista-principal-juego'),
            'vistaMejoras': document.getElementById('vista-menu-mejoras'),
            'vistaClasificaciones': document.getElementById('vista-clasificaciones'),
            'vistaOpcionesAdmin': document.getElementById('vista-opciones-administrador'),
            'vistaPoolImagenes': document.getElementById('vista-pool-imagenes')
        }

        this.ocultarVistas();

        this.views.vistaPrincipal.style.display = 'block';

        this.vistaPrincipal = new VistaPrincipal(this, this.views.vistaPrincipal);
        this.vistaLogin = new VistaLogin(this, this.views.vistaLogin);

    }

    irAVista(vista) {
        this.ocultarVistas()
        this.views[vista].style.display = 'block'
    }

    ocultarVistas() {
        for (const view of Object.values(this.views)) {
            view.style.display = 'none';
        }
    }

}


// Punto de entrada de la aplicacion
window.onload = () => {
    new trashInvaders()
    const divs = document.getElementsByClassName('vistas')   
    console.log(divs);
}
