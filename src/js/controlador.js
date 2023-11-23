/**
 * Controlador principal de la aplicación.
 * Responsabilidad:
 * - Aplicar las reglas de negocio.
 * - Gestionar el cambio de vista.
 * - Validar los permisos de usuario.
 */

import { Modelo } from './modelos/modelo.js'
import { Vista } from './vistas/vista.js'
import { Vista1 } from './vistas/vista1.js'
import { Vista2 } from './vistas/vista2.js'
import { Vista3 } from './vistas/vista3.js'
console.log('Script cargado correctamente')

class Controlador {
  /**
     * Inicializa los atributos del Controlador.
     * Coge las referencias del interfaz.
     */

  // Atributos
  vistaActual = null
  vistas = new Map()

  constructor () {
    this.modelo = new Modelo()

    const divVista1 = document.getElementById('divVista1')
    const divVista2 = document.getElementById('divVista2')
    const divVista3 = document.getElementById('divVista3')

    // Creo las vistas
    this.vistas.set(Vista.VISTA1, new Vista1(this, divVista1))
    this.vistas.set(Vista.VISTA2, new Vista2(this, divVista2))
    this.vistas.set(Vista.VISTA3, new Vista3(this, divVista3))

    this.verVista(Vista.VISTA1)

    console.log(this.vistas)
  }

  /**
     * Muestra una vista específica.
     * @param {Symbol} vista - Símbolo que identifica la vista a mostrar.
     */

  verVista (vista) {
    this.ocultarVistas()
    this.vistas.get(vista).mostrar(true)
    this.vistaActual = vista // Actualiza la vista actual
  }

  /**
     * Oculta todas las vistas.
     */

  ocultarVistas () {
    for (const vista of this.vistas.values()) { vista.mostrar(false) }
  }

  /**
     * Inicia la reproducción de la música.
     */

  iniciarMusica () {
    const musica = document.getElementById('musica')
    musica.play()
  }
}

// Cuando se carga la página, se crea una instancia del controlador
window.onload = () => {
  const controlador = new Controlador()
  controlador.iniciarMusica()
}
