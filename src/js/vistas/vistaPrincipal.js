import { Vista } from './template/vista.js'

/**
 * Clase que representa la vista principal del proyecto.
 * @extends Vista
 */
export class VistaPrincipal extends Vista {
  /**
     * Crea una instancia de la vista principal.
     * @param {Controlador} controlador - El controlador del proyecto.
     * @param {HTMLElement} contenedor - El contenedor de la vista principal.
     */
  constructor (controlador, contenedor) {
    super(controlador, contenedor)

    /**
         * El botón de inicio de sesión.
         * @type {HTMLElement}
         */
    const botonLogin = contenedor.querySelector('#boton-login')

    /**
         * El botón de registro.
         * @type {HTMLElement}
         */
    const botonRegistro = contenedor.querySelector('#boton-registro')

    botonLogin.onclick = () => {
      this.controlador.irAVista('vistaLogin')
    }

    botonRegistro.onclick = () => {
      this.controlador.irAVista('vistaRegistro')
    }
  }
}
