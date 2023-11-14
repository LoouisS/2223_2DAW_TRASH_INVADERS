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

    vistaActual = null;
    vistas=new Map()
    
    constructor(){
        this.modelo=new Modelo()


        const divVista1=document.getElementById('divVista1')
        const divVista2=document.getElementById('divVista2')
        const divVista3=document.getElementById('divVista3')

        //Creo las vistas
        this.vistas.set(Vista.VISTA1,new Vista1(this,divVista1))
        this.vistas.set(Vista.VISTA2,new Vista2(this,divVista2))
        this.vistas.set(Vista.VISTA3,new Vista3(this,divVista3))


        this.verVista(Vista.VISTA1)
    }
    /**
     * Muesta una vista
     * @param Vista {Symbol} Simbolo que identifica a la vista 
     */
    verVista(vista) {
        this.ocultarVistas();
        this.vistas.get(vista).mostrar(true);
        this.vistaActual = vista; // Actualiza la vista actual
        this.actualizarInterfaz(); // Llama a la función para manejar la lógica de la interfaz
    }
    ocultarVistas(){
        for (let vista of this.vistas.values())
            vista.mostrar(false)
    }

    actualizarInterfaz() {
        // Lógica para actualizar la interfaz basada en la vista actual
        if (this.vistaActual === Vista.VISTA3) {
            // Verificar si la imagen ya existe
            let imagenExistente = document.getElementById('imagenVista3');
            
            if (!imagenExistente) {
                // Puedes ajustar la ruta de la imagen según tu estructura de carpetas
                const avatar = 'img/navidel.png';
    
                // Crear elemento de imagen
                this.imagenVista3 = document.createElement('img');
                this.imagenVista3.src = avatar;
                this.imagenVista3.id = 'imagenVista3'; // Asignar un ID único
    
                // Ajustar el tamaño de la imagen
                this.imagenVista3.width = 200; // Establece el ancho deseado
                this.imagenVista3.height = 150; // Establece la altura deseada
    
                // Añadir la imagen directamente al divVista3 para evitar el contenedor rojo
                document.getElementById('divVista3').appendChild(this.imagenVista3);
            }
    
            // Obtener posición real de la imagen
            const posX = this.imagenVista3.offsetLeft;
            const posY = this.imagenVista3.offsetTop;
    
            console.log('Posición real X:', posX);
            console.log('Posición real Y:', posY);
        } else {
            // Si no estamos en Vista3, asegurémonos de que la imagen no esté presente
            let imagenExistente = document.getElementById('imagenVista3');
            if (imagenExistente) {
                imagenExistente.remove();
            }
        }
    }
    
    
    
    setVidas(vidas){
        this.modelo.guardar("vidas",vidas)
    }
    getVidas(){
       return this.modelo.ver("vidas")
    }
}


window.onload=() => {new Controlador()}
