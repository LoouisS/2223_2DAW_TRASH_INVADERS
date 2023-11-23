/**
 * Controlador principal de la aplicación.
 * Responsabilidad:
 * - Aplicar las reglas de negocio.
 * - Gestionar el cambio de vista.
 * - Validar los permisos de usuario.
 */

import { Modelo } from './modelos/modelo.js'
import { Vista } from './vistas/vista.js'
import { InicioSesion } from './vistas/iniciosesion.js'
import { MenuPrincipal } from './vistas/menuprincipal.js'
import { Juego } from './vistas/juego.js'
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

    const divInicio = document.getElementById('divInicio')
    const divMenu = document.getElementById('divMenu')
    const divJuego = document.getElementById('divJuego')

    // Creo las vistas
    this.vistas.set(Vista.INICIO, new InicioSesion(this, divInicio))
    this.vistas.set(Vista.MENU, new MenuPrincipal(this, divMenu))
    this.vistas.set(Vista.JUEGO, new Juego(this, divJuego))

    this.verVista(Vista.INICIO)

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