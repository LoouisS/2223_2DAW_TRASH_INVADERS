// vista3.js
import { Vista } from "./vista.js";

export class Vista3 extends Vista {

    constructor(controlador, base) {
        super(controlador, base);

        this.crearInterfaz();
        this.inicializarEventosTeclado();
        this.inicializarImagenesAleatorias();

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
        imagenVista3.style.left = '500px'; 
        imagenVista3.style.top = '500px';

        this.imagenVista3 = imagenVista3;

        document.getElementById('divVista3').appendChild(this.imagenVista3);

        // Obtener las dimensiones de la ventana
        const ventanaAncho = window.innerWidth;
        const ventanaAlto = window.innerHeight;

        // Obtener las dimensiones de la imagen (puedes ajustar estas dimensiones)
        const imagenAncho = 150;
        const imagenAlto = 110;

        // Calcular la posición inicial en el centro de la ventana
        const posicionInicialX = (ventanaAncho - imagenAncho) / 2;
        const posicionInicialY = (ventanaAlto - imagenAlto) / 2;

        // Establecer la posición inicial
        this.imagenVista3.style.left = `${posicionInicialX}px`;
        this.imagenVista3.style.top = `${posicionInicialY}px`;
        this.imagenVista3.width = imagenAncho;
        this.imagenVista3.height = imagenAlto;

        // Añadir la imagen al documento
        this.base.appendChild(this.imagenVista3);
    }

    inicializarEventosTeclado() {
        window.addEventListener('keydown', (event) => this.teclaPresionada(event));
        window.addEventListener('keyup', () => this.teclaLiberada());
    }
    
    teclaPresionada(event) {
        //console.log('Tecla presionada:', event.key);
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
    
            // Utilizamos setInterval para mover continuamente mientras la tecla está presionada
            if (!this.intervalId) {
                this.intervalId = setInterval(() => this.moverImagen(), 16); // 60 fps
            }
        }
    }
    
    teclaLiberada() {
        // Detenemos el intervalo al soltar la tecla
        clearInterval(this.intervalId);
        this.intervalId = null;
    
        // Detener el movimiento al soltar la tecla
        this.direccionX = 0;
        this.direccionY = 0;
        this.moverImagen();
    }
    
    moverImagen() {
        //console.log('Moviendo la imagen...');

        const nuevaPosicionX = parseFloat(this.imagenVista3.style.left) + this.velocidad * this.direccionX;
        const nuevaPosicionY = parseFloat(this.imagenVista3.style.top) + this.velocidad * this.direccionY;

        // Verificar límites de la pantalla
        const limiteIzquierdo = 0;
        const limiteDerecho = window.innerWidth - this.imagenVista3.width;
        const limiteSuperior = 0;
        const limiteInferior = window.innerHeight - this.imagenVista3.height;

        // Ajustar la posición si está fuera de los límites
        const nuevaPosicionXValida = Math.min(Math.max(nuevaPosicionX, limiteIzquierdo), limiteDerecho);
        const nuevaPosicionYValida = Math.min(Math.max(nuevaPosicionY, limiteSuperior), limiteInferior);

        this.imagenVista3.style.left = nuevaPosicionXValida + 'px';
        this.imagenVista3.style.top = nuevaPosicionYValida + 'px';

        //console.log('Nueva posición X:', this.imagenVista3.style.left);
        //console.log('Nueva posición Y:', this.imagenVista3.style.top);
    }

    inicializarImagenesAleatorias() {
        // Definir una matriz de rutas de imágenes
        this.imagenes = [
            'img/gato.png',
            // Agrega más rutas según sea necesario
        ];

        // Establecer un temporizador para cambiar la imagen cada 2 segundos
        setInterval(() => this.mostrarImagenAleatoria(), 2000); //MODIFICAR DEL ADMIN
    }

    mostrarImagenAleatoria() {
        // Seleccionar aleatoriamente un div
        const divAleatorio = this.obtenerDivAleatorio();

        // Seleccionar aleatoriamente una ruta de imagen
        const rutaImagen = this.obtenerRutaImagenAleatoria();

        // Establecer la imagen en el div seleccionado
        this.establecerImagenEnDiv(divAleatorio, rutaImagen);
    }

    obtenerDivAleatorio() {
        // Obtener todos los divs con la clase grid-item
        const divs = this.base.querySelectorAll('.grid-item');

        // Seleccionar aleatoriamente un div
        const indiceAleatorio = Math.floor(Math.random() * divs.length);
        return divs[indiceAleatorio];
    }

    obtenerRutaImagenAleatoria() {
        // Seleccionar aleatoriamente una ruta de imagen de la matriz
        const indiceAleatorio = Math.floor(Math.random() * this.imagenes.length);
        return this.imagenes[indiceAleatorio];
    }

    establecerImagenEnDiv(div, rutaImagen) {
        // Crear un elemento de imagen
        const imagen = document.createElement('img');
        imagen.src = rutaImagen;

        // Establecer la imagen en el div
        div.innerHTML = ''; // Limpiar el contenido actual del div
        div.appendChild(imagen);
    }




}










