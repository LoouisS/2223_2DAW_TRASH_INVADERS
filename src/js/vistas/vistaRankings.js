import { Vista } from './template/vista.js';
import { Rest } from '../services/rest.js';

export class VistaRankings extends Vista {
    constructor(controlador, contenedor) {
        super(controlador, contenedor);
        this.inicializar();
    }

    async inicializar() {
        try {
            const rankings = await Rest.obtenerPuntuaciones();
            this.agregarTablaRankings(rankings);
        } catch (error) {
            console.error('Error al obtener puntuaciones:', error);
        }

        const botonEnviarPuntuacion = this.contenedor.querySelector('#submit-puntuacion');
        botonEnviarPuntuacion.onclick = () => this.enviarPuntuacion();
    }

    async enviarPuntuacion() {
        const idUsuario = this.contenedor.querySelector('#username').value;
        const puntuacion = this.contenedor.querySelector('#number').value;

        try {
            await Rest.agregarPuntuacion(idUsuario, puntuacion);
            console.log('Puntuación agregada');

            // Eliminar la tabla existente antes de agregar la nueva
            const tablaExistente = this.contenedor.querySelector('table');
            if (tablaExistente) {
                tablaExistente.remove();
            }

            // Obtener nuevamente las puntuaciones y agregar la nueva tabla
            const rankings = await Rest.obtenerPuntuaciones();
            this.agregarTablaRankings(rankings);
        } catch (error) {
            console.error('Error al agregar puntuación:', error);
        }
    }

    agregarTablaRankings(rankings) {
        const tabla = document.createElement('table');
        const encabezado = tabla.createTHead();
        const filaEncabezado = encabezado.insertRow();
        this.crearCelda(filaEncabezado, 'ID Ranking');
        this.crearCelda(filaEncabezado, 'ID Usuario');
        this.crearCelda(filaEncabezado, 'Puntuación');

        const cuerpoTabla = tabla.createTBody();
        rankings.forEach(ranking => {
            const fila = cuerpoTabla.insertRow();
            this.crearCelda(fila, ranking.idRanking);
            this.crearCelda(fila, ranking.idUsuario);
            this.crearCelda(fila, ranking.puntuacion);
        });

        const mainElement = this.contenedor.querySelector('#register-page');
        mainElement.appendChild(tabla);
    }

    crearCelda(fila, contenido) {
        const celda = fila.insertCell();
        celda.textContent = contenido;
        return celda;
    }
}
