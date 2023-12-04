import { Vista } from './template/vista.js'

/**
 * Clase que representa la vista de registro.
 * @extends Vista
 */
export class VistaRegistro extends Vista {
  /**
     * Crea una instancia de VistaRegistro.
     * @param {Controlador} controlador - El controlador de la aplicación.
     * @param {HTMLElement} contenedor - El contenedor de la vista.
     */
  constructor (controlador, contenedor) {
    // Llama al constructor de la clase padre (Vista)
    super(controlador, contenedor)

    // Añade el código JavaScript específico para la vista de registro
    this.inicializarFormulario()
  }

  /**
     * Inicializa el formulario de registro y agrega los eventos blur para validar los campos.
     */
  inicializarFormulario () {
    const nombreInput = this.contenedor.querySelector('#nombre')
    const correoInput = this.contenedor.querySelector('#correo')
    const contraseñaInput = this.contenedor.querySelector('#contraseña')
    const telefonoInput = this.contenedor.querySelector('#telefono')

    /**
         * Muestra un mensaje de error para un campo de entrada.
         * @param {HTMLElement} input - El campo de entrada.
         * @param {string} mensaje - El mensaje de error.
         */
    const mostrarMensajeError = (input, mensaje) => {
      const mensajeError = document.createElement('div')
      mensajeError.className = 'mensaje-error'
      mensajeError.textContent = mensaje
      mensajeError.style.color = 'red'
      input.parentNode.appendChild(mensajeError)
    }

    /**
         * Oculta el mensaje de error para un campo de entrada.
         * @param {HTMLElement} input - El campo de entrada.
         */
    const ocultarMensajeError = (input) => {
      const mensajeError = input.parentNode.querySelector('.mensaje-error')
      if (mensajeError) {
        mensajeError.remove()
      }
    }

    /**
         * Valida un campo de entrada y muestra un mensaje de error si es necesario.
         * @param {HTMLElement} input - El campo de entrada.
         * @param {Function} validarFuncion - La función de validación.
         * @param {string} mensaje - El mensaje de error.
         */
    const validarYMostrarMensaje = (input, validarFuncion, mensaje) => {
      ocultarMensajeError(input)
      if (!validarFuncion(input.value)) {
        mostrarMensajeError(input, mensaje)
      }
    }

    nombreInput.addEventListener('blur', () => {
      validarYMostrarMensaje(nombreInput, this.validarNombre, 'El nombre solo puede contener letras y espacios.')
    })

    correoInput.addEventListener('blur', () => {
      validarYMostrarMensaje(correoInput, this.validarCorreo, 'Por favor, ingrese un correo electrónico válido.')
    })

    contraseñaInput.addEventListener('blur', () => {
      validarYMostrarMensaje(contraseñaInput, this.validarContraseña, 'Por favor, ingrese una contraseña válida.')
    })

    telefonoInput.addEventListener('blur', () => {
      validarYMostrarMensaje(telefonoInput, this.validarTelefono, 'El número de teléfono debe tener exactamente 9 números.')
    })

    // Puedes agregar más eventos blur para otros campos
  }

  /**
     * Valida un nombre utilizando una expresión regular.
     * @param {string} nombre - El nombre a validar.
     * @returns {boolean} true si el nombre es válido, false de lo contrario.
     */
  validarNombre (nombre) {
    const regexNombre = /^[a-zA-Z\s]+$/
    return regexNombre.test(nombre)
  }

  /**
     * Valida un correo electrónico utilizando una expresión regular.
     * @param {string} correo - El correo electrónico a validar.
     * @returns {boolean} true si el correo electrónico es válido, false de lo contrario.
     */
  validarCorreo (correo) {
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regexCorreo.test(correo)
  }

  /**
     * Valida una contraseña utilizando una expresión regular.
     * @param {string} contraseña - La contraseña a validar.
     * @returns {boolean} true si la contraseña es válida, false de lo contrario.
     */
  validarContraseña (contraseña) {
    const regexContraseña = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    return regexContraseña.test(contraseña)
  }

  /**
     * Valida un número de teléfono utilizando una expresión regular.
     * @param {string} telefono - El número de teléfono a validar.
     * @returns {boolean} true si el número de teléfono es válido, false de lo contrario.
     */
  validarTelefono (telefono) {
    const regexTelefono = /^\d{9}$/
    return regexTelefono.test(telefono)
  }
}
