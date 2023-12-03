import { Vista } from './template/vista.js'

/**
 * Clase que representa la vista del menú de usuario.
 * @class
 * @extends Vista
 */
export class VistaMenuUsuario extends Vista {
  /**
     * Crea una instancia de la vista del menú de usuario.
     * @constructor
     * @param {Controlador} controlador - El controlador de la aplicación.
     * @param {HTMLElement} contenedor - El elemento contenedor de la vista.
     */
  constructor (controlador, contenedor) {
    super(controlador, contenedor)

    const botonJugar = contenedor.querySelector('#boton-jugar')
    const botonMejoras = contenedor.querySelector('#mejoras-usuario')
    const volverLogin = contenedor.querySelector('#volverlogin')
    const vistaRankings = contenedor.querySelector('#vistaRankings')

    /**
         * Evento click del botón "Mejoras".
         * Redirige a la vista de mejoras.
         * @event
         */
    botonMejoras.onclick = () => {
      this.controlador.irAVista('vistaMejoras')
    }

    /**
         * Evento click del botón "Volver al login".
         * Redirige a la vista principal.
         * @event
         */
    volverLogin.onclick = () => {
      this.controlador.irAVista('vistaPrincipal')
    }

    /**
         * Evento click del botón "Rankings".
         * Redirige a la vista de rankings.
         * @event
         */
    vistaRankings.onclick = () => {
      this.controlador.irAVista('vistaRankings')
    }

    /**
         * Evento click del botón "Jugar".
         * Redirige a la vista de juego.
         * @event
         */

    botonJugar.onclick = () => {
      this.controlador.irAVista('vistaJuego')
    }
  }
}
