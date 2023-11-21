//vistaLogin
import { Vista } from './vista.js'
import { MenuPrincipal } from './menuprincipal.js' // Importa la clase Vista2

/**
 * Clase que representa la primera vista de la aplicación.
 * @class
 * @extends Vista
 */
export class InicioSesion extends Vista {
  /**
     * Crea una instancia de Vista1.
     * @constructor
     * @param {Controlador} controlador - Instancia del controlador asociado a la vista.
     * @param {HTMLElement} base - Elemento HTML que sirve como la base de la vista.
     */
  constructor (controlador, base) {
    super(controlador, base)

    /**
         * Botón para iniciar sesión.
         * @type {HTMLButtonElement}
         */
    this.botonInicioSesion = this.base.querySelector('#boton-inicio-sesion')

    /**
         * Campo de entrada para el nombre de usuario.
         * @type {HTMLInputElement}
         */
    this.inputUsuario = this.base.querySelector('#usuario')

    // Agregar evento al botón de inicio de sesión
    this.botonInicioSesion.onclick = this.pulsarBotonInicioSesion.bind(this)

    // Agregar eventos para la validación del campo de usuario
    this.inputUsuario.addEventListener('blur', this.validarUsuario.bind(this))

    /**
         * Elemento HTML para mostrar mensajes de error.
         * @type {HTMLParagraphElement}
         */
    this.mensajeError = document.createElement('p')
    this.mensajeError.id = 'mensaje-error' // Asignar un ID al mensaje de error
    this.base.appendChild(this.mensajeError)

    // Establecer estilos iniciales para el mensaje de error
    this.mensajeError.style.color = 'red'
    this.mensajeError.style.display = 'none' // Ocultar inicialmente el mensaje de error
  }

  /**
     * Maneja el evento de hacer clic en el botón de inicio de sesión.
     * @private
     * @returns {void}
     */
  pulsarBotonInicioSesion () {
    // Obtener el valor del campo de usuario
    const usuario = this.inputUsuario.value

    // Definir la expresión regular para validar
    const regex1 = /^[a-zA-Z0-9]{3}$/

    // Verificar si el usuario cumple con la regex1
    if (regex1.test(usuario)) {
      // Usuario válido, cambiar a la Vista2
      this.controlador.verVista(MenuPrincipal.vistaMenu)

      // Limpiar el mensaje de error si estaba visible
      this.mostrarMensajeError('')
    } else {
      // Usuario no válido, mostrar un mensaje de error
      const mensaje = 'Debe introducir 3 caracteres/numeros'
      this.mostrarMensajeError(mensaje)
    }
  }

  /**
     * Muestra un mensaje de error al lado del campo de usuario.
     * @private
     * @param {string} mensaje - Mensaje de error a mostrar.
     * @returns {void}
     */
  mostrarMensajeError (mensaje) {
    // Mostrar el mensaje de error al lado del campo de usuario
    this.mensajeError.textContent = mensaje
    this.mensajeError.style.left = '10px' // Ajustar posición a la izquierda del campo
    this.mensajeError.style.top = '40%' // Ajustar posición al nivel del campo
    this.mensajeError.style.display = mensaje ? 'block' : 'none' // Mostrar u ocultar el mensaje de error
  }

  /**
     * Valida el campo de usuario y cambia el color del recuadro según la validación.
     * @private
     * @returns {void}
     */
  validarUsuario () {
    // Obtener el valor del campo de usuario
    const usuario = this.inputUsuario.value

    // Cambiar el color del recuadro según la validación
    this.inputUsuario.style.borderColor = /^[a-zA-Z0-9]{3}$/.test(usuario) ? 'green' : 'red'
  }
}