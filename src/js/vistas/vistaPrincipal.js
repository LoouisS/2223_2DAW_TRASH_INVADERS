import { Vista } from "./template/vista.js";

export class VistaPrincipal extends Vista {

    constructor(controlador, contenedor){
        super(controlador, contenedor)

        const botonLogin = contenedor.querySelector('#boton-login')
        const botonRegistro = contenedor.querySelector('#boton-registro')       

        botonLogin.onclick = () => {
            this.controlador.irAVista('vistaLogin')
        }

        botonRegistro.onclick = () => {
            this.controlador.irAVista('vistaRegistro')
        }

    }




}