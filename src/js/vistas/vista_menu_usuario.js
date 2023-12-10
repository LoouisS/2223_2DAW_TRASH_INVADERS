import { Vista } from './template/vista.js'

export class VistaMenuUsuario extends Vista {
  constructor (controlador, contenedor) {
    super(controlador, contenedor)

    const botonJugar = contenedor.querySelector('#boton-jugar')
    const botonMejoras = contenedor.querySelector('#mejoras-usuario')
    const vistaRankings = contenedor.querySelector('#vista-rankings')
    const botonLogout = contenedor.querySelector('#logout-button')
    
    botonJugar.onclick = () => {
      this.controlador.irAVista('vistaJuego')
    }

    botonMejoras.onclick = () => {
      this.controlador.irAVista('vistaMejoras')
    }

    vistaRankings.onclick = () => {
      this.controlador.irAVista('vistaClasificaciones')
    }

    botonLogout.onclick = () => {
      this.controlador.irAVista('vistaPrincipal')
    }

  }
}
