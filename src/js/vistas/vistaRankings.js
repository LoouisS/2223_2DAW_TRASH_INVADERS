import { Vista } from './template/vista.js'
import { Rest } from '../services/rest.js'

/**
 * Clase que representa la vista de los rankings.
 * @class
 * @extends Vista
 */
export class VistaRankings extends Vista {
  /**
     * Crea una instancia de VistaRankings.
     * @constructor
     * @param {Controlador} controlador - El controlador de la aplicación.
     * @param {HTMLElement} contenedor - El elemento contenedor de la vista.
     */
  constructor (controlador, contenedor) {
    super(controlador, contenedor)
    this.inicializar()
  }

  /**
     * Inicializa la vista de los rankings.
     * @async
     */
  async inicializar () {
    try {
      const rankings = await Rest.obtenerPuntuaciones()
      this.agregarTablaRankings(rankings)
    } catch (error) {
      console.error('Error al obtener puntuaciones:', error)
    }

    const botonEnviarPuntuacion = this.contenedor.querySelector('#submit-puntuacion')
    botonEnviarPuntuacion.onclick = () => this.enviarPuntuacion()

    const botonVolver = this.contenedor.querySelector('#button-volver-rankings')
    botonVolver.onclick = () => this.controlador.irAVista('vistaMenu')

    const botonesEliminar = this.contenedor.querySelectorAll('.eliminar-btn')
    botonesEliminar.forEach(boton => {
      boton.addEventListener('mouseover', () => {
        boton.style.transition = 'transform 0.8s ease'
        boton.style.transform = 'rotate(90deg)'
      })

      boton.addEventListener('mouseout', () => {
        boton.style.transition = 'transform 0.8s ease'
        boton.style.transform = ''
      })

      boton.addEventListener('click', () => console.log(boton.getAttribute('data-id-ranking')))
    })
  }

  /**
     * Envía la puntuación al servidor.
     * @async
     */
  async enviarPuntuacion () {
    const idUsuario = this.contenedor.querySelector('#username').value
    const puntuacion = this.contenedor.querySelector('#number').value

    try {
      await Rest.agregarPuntuacion(idUsuario, puntuacion)
      console.log('Puntuación agregada')

      // Eliminar la tabla existente antes de agregar la nueva
      const tablaExistente = this.contenedor.querySelector('table')
      if (tablaExistente) {
        tablaExistente.remove()
      }

      // Obtener nuevamente las puntuaciones y agregar la nueva tabla
      const rankings = await Rest.obtenerPuntuaciones()
      this.agregarTablaRankings(rankings)
    } catch (error) {
      console.error('Error al agregar puntuación:', error)
    }
  }

  /**
     * Agrega la tabla de rankings al contenedor.
     * @param {Array} rankings - Los rankings a mostrar en la tabla.
     */
  agregarTablaRankings (rankings) {
    const tabla = document.createElement('table')
    const encabezado = tabla.createTHead()
    const filaEncabezado = encabezado.insertRow()
    this.crearCelda(filaEncabezado, 'ID Ranking')
    this.crearCelda(filaEncabezado, 'ID Usuario')
    this.crearCelda(filaEncabezado, 'Puntuación')
    this.crearCelda(filaEncabezado, '')

    const cuerpoTabla = tabla.createTBody()
    rankings.forEach(ranking => {
      const fila = cuerpoTabla.insertRow()
      this.crearCelda(fila, ranking.idRanking)
      this.crearCelda(fila, ranking.idUsuario)
      this.crearCelda(fila, ranking.puntuacion)

      // Crear botón con icono de X
      const botonEliminar = document.createElement('button')
      botonEliminar.innerHTML = '&#10006;'
      botonEliminar.className = 'eliminar-btn'
      botonEliminar.setAttribute('data-id-ranking', ranking.idRanking)
      botonEliminar.onclick = () => this.eliminarPuntuacion(ranking.idRanking)

      // Agregar celda para el botón
      const celdaBoton = fila.insertCell()
      celdaBoton.appendChild(botonEliminar)
    })

    const mainElement = this.contenedor.querySelector('#register-page')
    mainElement.appendChild(tabla)
  }

  /**
     * Crea una celda en una fila de la tabla.
     * @param {HTMLTableRowElement} fila - La fila en la que se creará la celda.
     * @param {string} contenido - El contenido de la celda.
     * @returns {HTMLTableCellElement} La celda creada.
     */
  crearCelda (fila, contenido) {
    const celda = fila.insertCell()
    celda.textContent = contenido
    return celda
  }

  /**
     * Elimina una puntuación de la tabla y del servidor.
     * @async
     * @param {number} idRanking - El ID de la puntuación a eliminar.
     */
  async eliminarPuntuacion (idRanking) {
    try {
      await Rest.borrarPuntuacion(idRanking)
      console.log('Puntuación eliminada')

      // Eliminar la tabla existente antes de agregar la nueva
      const tablaExistente = this.contenedor.querySelector('table')
      if (tablaExistente) {
        tablaExistente.remove()
      }

      // Obtener nuevamente las puntuaciones y agregar la nueva tabla
      const rankings = await Rest.obtenerPuntuaciones()
      this.agregarTablaRankings(rankings)
    } catch (error) {
      console.error('Error al eliminar puntuación:', error)
    }
  }
}
