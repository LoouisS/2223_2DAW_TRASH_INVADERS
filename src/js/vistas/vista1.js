// vista1.js
import { Vista } from "./vista.js";
import { Vista2 } from "./vista2.js"; // Importa la clase Vista2

export class Vista1 extends Vista {
    constructor(controlador, base) {
        super(controlador, base);

        // Coger referencias del interfaz
        this.botonInicioSesion = this.base.querySelector('#boton-inicio-sesion');
        this.inputUsuario = this.base.querySelector('#usuario');

        // Agregar evento al botón de inicio de sesión
        this.botonInicioSesion.onclick = this.pulsarBotonInicioSesion.bind(this);

        // Agregar eventos para la validación del campo de usuario
        this.inputUsuario.addEventListener('blur', this.validarUsuario.bind(this));
    }

    pulsarBotonInicioSesion() {
        // Obtener el valor del campo de usuario
        const usuario = this.inputUsuario.value;
    
        // Definir la expresión regular para validar
        const regex = /^[a-zA-Z0-9]{3}$/;
    
        // Verificar si el usuario cumple con la regex
        if (regex.test(usuario)) {
            // Usuario válido, cambiar a la Vista2
            this.controlador.verVista(Vista2.VISTA2);
        } else {
            // Usuario no válido, mostrar un mensaje de error o realizar alguna acción
            console.log('Usuario no válido. Deben ser 3 caracteres alfanuméricos.');
        }
    }
    

    validarUsuario() {
        // Obtener el valor del campo de usuario
        const usuario = this.inputUsuario.value;

        // Cambiar el color del recuadro según la validación
        this.inputUsuario.style.borderColor = /^[a-zA-Z0-9]{3}$/.test(usuario) ? 'green' : 'red';
    }
}







