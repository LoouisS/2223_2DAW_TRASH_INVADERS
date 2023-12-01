import { Vista } from './template/vista.js'

/**
 * Clase que representa la vista de inicio de sesión.
 * @extends Vista
 */
export class VistaLogin extends Vista {
  /**
     * Crea una instancia de la vista de inicio de sesión.
     * @param {Controlador} controlador - El controlador de la aplicación.
     * @param {HTMLElement} contenedor - El elemento contenedor de la vista.
     */
  constructor (controlador, contenedor) {
    super(controlador, contenedor)

    // Seleccionamos el input type submit del formulario

    const botonLogin = contenedor.querySelector('#vistaMenu')
    const botonVolver = contenedor.querySelector('#buttonVolver')

    botonLogin.onclick = () => {
      this.controlador.irAVista('vistaMenu')
    }

    botonVolver.onclick = () => {
      this.controlador.irAVista('vistaPrincipal')
    }
  }
}
