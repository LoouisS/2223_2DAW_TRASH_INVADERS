import { Modelo } from './modelos/modelo_configuracion.js'
import { VistaPrincipal } from './vistas/vistaPrincipal.js'
import { VistaLogin } from './vistas/vistaLogin.js'
import { VistaMenuUsuario } from './vistas/vistaMenuUsuario.js'
import { VistaMenuMejoras } from './vistas/vistaMenuMejoras.js'
import { VistaAgregarMejora } from './vistas/vistaAgregarMejora.js'
import { VistaRankings } from './vistas/vistaRankings.js'
import { VistaRegistro } from './vistas/vistaRegistro.js'
import { VistaJuego } from './vistas/vistaJuego.js'

/**
 * Clase que representa el juego Trash Invaders.
 * @class
 */
class TrashInvaders {
  vistaActual = null
  modelo = null
  views = null

  constructor () {
    this.views = {
      vistaPrincipal: document.getElementById('vista-principal'),
      vistaRegistro: document.getElementById('vista-registro'),
      vistaLogin: document.getElementById('vista-login'),
      vistaMenu: document.getElementById('vista-menu-usuario'),
      vistaJuego: document.getElementById('vista-principal-juego'),
      vistaMejoras: document.getElementById('vista-menu-mejoras'),
      vistaClasificaciones: document.getElementById('vista-clasificaciones'),
      vistaOpcionesAdmin: document.getElementById('vista-opciones-administrador'),
      vistaPoolImagenes: document.getElementById('vista-pool-imagenes'),
      vistaAgregarMejora: document.getElementById('vista-agregar-mejora'),
      vistaRankings: document.getElementById('vista-rankings')
    }

    this.ocultarVistas()

    this.views.vistaPrincipal.style.display = 'block'

    this.vistaPrincipal = new VistaPrincipal(this, this.views.vistaPrincipal)
    this.vistaRegistro = new VistaRegistro(this, this.views.vistaRegistro)
    this.vistaLogin = new VistaLogin(this, this.views.vistaLogin)
    this.vistaMenuUsuario = new VistaMenuUsuario(this, this.views.vistaMenu)
    this.vistaMenuMejoras = new VistaMenuMejoras(this, this.views.vistaMejoras)
    this.vistaAgregarMejora = new VistaAgregarMejora(this, this.views.vistaAgregarMejora)
    this.vistaRankings = new VistaRankings(this, this.views.vistaRankings)
    this.vistaPrincipalJuego = new VistaJuego(this, this.views.vistaJuego)

    this.modelo = new Modelo(this)
  }

  irAVista (vista) {
    this.ocultarVistas()
    this.views[vista].style.display = 'block'
  }

  ocultarVistas () {
    for (const view of Object.values(this.views)) {
      view.style.display = 'none'
    }
  }
}

window.onload = () => {
  new TrashInvaders()
}
