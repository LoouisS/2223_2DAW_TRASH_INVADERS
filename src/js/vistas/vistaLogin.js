import { Vista } from "./template/vista.js"

export class VistaLogin extends Vista {

    constructor(controlador, contenedor) {
        super(controlador, contenedor)

        // Seleccionamos el input type submit del formulario

        const botonLogin = contenedor.querySelector('#iniciar-sesion')

        // Añadimos un evento al boton de login
        botonLogin.onclick = () => {
         
        }

    }

    // TODO
    // Validar con REGEX el input del usuario
    // Validar con REGEX el input de la contraseña


}