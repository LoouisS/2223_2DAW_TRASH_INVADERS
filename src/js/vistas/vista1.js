// vista1.js
import { Vista } from "./vista.js";
import { Vista2 } from "./vista2.js"; // Importa la clase Vista2

export class Vista1 extends Vista {
    constructor(controlador, base) {
        super(controlador, base);

        // Coger referencias del interfaz
        this.enlace1 = this.base.querySelector('p');
        this.iVidas = this.base.querySelectorAll("input")[0];

        // Seleccionar el botón de inicio de sesión
        this.botonInicioSesion = this.base.querySelector('#boton-inicio-sesion');

        // Asociar eventos
        // Cuando asociamos eventos tenemos que decirle que siga enlazado a sí mismo
        this.enlace1.onclick = this.pulsarEnlace1.bind(this);

        // Agregar evento al botón de inicio de sesión
        this.botonInicioSesion.onclick = this.pulsarBotonInicioSesion.bind(this);
    }

    pulsarEnlace1() {
        this.controlador.setVidas(this.iVidas.value);
        // Cambiar a la Vista2 directamente aquí
        this.controlador.verVista(Vista2.VISTA2);
    }

    pulsarBotonInicioSesion() {
        // Manejar el evento del botón de inicio de sesión
        console.log('Botón de inicio de sesión pulsado');
        // Cambiar a la Vista2
        this.controlador.verVista(Vista2.VISTA2);
    }
}



