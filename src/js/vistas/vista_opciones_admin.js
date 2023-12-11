import { Vista } from './template/vista.js';

export class VistaOpcionesAdmin extends Vista {
    constructor (controlador, contenedor) {
        super(controlador, contenedor);

        const parametrosJuego = contenedor.querySelector('#btn-configuracion-parametros');
        const bancoImagenes = contenedor.querySelector('#btn-configuracion-pool');
        const botonVolver = contenedor.querySelector('btn-volver');

        parametrosJuego.onclick = () => {
            this.controlador.irAVista('vistaConfiguracionParametros');
        }
    }

}
