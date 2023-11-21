/**
 * Controlador principal de la aplicación.
 * Responsabilidad:
 * - Aplicar las reglas de negocio.
 * - Gestionar el cambio de vista.
 * - Validar los permisos de usuario.
 */

import { Modelo } from './modelos/modelo.js'
import { Vista } from './vistas/vista.js'
//import { Indice } from './vistas/indice.js'
//import { Registro } from './vistas/registro.js'
import { InicioSesion } from './vistas/iniciosesion.js'
import { MenuPrincipal } from './vistas/menuprincipal.js'
//import { Mejoras } from './vistas/mejoras.js'
//import { Opciones } from './vistas/opcionesadm.js'
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

  constructor(){
    this.modelo = new Modelo()

    const divvistaLogin = document.getElementById('divvistaLogin')
    const divvistaMenu = document.getElementById('divvistaMenu')
    const divvistaJuego = document.getElementById('divvistaJuego')

    //Creo las vistas
    this.vistas.set(Vista.vistaLogin, new InicioSesion(this, divvistaLogin))
    this.vistas.set(Vista.vistaMenu, new MenuPrincipal(this, divvistaMenu))
    this.vistas.set(Vista.vistaJuego, new Juego(this, divvistaJuego))

    this.verVista(Vista.vistaLogin)

    console.log(this.vistas)
  }

  /**
    * Muestra una vista específica.
    * @param {Symbol} vista - Símbolo que identifica la vista a mostrar.
    */

  verVista(vista){
    this.ocultarVistas()
    this.vistas.get(vista).mostrar(true)
    this.vistaActual = vista // Actualiza la vista actual

    //Llama a generarElementosGrid si la vista es VISTA3
    if (vista === Vista.vistaJuego) {
      this.generarElementosGrid();
    }
  }

  /**
    * Oculta todas las vistas.
    */
  ocultarVistas(){
    for (const vista of this.vistas.values()) { vista.mostrar(false) }
  }

  /**
    * Inicia la reproducción de la música.
    */
  iniciarMusica(){
    const musica = document.getElementById('musica');
    musica.play().catch((error) => {
      // Manejar errores de reproducción
      console.error('Error al reproducir música:', error);
    })
  }

  generarElementosGrid(){
    // Obtén la referencia al contenedor del grid
    const gridContainer = document.getElementById('div2')
  
    // Número de elementos en el grid
    const numElementos = 56
  
    // Genera dinámicamente los elementos del grid
    for (let i = 1; i <= numElementos; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item')
        gridItem.textContent = i
        gridContainer.appendChild(gridItem)
    }
  }
}

// Cuando se carga la página, se crea una instancia del controlador
window.onload = () => {
  const controlador = new Controlador()
}