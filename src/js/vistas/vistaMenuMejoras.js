import { Vista } from './template/vista.js';
import { Rest } from '../services/rest.js';

export class VistaMenuMejoras extends Vista {

    constructor(controlador, contenedor) {
        super(controlador, contenedor);
        this.botonAgregarMejoraClick = this.botonAgregarMejoraClick.bind(this);
        this.initialize();
    }

    async initialize() {
        const botonAgregarMejora = this.contenedor.querySelector('#boton-agregar-mejora');
        botonAgregarMejora.addEventListener('click', this.botonAgregarMejoraClick);

        try {
            const data = await Rest.obtenerDatos();
            this.mostrarTabla(data);
        } catch (error) {
            console.error("Error al obtener datos:", error);
        }
    }

    botonAgregarMejoraClick() {
        this.controlador.irAVista('vistaAgregarMejora');
    }

    mostrarTabla(data) {
        let main = this.contenedor.querySelector("main");
        // Add a table to the container
        let tabla = document.createElement("table");
        main.insertBefore(tabla, main.children[1]);

        // Create table header
        let headerRow = document.createElement("tr");
        tabla.appendChild(headerRow);

        let imagenHeader = document.createElement("th");
        headerRow.appendChild(imagenHeader);
        imagenHeader.innerHTML = "Imagen";

        let descripcionHeader = document.createElement("th");
        headerRow.appendChild(descripcionHeader);
        descripcionHeader.innerHTML = "Descripción";

        let multiplicadorHeader = document.createElement("th");
        headerRow.appendChild(multiplicadorHeader);
        multiplicadorHeader.innerHTML = "Multiplicador";

        let duracionMejoraHeader = document.createElement("th");
        headerRow.appendChild(duracionMejoraHeader);
        duracionMejoraHeader.innerHTML = "Duración Mejora";

        data.forEach(item => {
            let fila = document.createElement("tr");
            tabla.appendChild(fila);

            let imagenCell = document.createElement("td");
            fila.appendChild(imagenCell);

            let img = document.createElement("img");

            img.src = `data:image/png;base64,${item.imagen}`;
            img.style.width = "100px";
            img.style.height = "100px";
            imagenCell.appendChild(img);

            let descripcionCell = document.createElement("td");
            fila.appendChild(descripcionCell);
            descripcionCell.innerHTML = `${item.descripcion}`;

            let multiplicadorCell = document.createElement("td");
            fila.appendChild(multiplicadorCell);
            multiplicadorCell.innerHTML = item.multiplicador;

            let duracionMejoraCell = document.createElement("td");
            fila.appendChild(duracionMejoraCell);
            duracionMejoraCell.innerHTML = item.duracionMejora;
        });
    }

}
