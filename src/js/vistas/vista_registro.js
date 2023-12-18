import { Vista } from './template/vista.js'
import { Rest } from '../services/rest.js'

export class VistaRegistro extends Vista {
  constructor (controlador, contenedor) {
    super(controlador, contenedor)

    const botonVolver = contenedor.querySelector('#go-back-button')

    botonVolver.onclick = () => {
      this.controlador.irAVista('vistaPrincipal')
    }

    const botonRegistro = contenedor.querySelector('#register-button')

    botonRegistro.onclick = () => {
      const inputNombre = document.getElementById('register-name-user')
      const inputPassword = document.getElementById('register-password-user')

      Rest.altaUsuario(inputNombre.value, inputPassword.value)

      this.controlador.irAVista('vistaPrincipal')

    }

    const inputNombre = document.getElementById('register-name-user')

    const regex = /^[a-zA-Z0-9]+$/

    inputNombre.onblur = () => {
      const nombre = inputNombre.value.trim()
      if (!regex.test(nombre)) {
        console.log('Error')
      } 
    }

    
  }
}
