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
        const avatar = 'img/navidel.png'; // Ruta de la imagen
        
        let imagenVista3 = document.createElement('img'); // Creo el elemento
        imagenVista3.src = avatar; // Le asigno la imagen

        imagenVista3.src = avatar; // Le asigno la imagen
        imagenVista3.id = 'imagenVista3'; // Le asigno un ID
        imagenVista3.style.position = 'absolute'; // Le asigno una posición
        imagenVista3.style.left = '5px'; 
        imagenVista3.style.top = '5px';
        imagenVista3.width = 200;
        imagenVista3.height = 150;

        this.imagenVista3 = imagenVista3;

        document.getElementById('divVista3').appendChild(this.imagenVista3);
        // console.log(this.imagenVista3);
        // document.body.appendChild(this.imagenVista3);
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










