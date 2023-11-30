import { Vista } from './template/vista.js';
import { Rest } from '../services/rest.js';

export class VistaAgregarMejora extends Vista {
    imagenes = null;

    constructor(controlador, contenedor) {
        super(controlador, contenedor);

        this.inicializarImagenes();

        // Agregar evento de cambio al elemento select
        const selectImagenes = contenedor.querySelector('#select-option-agregar-mejora');
        selectImagenes.addEventListener('change', () => this.mostrarImagenSeleccionada());
    }

    async inicializarImagenes() {
        try {
            this.imagenes = await Rest.obtenerImagenes();
            this.mostrarImagenes();
        } catch (error) {
            console.error('Error al obtener las imágenes:', error);
        }
    }

    mostrarImagenes() {
        const poolImagenes = this.contenedor.querySelector('#select-option-agregar-mejora');

        this.imagenes.forEach(item => {
            const option = this.crearOpcion(item.nombre);
            poolImagenes.appendChild(option);
        });

        // Mostrar la imagen seleccionada inicialmente
        this.mostrarImagenSeleccionada();
    }

    mostrarImagenSeleccionada() {
        const selectImagenes = this.contenedor.querySelector('#select-option-agregar-mejora');
        const nombreSeleccionado = selectImagenes.value;

        // Obtener el elemento donde se mostrará la previsualización de la imagen
        const previsualizacionImagen = this.contenedor.querySelector('#imagen-previsualizacion');

        // Limpiar la previsualización actual
        this.limpiarPrevisualizacion(previsualizacionImagen);

        // Buscar la imagen seleccionada
        const imagenSeleccionada = this.imagenes.find(imagen => imagen.nombre === nombreSeleccionado);

        if (imagenSeleccionada) {
            this.mostrarImagen(imagenSeleccionada, previsualizacionImagen);
        } else {
            console.log('No se encontró la imagen seleccionada');
        }
    }

    crearOpcion(nombre) {
        const option = document.createElement('option');
        option.value = nombre;
        option.innerHTML = nombre;
        return option;
    }

    limpiarPrevisualizacion(previsualizacionImagen) {
        previsualizacionImagen.innerHTML = '';
    }

    mostrarImagen(imagen, previsualizacionImagen) {
        const imgElement = document.createElement('img');
        imgElement.src = imagen.src;
        imgElement.alt = imagen.nombre;
        imgElement.width = imagen.width;
        imgElement.height = imagen.height;
        previsualizacionImagen.appendChild(imgElement);
    }
}
