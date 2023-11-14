// vista3.js
import { Vista } from "./vista.js";

export class Vista3 extends Vista {
    constructor(controlador, base) {
        super(controlador, base);
        this.crearInterfaz();
        this.inicializarEventosTeclado();

        // Variables para el movimiento
        this.velocidad = 5;
        this.direccionX = 0;
        this.direccionY = 0;
    }

    crearInterfaz() {
        const avatar = 'img/navidel.png';
        this.imagenVista3 = document.createElement('img');
        this.imagenVista3.src = avatar;
        this.imagenVista3.id = 'imagenVista3';
        this.imagenVista3.style.position = 'absolute';
        this.imagenVista3.style.left = '0';
        this.imagenVista3.style.top = '0';
        this.imagenVista3.width = 200;
        this.imagenVista3.height = 150;
        document.body.appendChild(this.imagenVista3);
    }

    inicializarEventosTeclado() {
        window.addEventListener('keydown', (event) => this.teclaPresionada(event));
    }

    teclaPresionada(event) {
        console.log('Tecla presionada:', event.key);
        if (!event.repeat) {
            switch (event.key) {
                case 'ArrowUp':
                    this.direccionY = -1;
                    break;
                case 'ArrowDown':
                    this.direccionY = 1;
                    break;
                case 'ArrowLeft':
                    this.direccionX = -1;
                    break;
                case 'ArrowRight':
                    this.direccionX = 1;
                    break;
                default:
                    // Ignorar otras teclas
                    break;
            }

            this.moverImagen();
        }
    }

    moverImagen() {
        console.log('Moviendo la imagen...');
    
        this.imagenVista3.style.left = (parseFloat(this.imagenVista3.style.left) + this.velocidad * this.direccionX) + 'px';
        this.imagenVista3.style.top = (parseFloat(this.imagenVista3.style.top) + this.velocidad * this.direccionY) + 'px';
    
        console.log('Nueva posición X:', this.imagenVista3.style.left);
        console.log('Nueva posición Y:', this.imagenVista3.style.top);
    }
    
    
    
}










