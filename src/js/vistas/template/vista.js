/**
 * Represents a view in the application.
 * @class
 */
export class Vista {
  /**
     * Crea una nueva instancia de la clase Vista.
     * @constructor
     * @param {Object} controlador - El objeto controlador.
     * @param {HTMLElement} contenedor - El elemento contenedor para la vista.
     */
  constructor (controlador, contenedor) {
    this.controlador = controlador
    this.contenedor = contenedor
  }

  /**
     * Muestra u oculta la vista según el parámetro dado.
     * @param {boolean} ver - Indica si se debe mostrar u ocultar la vista.
     */
  mostrar (ver) {
    if (ver) {
      this.contenedor.style.display = 'block'
    } else {
      this.contenedor.style.display = 'none'
    }
  }
}
