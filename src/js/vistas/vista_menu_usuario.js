import { Vista } from './template/vista.js'

export class VistaMenuUsuario extends Vista {
  constructor (controlador, contenedor) {
    super(controlador, contenedor)

    const botonJugar = contenedor.querySelector('#boton-jugar')
    const botonMejoras = contenedor.querySelector('#mejoras-usuario')
    const vistaRankings = contenedor.querySelector('#vista-rankings')
    const botonLogout = contenedor.querySelector('#logout-button')
    const botonOpciones = contenedor.querySelector('#vista-opciones')
    
    botonJugar.onclick = () => {
      this.controlador.irAVista('vistaJuego')
    }

    botonMejoras.onclick = () => {
      this.controlador.irAVista('vistaMejoras')
    }

    vistaRankings.onclick = () => {
      this.controlador.irAVista('vistaClasificaciones')
    }

    botonOpciones.onclick = () => {
      this.controlador.irAVista('vistaOpcionesAdmin')
    }

    botonLogout.onclick = () => {
      this.controlador.irAVista('vistaPrincipal')
    }

  }
}
