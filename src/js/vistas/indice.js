//vistaIndice
import { InicioSesion } from './iniciosesion.js'
import { Vista } from './vista.js'

export class Indice extends Vista{

    constructor (controlador, base) {
        super(controlador, base)
        this.crearInterfaz()
    }

    crearInterfaz(){
        // boton-registro
        this.botonRegistro = this.base.querySelector('#boton-registro')
        this.botonRegistro.onclick = this.pulsarBotonRegistro.bind(this)

        //boton-inicio
        this.botonInicio = this.base.querySelector('#boton-inicio')
        this.botonInicio.onclick = this.pulsarBotonInicio.bind(this)
    }

    pulsarBotonRegistro(){
        // Manejar el evento del botón "Registro"
        // console.log('Botón registro ha sido pulsado');
        // Cambiar a la vistaRegistro
        this.controlador.verVista(Registro.divvistaRegistro) // Cambiando la vista a la correspondiente al registro
    }

    pulsarBotonRegistro(){
        // Manejar el evento del botón "Iniciar sesión"
        // console.log('Botón iniciar sesión ha sido pulsado');
        // Cambiar a la vistaInicio
        this.controlador.verVista(InicioSesion.divvistaInicio) // Cambiado a la vista de inicio de sesión
    }
}