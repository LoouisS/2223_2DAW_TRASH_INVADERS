/**
 * Clase base que representa una vista en la aplicación.
 * @class
 */
export class Vista {
  /**
     * Enumeración de símbolos que representan diferentes vistas.
     * @readonly
     * @enum {Symbol}
     */
  static {
    Vista.VISTA1 = Symbol('Inicio')
    Vista.VISTA2 = Symbol('Menu')
    Vista.VISTA3 = Symbol('Juego')
  }

  /**
     * Crea una instancia de la clase Vista.
     * @constructor
     * @param {Controlador} controlador - Instancia del controlador asociado a la vista.
     * @param {HTMLElement} base - Elemento HTML que sirve como la base de la vista.
     */
  constructor (controlador, base) {
    /**
         * Instancia del controlador asociado a la vista.
         * @type {Controlador}
         */
    this.controlador = controlador

    /**
         * Elemento HTML que sirve como la base de la vista.
         * @type {HTMLElement}
         */
    this.base = base
  }

  /**
     * Muestra u oculta la vista.
     * @param {boolean} ver - Indica si la vista debe mostrarse (true) u ocultarse (false).
     * @returns {void}
     */
  mostrar (ver) {
    if (ver) {
      this.base.style.display = 'block'
    } else {
      this.base.style.display = 'none'
    }
  }
}
