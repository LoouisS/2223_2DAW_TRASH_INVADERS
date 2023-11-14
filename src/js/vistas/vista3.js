import { Vista } from "./vista.js";

export class Vista3 extends Vista {
    constructor(controlador, base) {
        super(controlador, base);
        this.crearInterfaz();
    }

    crearInterfaz() {
        // Puedes ajustar la ruta de la imagen según tu estructura de carpetas
        const avatar = 'img/navidel.png';

        // Crear elemento de imagen
        this.imagenVista3 = document.createElement('img');
        this.imagenVista3.src = avatar;
        this.base.appendChild(this.imagenVista3);
    }
}

