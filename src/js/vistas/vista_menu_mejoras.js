import { Vista } from './template/vista.js'
import { Rest } from '../services/rest.js'

/**
 * Clase que representa la vista del menú de mejoras.
 * @extends Vista
 */
export class VistaMenuMejoras extends Vista {
  /**
     * Crea una instancia de VistaMenuMejoras.
     * @param {Controlador} controlador - El controlador de la aplicación.
     * @param {HTMLElement} contenedor - El contenedor de la vista.
     */
  constructor (controlador, contenedor) {
    super(controlador, contenedor)
    this.botonAgregarMejoraClick = this.botonAgregarMejoraClick.bind(this)
    this.initialize()
  }

  /**
     * Inicializa la vista.
     */
  async initialize () {
    this.setupEventListeners()
    try {
      const valorAparicionMejora = await this.porcentajeAparicion()
      const data = await Rest.obtenerDatos()
      this.mostrarTabla(data, valorAparicionMejora)
      this.setupInputValidation(valorAparicionMejora)
    } catch (error) {
      console.error('Error al obtener datos:', error)
    }
  }

  /**
     * Configura los event listeners de la vista.
     */
  setupEventListeners () {
    const botonAgregarMejora = this.contenedor.querySelector('#boton-agregar-mejora')
    botonAgregarMejora.addEventListener('click', this.botonAgregarMejoraClick)

    const botonVolver = this.contenedor.querySelector('#button-volver-listar-mejora')
    botonVolver.addEventListener('click', () => this.controlador.irAVista('vistaMenu'))
  }

  /**
     * Obtiene el porcentaje de aparición de las mejoras.
     * @returns {Promise<number>} El porcentaje de aparición de las mejoras.
     */
  async porcentajeAparicion () {
    try {
      return await Rest.obtenerPorcentajeAparicion()
    } catch (error) {
      console.error('Error al obtener porcentaje de aparición:', error)
      throw error
    }
  }

  /**
     * Configura la validación de los inputs.
     * @param {number} valorAparicionMejora - El valor de aparición de las mejoras.
     */
  setupInputValidation (valorAparicionMejora) {
    const inputs = this.contenedor.querySelectorAll('input')
    inputs.forEach(input => {
      input.addEventListener('blur', () => {
        this.validarInput(input, valorAparicionMejora)
      })
    })
  }

  /**
     * Valida el valor de un input.
     * @param {HTMLInputElement} input - El input a validar.
     * @param {number} valorAparicionMejora - El valor de aparición de las mejoras.
     */
  validarInput (input, valorAparicionMejora) {
    const regex = /^[0-9]+$/
    if (regex.test(input.value)) {
      this.validarSumaPorcentajes(valorAparicionMejora)
    } else {
      this.mostrarErrorInput(input, 'Ingrese un número')
    }
  }

  /**
     * Valida la suma de los porcentajes de las mejoras.
     * @param {number} valorAparicionMejora - El valor de aparición de las mejoras.
     */
  validarSumaPorcentajes (valorAparicionMejora) {
    const inputs = this.contenedor.querySelectorAll('input')
    const sumaPorcentajes = [...inputs].reduce((suma, input) => suma + Number(input.value), 0)

    if (sumaPorcentajes > valorAparicionMejora) {
      console.error('La suma de los porcentajes es mayor que el valor de aparición de la mejora.')
      alert(`La suma de las mejoras no puede superar ${valorAparicionMejora}`)
      inputs.forEach(input => (input.value = ''))
    }
  }

  /**
     * Muestra un mensaje de error en el input.
     * @param {HTMLInputElement} input - El input.
     * @param {string} mensaje - El mensaje de error.
     */
  mostrarErrorInput (input, mensaje) {
    input.value = ''
    input.placeholder = mensaje
  }

  /**
     * Maneja el evento click del botón de agregar mejora.
     */
  botonAgregarMejoraClick () {
    this.controlador.irAVista('vistaAgregarMejora')
  }

  /**
     * Muestra una tabla con los datos de las mejoras.
     * @param {Array} data - Los datos de las mejoras.
     * @param {number} valorAparicionMejora - El valor de aparición de las mejoras.
     */
  mostrarTabla (data, valorAparicionMejora) {
    const main = this.contenedor.querySelector('main')
    // Add a table to the container
    const tabla = document.createElement('table')
    main.insertBefore(tabla, main.children[1])

    // Create table header
    const headerRow = document.createElement('tr')
    tabla.appendChild(headerRow)

    const imagenHeader = document.createElement('th')
    headerRow.appendChild(imagenHeader)
    imagenHeader.innerHTML = 'Imagen'

    const descripcionHeader = document.createElement('th')
    headerRow.appendChild(descripcionHeader)
    descripcionHeader.innerHTML = 'Descripción'

    const multiplicadorHeader = document.createElement('th')
    headerRow.appendChild(multiplicadorHeader)
    multiplicadorHeader.innerHTML = 'Multiplicador'

    const duracionMejoraHeader = document.createElement('th')
    headerRow.appendChild(duracionMejoraHeader)
    duracionMejoraHeader.innerHTML = 'Duración Mejora'

    const porcentajeAparicionHeader = document.createElement('th')
    headerRow.appendChild(porcentajeAparicionHeader)
    porcentajeAparicionHeader.innerHTML = `Porcentaje Aparicion (${valorAparicionMejora})`

    data.forEach(item => {
      const fila = document.createElement('tr')
      tabla.appendChild(fila)

      const imagenCell = document.createElement('td')
      fila.appendChild(imagenCell)

      const img = document.createElement('img')
      img.src = `data:image/png;base64,${item.imagen}`
      img.style.width = '100px'
      img.style.height = '100px'
      imagenCell.appendChild(img)

      const descripcionCell = document.createElement('td')
      fila.appendChild(descripcionCell)
      descripcionCell.innerHTML = `${item.descripcion}`

      const multiplicadorCell = document.createElement('td')
      fila.appendChild(multiplicadorCell)
      multiplicadorCell.innerHTML = item.multiplicador

      const duracionMejoraCell = document.createElement('td')
      fila.appendChild(duracionMejoraCell)
      duracionMejoraCell.innerHTML = item.duracionMejora

      const porcentajeAparicionCell = document.createElement('td')
      fila.appendChild(porcentajeAparicionCell)
      const porcentajeAparicionInput = document.createElement('input')
      porcentajeAparicionInput.type = 'text'
      porcentajeAparicionCell.appendChild(porcentajeAparicionInput)
    })
  }
}
