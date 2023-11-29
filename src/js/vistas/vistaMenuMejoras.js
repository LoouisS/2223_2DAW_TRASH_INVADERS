import { Vista } from './template/vista.js'
import { Rest } from "../services/rest.js"

export class VistaMenuMejoras extends Vista {

    constructor(controlador, contenedor) {
        super(controlador, contenedor)
        const botonAgregarMejora = this.contenedor.querySelector('#boton-agregar-mejora')  
        
        Rest.peticionGET(contenedor)

        
        botonAgregarMejora.addEventListener('click', () => this.controlador.irAVista('vistaAgregarMejora'))
                
    }

    mostrarElementosTabla = (data) => {

    }

}