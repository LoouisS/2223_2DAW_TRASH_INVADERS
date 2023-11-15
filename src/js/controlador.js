/**
 *Controlador principal de la aplicacion.
 *Responsabilidad es aplicar las reglas de negocio:
    -Cuando se cambia de vista
    -Quien tiene permiso.
 */

console.log('Script cargado correctamente')
import {Modelo} from './modelos/modelo.js'
import {Vista} from './vistas/vista.js'
import {Vista1} from'./vistas/vista1.js'
import {Vista2} from'./vistas/vista2.js'
import {Vista3} from'./vistas/vista3.js'


class Controlador{
    /**
     * Inicializa los atributos del Controlador.
     * Coge las referencias del interfaz
     */

    // Atributos
    vistaActual = null
    vistas = new Map()
    
    constructor(){
        this.modelo = new Modelo()

        const divVista1 = document.getElementById('divVista1')
        const divVista2 = document.getElementById('divVista2')
        const divVista3 = document.getElementById('divVista3')

        //Creo las vistas
        this.vistas.set(Vista.VISTA1, new Vista1(this,divVista1))
        this.vistas.set(Vista.VISTA2, new Vista2(this,divVista2))
        this.vistas.set(Vista.VISTA3, new Vista3(this,divVista3))

        this.verVista(Vista.VISTA1)

        console.log(this.vistas);
    }
    /**
     * Muesta una vista
     * @param Vista {Symbol} Simbolo que identifica a la vista 
     */

    verVista(vista) {
        this.ocultarVistas()
        this.vistas.get(vista).mostrar(true)
        this.vistaActual = vista // Actualiza la vista actual
    }

    ocultarVistas(){
        for (let vista of this.vistas.values())
            vista.mostrar(false)
    }

    cargarLoginEnVista1() {
        const divVista1 = document.getElementById('divVista1');

        // Obtener el contenido de login.html
        fetch('../diseño/login.html')
            .then(response => response.text())
            .then(loginContent => {
                // Agregar el contenido de login.html a divVista1
                divVista1.innerHTML = loginContent;
            })
            .catch(error => console.error('Error al cargar login.html:', error));
    }



    setVidas(vidas) {
        this.modelo.guardar("vidas",vidas)
    }
    getVidas() {
       return this.modelo.ver("vidas")
    }
}

// Cuando se carga la página, se crea una instancia del controlador
window.onload = () => {
    const controlador = new Controlador();
    controlador.cargarLoginEnVista1();
};
