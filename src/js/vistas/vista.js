export class Vista{

    static {
        Vista.VISTA1 = Symbol('Inicio')
        Vista.VISTA2 = Symbol('Juego')
        Vista.VISTA3 = Symbol('Ranking')
    }

    constructor(controlador,base) {
        this.controlador = controlador
        this.base = base
    }

    /**
     * Muestra u oculta la vista
     * @param ver {Boolean} Indica si la vista debe mostrarse (true) u ocultarse(false)
     */

    mostrar (ver) {
        if (ver) {
            this.base.style.display='block'
        } else {
            this.base.style.display='none'
        }
    }
}

