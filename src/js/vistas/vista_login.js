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

    const botonVolver = contenedor.querySelector('#go-back-button')

    botonVolver.onclick = () => {
      this.controlador.irAVista('vistaPrincipal')
    }

    const botonLogin = contenedor.querySelector('#login-button')
    
    // TODO Agregar la funcionalidad del login
    botonLogin.onclick = () => {
      this.controlador.irAVista('vistaMenu')
    }

  }
}
