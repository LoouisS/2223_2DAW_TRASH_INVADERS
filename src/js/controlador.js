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

  constructor(){
    this.modelo = new Modelo()

    const divVista1 = document.getElementById('divVista1')
    const divVista2 = document.getElementById('divVista2')
    const divVista3 = document.getElementById('divVista3')

    //Creo las vistas
    this.vistas.set(Vista.VISTA1, new InicioSesion(this, divVista1))
    this.vistas.set(Vista.VISTA2, new MenuPrincipal(this, divVista2))
    this.vistas.set(Vista.VISTA3, new Juego(this, divVista3))

    this.verVista(Vista.VISTA1)

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
    if (vista === Vista.VISTA3) {
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