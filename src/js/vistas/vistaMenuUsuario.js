import { Vista } from './template/vista.js'

export class VistaMenuUsuario extends Vista {
    constructor(controlador, contenedor) {
        super(controlador, contenedor)
        const botonMejoras = contenedor.querySelector("#mejoras-usuario")
        botonMejoras.onclick = () => {
            this.controlador.irAVista('vistaMejoras')
        }

    }

}