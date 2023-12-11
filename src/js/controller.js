import { Modelo } from './modelos/modelo_configuracion.js' // Funcional
import { VistaPrincipal } from './vistas/vista_principal.js' // Funcional
import { VistaLogin } from './vistas/vista_login.js' // Funcional
import { VistaMenuUsuario } from './vistas/vista_menu_usuario.js' // Funcional
import { VistaOpcionesAdmin } from './vistas/vista_opciones_admin.js'
import { VistaAgregarMejora } from './vistas/vista_agregar_mejora.js'
import { VistaRankings } from './vistas/vista_rankings.js'
import { VistaRegistro } from './vistas/vista_registro.js' // Funcional
import { VistaJuego } from './vistas/vista_juego.js' // Funcional
import { vistaParametrosJuego } from './vistas/vista_parametros_juego.js' 

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
      vistaOpcionesAdmin: document.getElementById('vista-opciones-administrador'),
      vistaClasificaciones: document.getElementById('vista-clasificaciones'),
      vistaConfiguracionParametros: document.getElementById('vista-parametros-juego'),
  
    }

    this.ocultarVistas()

    this.views.vistaPrincipal.style.display = 'block'

    this.vistaPrincipal = new VistaPrincipal(this, this.views.vistaPrincipal)
    this.vistaRegistro = new VistaRegistro(this, this.views.vistaRegistro)
    this.vistaLogin = new VistaLogin(this, this.views.vistaLogin)
    this.vistaMenuUsuario = new VistaMenuUsuario(this, this.views.vistaMenu)
    // this.vistaMenuMejoras = new VistaMenuMejoras(this, this.views.vistaMejoras)
    // this.vistaAgregarMejora = new VistaAgregarMejora(this, this.views.vistaAgregarMejora)
    this.vistaRankings = new VistaRankings(this, this.views.vistaClasificaciones)
    this.vistaPrincipalJuego = new VistaJuego(this, this.views.vistaJuego)
    this.vistaOpcionesAdmin = new VistaOpcionesAdmin(this, this.views.vistaOpcionesAdmin)
    this.vistaConfiguracionParametros = new vistaParametrosJuego(this, this.views.vistaConfiguracionParametros)

    this.modelo = new Modelo(this)
  }

  irAVista(vista) {
    this.ocultarVistas();
    this.views[vista].style.display = 'block';

    // Si la vista actual es la vista del juego, inicia la lógica del juego
    if (vista === 'vistaJuego') { 
      this.vistaPrincipalJuego.iniciarJuego();
    } else if (vista === 'vistaConfiguracionParametros') {
      this.vistaConfiguracionParametros.introducirValoresParametrosJuego();
    }
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
