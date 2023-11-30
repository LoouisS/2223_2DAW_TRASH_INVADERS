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
            const valorAparicionMejora = await this.porcentajeAparicion();
            const data = await Rest.obtenerDatos();
            this.mostrarTabla(data, valorAparicionMejora);
            const inputs = this.contenedor.querySelectorAll('input');
        
            // Agregale a cada input un eventListener que escuche el evento 'blur'
            // y que llame a la función 'validarInput' pasándole el input como parámetro
            inputs.forEach(input => {
                input.addEventListener('blur', () => {
                    // Valida primero que sea un numero con regex
                    const regex = /^[0-9]+$/;
                    if (regex.test(input.value)) {
                        // Comprueba que la suma de todos los porcentajes sea menor o igual que valorAparicionMejora
                        const sumaPorcentajes = [...inputs].reduce((suma, input) => {
                            return suma + Number(input.value);
                        }, 0);                        
                        if (sumaPorcentajes > valorAparicionMejora) {
                            console.error("La suma de los porcentajes es mayor que el valor de aparición de la mejora.");
                            input.value = '';
                        }
                    } else {
                        input.value = '';
                        input.placeholder = 'Ingrese un número';
                    }
                });
            });

        } catch (error) {
            console.error("Error al obtener datos:", error);
        }
    }

    async porcentajeAparicion() {
        try {
            const porcentajeAparicion = await Rest.obtenerPorcentajeAparicion();
            return porcentajeAparicion;
        } catch (error) {
            console.error("Error al obtener datos:", error);
        }
    }

    botonAgregarMejoraClick() {
        this.controlador.irAVista('vistaAgregarMejora');
    }

    mostrarTabla(data, valorAparicionMejora) {
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

        let porcentajeAparicionHeader = document.createElement("th");
        headerRow.appendChild(porcentajeAparicionHeader);

        porcentajeAparicionHeader.innerHTML = `Porcentaje Aparicion (${valorAparicionMejora})`;

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

            let porcentajeAparicionCell = document.createElement("td");
            fila.appendChild(porcentajeAparicionCell);
            let porcentajeAparicionInput = document.createElement("input");
            porcentajeAparicionInput.type = "text";
            porcentajeAparicionCell.appendChild(porcentajeAparicionInput);
        });
    }


}
