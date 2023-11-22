/**
 * Controlador principal de la aplicación.
 * Responsabilidad:
 * - Aplicar las reglas de negocio.
 * - Gestionar el cambio de vista.
 * - Validar los permisos de usuario.
 */

import { Modelo } from './modelos/modelo.js'
import { Vista } from './vistas/vista.js'
import { Indice } from './vistas/indice.js'
import { Registro } from './vistas/registro.js'
import { InicioSesion } from './vistas/iniciosesion.js'
import { MenuPrincipal } from './vistas/menuprincipalUsuario.js'
//import { Mejoras } from './vistas/mejoras.js'
//import { Opciones } from './vistas/opcionesadm.js'
//import {  } from './vistas/mejoras.js'
//import {  } from './vistas/opcionesadm.js'
//import {  } from './vistas/mejoras.js'
//import {  } from './vistas/opcionesadm.js'
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

    const divvistaIndice = document.getElementById('divvistaIndice')
    const divvistaRegistro = document.getElementById('divvistaRegistro')
    const divvistaLogin = document.getElementById('divvistaLogin')
    const divvistaMenuUsuario = document.getElementById('divvistaMenuUsuario')
    const divvistaMenuAdm = document.getElementById('divvistaMenuAdm')
    const divvistaOpciones = document.getElementById('divvistaOpciones')
    const divvistaBanco = document.getElementById('divvistaBanco')
    const divvistaMejoras = document.getElementById('divvistaMejoras')
    const divvistaNewMejora = document.getElementById('divvistaNewMejora')
    const divvistaModMejora = document.getElementById('divvistaModMejora')
    const divvistaClasificaciones = document.getElementById('divvistaClasificaciones')
    const divvistaJuego = document.getElementById('divvistaJuego')

    //Creo las vistas
    this.vistas.set(Vista.vistaIndice, new Indice(this, divvistaIndice))
    this.vistas.set(Vista.vistaRegistro, new Registro(this, divvistaRegistro))
    this.vistas.set(Vista.vistaInicio, new InicioSesion(this, divvistaLogin))
    this.vistas.set(Vista.vistaMenuUsuario, new MenuPrincipal(this, divvistaMenuUsuario))
    this.vistas.set(Vista.vistaMenuAdm, new MenuPrincipal(this, divvistaMenuAdm))
    this.vistas.set(Vista.vistaOpciones, new OpcionesAdministrador(this, divvistaOpciones))
    this.vistas.set(Vista.vistaBanco, new BancoImagenes(this, divvistaBanco))
    this.vistas.set(Vista.vistaMejoras, new Mejoras(this, divvistaMejoras))
    this.vistas.set(Vista.vistaNewMejora, new NuevaMejora(this, divvistaNewMejora))
    this.vistas.set(Vista.vistaModMEjora, new ModificarMejora(this, divvistaModMejora))
    this.vistas.set(Vista.vistaClasificaciones, new Clasificaciones(this, divvistaClasificaciones))
    this.vistas.set(Vista.vistaJuego, new Juego(this, divvistaJuego))

    this.verVista(Vista.vistaIndice)

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

    /*Aquí es donde creo que reside el problema, no llamo adecuadamente al método generarElementosGrid()
    //Llama a generarElementosGrid si la vista es VISTA3
    if (vista === Vista.vistaJuego) {
      this.generarElementosGrid();
    }
    */
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

  /* Este es el método que crearía los elementos por medio del DOM, pero aún no lo usamos ya que da problemas, así que lo dejo comentado.
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
  */
}

// Cuando se carga la página, se crea una instancia del controlador
window.onload = () => {
  const controlador = new Controlador()
}