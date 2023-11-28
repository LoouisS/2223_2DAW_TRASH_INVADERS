export class Vista{

    constructor(controlador, contenedor) {
        this.controlador = controlador;
        this.contenedor = contenedor;
    }

    mostrar(ver) {
        if (ver) {
            this.contenedor.style.display = 'block';
        } else {
            this.contenedor.style.display = 'none';
        }
    }
}



