import { Vista } from './template/vista.js';

export class VistaJuego extends Vista {
  constructor(controlador, contenedor) {
    super(controlador, contenedor);

    this.crearInterfaz();
    this.inicializarEventosTeclado();
  }

  crearInterfaz() {
    const avatar = 'img/navidel.png';

    this.imagenVistaJuego = document.createElement('img');
    this.imagenVistaJuego.src = avatar;
    this.imagenVistaJuego.alt = 'Avatar';
    this.imagenVistaJuego.style.width = '100px';
    this.imagenVistaJuego.style.height = '100px';
    this.imagenVistaJuego.style.position = 'absolute';

    // Agregar la imagen al div inferior
    this.contenedor.querySelector('#beach-section').appendChild(this.imagenVistaJuego);
    
  }

  inicializarEventosTeclado() {
    window.addEventListener('keydown', (event) => this.teclaPresionada(event));
    window.addEventListener('keyup', () => this.teclaLiberada());
  }

  teclaPresionada(event) {
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

      // Iniciar el movimiento
      if (!this.intervalId) {
        this.intervalId = setInterval(() => this.moverImagen(), 16);
      }
    }
  }

  teclaLiberada() {
    // Detener el movimiento
    clearInterval(this.intervalId);
    this.intervalId = null;

    // Detener el movimiento en ambas direcciones
    this.direccionX = 0;
    this.direccionY = 0;
  }

  moverImagen() {
    // Mover la imagen en función de la dirección actual
    const nuevaPosicionX = parseFloat(this.imagenVistaJuego.style.left) + this.velocidad * this.direccionX;
    const nuevaPosicionY = parseFloat(this.imagenVistaJuego.style.top) + this.velocidad * this.direccionY;

    this.imagenVistaJuego.style.left = nuevaPosicionX + 'px';
    this.imagenVistaJuego.style.top = nuevaPosicionY + 'px';
  }
}
