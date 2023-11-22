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
    Vista.vistaIndice = Symbol('Indice')
    Vista.vistaRegistro = Symbol('Registro de usuario')
    Vista.vistaInicio = Symbol('Inicio de sesion')
    Vista.vistaMenuUsuario = Symbol('Menu del usuario')
    Vista.vistaMenuAdm = Symbol('Menu del administrador')
    Vista.vistaOpciones = Symbol('Opciones del administrador')
    Vista.vistaBanco = Symbol('Banco de imagenes')
    Vista.vistaMejoras = Symbol('Power ups')
    Vista.vistaNewMejora = Symbol('Nuevos power ups')
    Vista.vistaModMejora = Symbol('Modificar power ups')
    Vista.vistaClasificaciones = Symbol('Clasificaciones')
    Vista.vistaJuego = Symbol('Juego')
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
