import { Vista } from './template/vista.js'
import { Rest } from "../services/rest.js";


export class VistaAgregarMejora extends Vista {
    constructor(controlador, contenedor) {
        super(controlador, contenedor);
        this.rest = new Rest();
        
        const result = Rest.peticionGET2();
        result.then(data => {
            
        })

        let poolImagenes =  contenedor.querySelector('#select-option-agregar-mejora');
        console.log(poolImagenes);
        
    }
}