import { Vista } from './template/vista.js'

export class VistaMenuUsuario extends Vista {
    constructor(controlador, contenedor) {
        super(controlador, contenedor)
        
        const botonMejoras = contenedor.querySelector("#mejoras-usuario")
        const volverLogin = contenedor.querySelector("#volverlogin")
        const vistaRankings = contenedor.querySelector("#vistaRankings")
        

        botonMejoras.onclick = () => {
            this.controlador.irAVista('vistaMejoras')
        }

        volverLogin.onclick = () => {
            this.controlador.irAVista('vistaPrincipal')
        }

        vistaRankings.onclick = () => {
            this.controlador.irAVista('vistaRankings')
        }
    }

}