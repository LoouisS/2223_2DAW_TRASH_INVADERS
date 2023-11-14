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
    verVista(vista){
        this.ocultarVistas()
        this.vistas.get(vista).mostrar(true)
    }
    ocultarVistas(){
        for (let vista of this.vistas.values())
            vista.mostrar(false)
    }
    setVidas(vidas){
        this.modelo.guardar("vidas",vidas)
    }
    getVidas(){
       return this.modelo.ver("vidas")
    }
}


window.onload=() => {new Controlador()}
