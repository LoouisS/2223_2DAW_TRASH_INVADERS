import { Vista } from "./vista.js"

export class Vista1 extends Vista{
   constructor(controlador,base){
    super(controlador,base)
    //Coger referencias del interfaz
    this.enlace1=this.base.querySelector('p')
    this.iVidas=this.base.querySelectorAll("input")[0]
    //Asociar eventos
    //Cuando asociamos eventos tenemos que decirle que siga enlazado a si mismo
    this.enlace1.onclick=this.pulsarEnlace1.bind(this)
   }

   pulsarEnlace1(){
    this.controlador.setVidas(this.iVidas.value)
    this.controlador.verVista(Vista.VISTA2)
   }
}

