import { Vista } from './template/vista.js'
import { Rest } from '../services/rest.js'

/**
 * Clase que representa la vista de inicio de sesión.
 * @extends Vista
 */
export class VistaLogin extends Vista {
  /**
     * Crea una instancia de la vista de inicio de sesión.
     * @param {Controlador} controlador - El controlador de la aplicación.
     * @param {HTMLElement} contenedor - El elemento contenedor de la vista.
     */
  constructor(controlador, contenedor) {
    super(controlador, contenedor);

    // Seleccionamos el input type submit del formulario

    const botonVolver = contenedor.querySelector('#go-back-button');

    botonVolver.onclick = () => {
      this.controlador.irAVista('vistaPrincipal');
    };

    const botonLogin = contenedor.querySelector('#login-button');

    // TODO Agregar la funcionalidad del login
    botonLogin.onclick = () => {
      const usuario = contenedor.querySelector('#usuario-login').value;
      const password = contenedor.querySelector('#password-login').value;
      console.log(usuario, password);
      Rest.loginUsuario(usuario, password)
        .then(response => response.text()) // Use response.text() instead of response.json()
        .then(data => {
          if(JSON.parse(data).user_exists) {
            this.controlador.irAVista('vistaMenu');
          } else {
            alert('Usuario o contraseña incorrectos');
          }
        })
    };
  }
}

const response = {
  user_exists: false
};

console.log(response.user_exists); // Output: false
