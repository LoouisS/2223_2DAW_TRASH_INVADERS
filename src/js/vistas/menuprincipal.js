//vistaMenu
import { Vista } from './vista.js'
import { Juego } from './juego.js'

/**
 * Clase que representa la segunda vista de la aplicación.
 * @class
 * @extends Vista
 */
export class MenuPrincipal extends Vista {
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
  }

  /**
     * Maneja el evento de hacer clic en el botón JUGAR.
     * @private
     * @returns {void}
     */
  pulsarBotonJugar () {
    // Manejar el evento del botón JUGAR
    // console.log('Botón JUGAR pulsado');
    // Cambiar a la Vista3
    this.controlador.verVista(Vista3.VISTA3) // Cambiado a Vista3.VISTA3
  }
}