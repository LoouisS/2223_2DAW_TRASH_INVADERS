import { Vista } from './template/vista.js'

export class vistaParametrosJuego extends Vista {
    velocidadBasura = 2;
    velocidadPersonaje = 5;
    cantidadBasura = 10;

    constructor (controlador, contenedor) {
        super(controlador, contenedor);

        const velocidadBasura = document.querySelector('#velocidad-basura');
        const velocidadPersonaje = document.querySelector('#velocidad-personaje');
        const cantidadBasura = document.querySelector('#cantidad-basura');

        let velocidadBasuraValue;
        let velocidadPersonajeValue;
        let cantidadBasuraValue;

        velocidadBasura.onblur = () => {
            velocidadBasuraValue = velocidadBasura.value;
            console.log(this.getVelocidadBasura());
        }

        velocidadPersonaje.onblur = () => {
            velocidadPersonajeValue = velocidadPersonaje.value;
            console.log(this.getVelocidadPersonaje());
        }

        cantidadBasura.onblur = () => {
            cantidadBasuraValue = cantidadBasura.value;
        }
    }

    getVelocidadBasura() {
        return this.velocidadBasura;
    }

    getVelocidadPersonaje() {
        return this.velocidadPersonaje;
    }

    getCantidadBasura() {
        return this.cantidadBasura;
    }
    setVelocidadBasura(velocidad) {
        this.velocidadBasura = velocidad;
    }

    setVelocidadPersonaje(velocidad) {
        this.velocidadPersonaje = velocidad;
    }

    setCantidadBasura(cantidad) {
        this.cantidadBasura = cantidad;
    }

}