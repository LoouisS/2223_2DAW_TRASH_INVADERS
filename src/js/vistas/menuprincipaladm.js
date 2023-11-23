//vistaMenuAdm
import { Vista } from './vista.js'
import { Juego } from './juego.js'

/**
 * Clase que representa la segunda vista de la aplicación.
 * @class
 * @extends Vista
 */
export class MenuPrincipalAdm extends Vista {
    /**
     * Crea una instancia de Vista2.
     * @constructor
     * @param {Controlador} controlador - Instancia del controlador asociado a la vista.
     * @param {HTMLElement} base - Elemento HTML que sirve como la base de la vista.
     */
    constructor (controlador, base) {
        super(controlador, base)
        this.crearInterfaz()
    }

    /**
     * Crea la interfaz de la vista.
     * @private
     * @returns {void}
     */
    crearInterfaz () {
        // Botón JUGAR
        this.botonJugar = this.base.querySelector('#boton-jugar')
        this.botonJugar.onclick = this.pulsarBotonJugar.bind(this)

        // Botón MEJORAS
        this.botonJugar = this.base.querySelector('#boton-mejoras')
        this.botonJugar.onclick = this.pulsarBotonMejoras.bind(this)

        // Botón CLASIFICACIONES
        this.botonJugar = this.base.querySelector('#boton-clasificaciones')
        this.botonJugar.onclick = this.pulsarBotonClasificaciones.bind(this)

        // Botón SALIR
        this.botonJugar = this.base.querySelector('#boton-salir')
        this.botonJugar.onclick = this.pulsarBotonSalir.bind(this)
    }

    /**
     * Maneja el evento de hacer clic en el botón JUGAR.
     * @private
     * @returns {void}
     */
    pulsarBotonJugar () {
     // Manejar el evento del botón JUGAR
     // console.log('Botón JUGAR pulsado');
     // Cambiar a la vista de juego
        this.controlador.verVista(Juego.divvistaJuego) 
    }

    pulsarBotonMejoras () {
        // Manejar el evento del botón MEJORAS
        // console.log('Botón JUGAR pulsado');
        // Cambiar a la vista mejoras
        this.controlador.verVista(Juego.divvistaJuego) 
    }

    pulsarBotonClasificaciones () {
        // Manejar el evento del botón CLASIFICACIONES
        // console.log('Botón CLASIFICACIONES pulsado');
        // Cambiar a la vista clasificaciones
        this.controlador.verVista(Juego.divvistaJuego) 
    }

    pulsarBotonSalir () {
        // Manejar el evento del botón SALIR
        // console.log('Botón SALIR pulsado');
        // Cambiar a la vista de inicio de sesión
        this.controlador.verVista(Juego.divvistaJuego) 
    }
}