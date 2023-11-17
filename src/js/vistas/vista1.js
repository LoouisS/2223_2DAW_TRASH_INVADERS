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

        // Agregar un párrafo para mostrar mensajes de error
        this.mensajeError = document.createElement('p');
        this.mensajeError.id = 'mensaje-error';  // Asignar un ID al mensaje de error
        this.base.appendChild(this.mensajeError);

        // Establecer estilos iniciales para el mensaje de error
        this.mensajeError.style.color = 'red';
        this.mensajeError.style.display = 'none'; // Ocultar inicialmente el mensaje de error
    }

    pulsarBotonInicioSesion() {
        // Obtener el valor del campo de usuario
        const usuario = this.inputUsuario.value;

        // Definir la expresión regular para validar
        const regex1 = /^[a-zA-Z0-9]{3}$/;

        // Verificar si el usuario cumple con la regex1
        if (regex1.test(usuario)) {
            // Usuario válido, cambiar a la Vista2
            this.controlador.verVista(Vista2.VISTA2);

            // Limpiar el mensaje de error si estaba visible
            this.mostrarMensajeError('');
        } else {
            // Usuario no válido, mostrar un mensaje de error
            const mensaje = 'Debe introducir 3 caracteres/numeros';
            this.mostrarMensajeError(mensaje);
        }
    }

    mostrarMensajeError(mensaje) {
        // Mostrar el mensaje de error al lado del campo de usuario
        this.mensajeError.textContent = mensaje;
        this.mensajeError.style.left = '10px';  // Ajustar posición a la izquierda del campo
        this.mensajeError.style.top = '40%';  // Ajustar posición al nivel del campo
        this.mensajeError.style.display = mensaje ? 'block' : 'none'; // Mostrar u ocultar el mensaje de error
    }

    validarUsuario() {
        // Obtener el valor del campo de usuario
        const usuario = this.inputUsuario.value;

        // Cambiar el color del recuadro según la validación
        this.inputUsuario.style.borderColor = /^[a-zA-Z0-9]{3}$/.test(usuario) ? 'green' : 'red';
    }
}







