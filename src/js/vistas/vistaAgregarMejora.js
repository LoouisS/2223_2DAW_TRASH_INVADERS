import { Vista } from './template/vista.js'
import { Rest } from '../services/rest.js'

/**
 * Clase que representa la vista para agregar mejoras.
 * @extends Vista
 */
/**
 * Clase que representa la vista de agregar mejora.
 * @extends Vista
 */
export class VistaAgregarMejora extends Vista {
  /**
   * Array de imágenes.
   * @type {Array}
   */
  imagenes = null

  /**
   * Crea una instancia de VistaAgregarMejora.
   * @param {Controlador} controlador - El objeto controlador.
   * @param {HTMLElement} contenedor - El elemento contenedor.
   */
  constructor (controlador, contenedor) {
    super(controlador, contenedor)

    /**
     * Inicializa las imágenes.
     * @returns {Promise<void>}
     */
    
    this.inicializarImagenes = async () => {
      try {
        this.imagenes = await Rest.obtenerImagenes()
        this.mostrarImagenes()
      } catch (error) {
        console.error('Error al obtener las imágenes:', error)
      }
    }

    /**
     * Inicializa las imágenes y las muestra.
     */
    this.mostrarImagenes = () => {
      const poolImagenes = this.contenedor.querySelector('#select-option-agregar-mejora')

      this.imagenes.forEach(item => {
        const option = this.crearOpcion(item.nombre)
        poolImagenes.appendChild(option)
      })

      this.mostrarImagenSeleccionada()
    }

    /**
     * Muestra la imagen seleccionada.
     */
    this.mostrarImagenSeleccionada = () => {
      const selectImagenes = this.contenedor.querySelector('#select-option-agregar-mejora')
      const nombreSeleccionado = selectImagenes.value

      // Obtener el elemento donde se mostrará la previsualización de la imagen
      const previsualizacionImagen = this.contenedor.querySelector('#imagen-previsualizacion')

      // Limpiar la previsualización actual
      this.limpiarPrevisualizacion(previsualizacionImagen)

      // Buscar la imagen seleccionada
      const imagenSeleccionada = this.imagenes.find(imagen => imagen.nombre === nombreSeleccionado)

      if (imagenSeleccionada) {
        this.mostrarImagen(imagenSeleccionada, previsualizacionImagen)
      } else {
        console.log('No se encontró la imagen seleccionada')
      }
    }

    /**
     * Crea un elemento de opción para el nombre de imagen dado.
     * @param {string} nombre - El nombre de la imagen.
     * @returns {HTMLOptionElement} - El elemento de opción creado.
     */
    this.crearOpcion = (nombre) => {
      const option = document.createElement('option')
      option.value = nombre
      option.innerHTML = nombre
      return option
    }

    /**
     * Limpia la vista previa de la imagen.
     * @param {HTMLElement} previsualizacionImagen - El elemento de vista previa de la imagen.
     */
    this.limpiarPrevisualizacion = (previsualizacionImagen) => {
      previsualizacionImagen.innerHTML = ''
    }

    /**
     * Muestra la imagen.
     * @param {object} imagen - El objeto de imagen.
     * @param {HTMLElement} previsualizacionImagen - El elemento de vista previa de la imagen.
     */
    this.mostrarImagen = (imagen, previsualizacionImagen) => {
      const imgElement = document.createElement('img')
      imgElement.src = imagen.src
      imgElement.alt = imagen.nombre
      imgElement.width = imagen.width
      imgElement.height = imagen.height
      previsualizacionImagen.appendChild(imgElement)
    }

    /**
     * Valida la entrada del multiplicador.
     * @param {HTMLInputElement} input - El elemento de entrada del multiplicador.
     */
    this.validarMultiplicador = (input) => {
      const regex = /^[1-5]$/ // Expresión regular para números entre 1 y 5
      const value = input.value
      const mensajeError = this.contenedor.querySelector('#mensaje-error-multiplicador')

      if (!regex.test(value)) {
        // Si el valor no coincide con la expresión regular
        mensajeError.textContent = 'Introduzca un valor entre 1 y 5'
        input.style.border = '2px solid red'
      } else {
        // Si el valor coincide con la expresión regular
        mensajeError.textContent = ''
        input.style.border = 'green'
      }
    }

    /**
     * Evento de click para el botón de volver.
     */
    const botonVolver = contenedor.querySelector('#button-volver-agregar-mejora')
    botonVolver.addEventListener('click', () => this.controlador.irAVista('vistaMejoras'))

    /**
     * Evento de cambio para el elemento select de imágenes.
     */
    const selectImagenes = contenedor.querySelector('#select-option-agregar-mejora')
    selectImagenes.addEventListener('change', () => this.mostrarImagenSeleccionada())

    /**
     * Evento de blur para el campo de texto multiplicadorMejora.
     */
    const multiplicadorInput = contenedor.querySelector('#multiplicadorMejora')
    multiplicadorInput.addEventListener('blur', () => this.validarMultiplicador(multiplicadorInput))

    // Crear el elemento para mostrar el mensaje de error
    const mensajeErrorMultiplicador = document.createElement('div')
    mensajeErrorMultiplicador.id = 'mensaje-error-multiplicador'
    mensajeErrorMultiplicador.style.color = 'red'
    multiplicadorInput.parentNode.appendChild(mensajeErrorMultiplicador)
  }
}
