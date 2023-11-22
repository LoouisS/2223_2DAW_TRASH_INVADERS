//vistaIndice
import { Vista } from './vista.js'

export class Indice extends Vista{

    constructor (controlador, base) {
        super(controlador, base)
        this.crearInterfaz()
    }

    crearInterfaz () {
        // Botón JUGAR
        this.botonJugar = this.base.querySelector('#boton-jugar')
        this.botonJugar.onclick = this.pulsarBotonJugar.bind(this)
    }

    pulsarBotonJugar () {
        // Manejar el evento del botón JUGAR
        // console.log('Botón JUGAR pulsado');
        // Cambiar a la Vista3
        this.controlador.verVista(Juego.divvistaJuego) // Cambiado a Vista3.VISTA3
    }
}