import { Vista } from './template/vista.js'
import { Rest } from '../services/rest.js'

export class VistaRankings extends Vista {
  constructor (controlador, contenedor) {
    super(controlador, contenedor)

    const botonVolver = contenedor.querySelector('#button-volver')

    botonVolver.onclick = () => {
      this.controlador.irAVista('vistaMenu')
    }
  }


}
