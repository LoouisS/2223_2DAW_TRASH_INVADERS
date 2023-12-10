import { Vista } from './template/vista.js'

export class VistaRegistro extends Vista {
  constructor (controlador, contenedor) {
    super(controlador, contenedor)

    const botonVolver = contenedor.querySelector('#go-back-button')

    botonVolver.onclick = () => {
      this.controlador.irAVista('vistaPrincipal')
    }

    const botonRegistro = contenedor.querySelector('#register-button')

    botonRegistro.onclick = () => {
      this.controlador.irAVista('vistaLogin')
    }

    const inputNombre = document.getElementById('register-name-user')

    const regex = /^[a-zA-Z0-9]+$/

    inputNombre.onblur = () => {
      const nombre = inputNombre.value.trim()
      if (!regex.test(nombre)) {
        //TODO Alertar al usuario sobre esto
        console.log('Error')
      } 
    }

    
  }
}
