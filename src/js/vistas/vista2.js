import { Vista } from "./vista.js";
import { Vista3 } from "./vista3.js";

export class Vista2 extends Vista {
   constructor(controlador, base) {
        super(controlador, base);
        this.crearInterfaz();
   }

   crearInterfaz() {
        // Botón JUGAR
        this.botonJugar = this.base.querySelector('#boton-jugar');
        this.botonJugar.onclick = this.pulsarBotonJugar.bind(this);

   }

   pulsarBotonJugar() {
        // Manejar el evento del botón JUGAR
        //console.log('Botón JUGAR pulsado');
        // Cambiar a la Vista3
        this.controlador.verVista(Vista3.VISTA3); // Cambiado a Vista3.VISTA3
   }
}

