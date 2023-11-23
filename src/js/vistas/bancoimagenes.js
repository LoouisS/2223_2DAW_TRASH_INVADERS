//vistaBanco
import { Vista } from "./vista";

export class BancoImagenes extends Vista {
    /**
       * Crea una instancia de Vista2.
       * @constructor
       * @param {Controlador} controlador - Instancia del controlador asociado a la vista.
       * @param {HTMLElement} base - Elemento HTML que sirve como la base de la vista.
       */
    constructor (controlador, base) {
        super(controlador, base)
        this.crearInterfaz()
    }

}