import { Vista } from './template/vista.js'
import { Rest } from '../services/rest.js'

export class vistaParametrosJuego extends Vista {

    constructor (controlador, contenedor) {
        super(controlador, contenedor);

        this.obtenerParametrosJuego();

        this.inputVelocidadBasura = document.querySelector('#velocidad-basura');
        this.inputVelocidadPersonaje = document.querySelector('#velocidad-personaje');
        this.inputCantidadBasura = document.querySelector('#cantidad-basura');

        const validateInput = (input, maxValue) => {
            input.addEventListener('blur', () => {
                const value = input.value.trim();
                if (!/^\d+$/.test(value) || value < 0 || value > maxValue) {
                    input.value = '';
                }
            });
        };

        validateInput(this.inputVelocidadBasura, 10);
        validateInput(this.inputVelocidadPersonaje, 10);
        validateInput(this.inputCantidadBasura, 100);
    }

    async obtenerParametrosJuego () {
        const parametrosJuego = await Rest.obtenerParametrosJuego()
        this.velocidadBasura = parametrosJuego[0].velocidad_basura
        this.velocidadPersonaje = parametrosJuego[0].generacion_basura
        this.cantidadBasura = parametrosJuego[0].bolsa_limite_orila
    }

    introducirValoresParametrosJuego () {
        this.inputVelocidadBasura.value = this.velocidadBasura;
        this.inputVelocidadPersonaje.value = this.velocidadPersonaje;
        this.inputCantidadBasura.value = this.cantidadBasura;
    }

}