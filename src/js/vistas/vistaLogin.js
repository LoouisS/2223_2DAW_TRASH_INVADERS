import { Vista } from "./template/vista.js"

export class VistaLogin extends Vista {

    constructor(controlador, contenedor) {
        super(controlador, contenedor)

        // Seleccionamos el input type submit del formulario

        const botonLogin = contenedor.querySelector('#vistaMenu')
        const botonVolver = contenedor.querySelector('#buttonVolver')

        botonLogin.onclick = () => {
            this.controlador.irAVista('vistaMenu')
        }

        botonVolver.onclick = () => {
            this.controlador.irAVista('vistaPrincipal')
        }



    }




}