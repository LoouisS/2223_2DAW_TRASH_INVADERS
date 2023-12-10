import { Vista } from './template/vista.js'

export class VistaJuego extends Vista {

    constructor(controlador, contenedor) {
        super(controlador, contenedor)

        this.direccionActual = null
        this.posicionHorizontal = null
        this.posicionVertical = null
        this.personaje = document.getElementById("contenedor-personaje")

        const botonVolver = contenedor.querySelector('#cerrar-juego')

        botonVolver.onclick = () => {
            this.controlador.irAVista('vistaMenu')
        }

        // Logica de la basura

        this.contadorBasuras = 0
        
        this.basuras = {
            organica: {
                img: "src/img/organic.png",
                puntos: 5,
                clase: "basura-organica"
            },
            papel: {
                img: "src/img/paper.png",
                puntos: 5,
                clase: "basura-papel"
            },
            plastico: {
                img: "src/img/plastic.png",
                puntos: 5,
                clase: "basura-plastico"
            },
            vidrio: {
                img: "src/img/glass.png",
                puntos: 5,
                clase: "basura-vidrio"
            }
        }

        this.comprobarColisionPersonaje = this.comprobarColisionPersonaje.bind(this)
        this.comprobarColisionContenedor = this.comprobarColisionContenedor.bind(this)

        // Objeto para mapear la basura generada
        this.basuraGenerada = {}

        // Velocidad de la basura

        this.velocidad = 1

        // Contenedores

        
        this.contenedores = {
            organica: {
                img: "img/organic-container.png",
                clase: "basura-organica",
                id: "contenedor-inferior-izquierda"
            },
            papel: {
                img: "img/paper-container.png",
                clase: "basura-papel",
                id: "contenedor-superior-derecha"
            },
            plastico: {
                img: "img/plastic-container.png",
                clase: "basura-plastico",
                id: "contenedor-superior-izquierda"
            },
            vidrio: {
                img: "img/glass-container.png",
                clase: "basura-vidrio",
                id: "contenedor-inferior-derecha"
            }
        }

        
    }

    modificarVelocidadBasura(velocidad) {
    }

    iniciarJuego() {
        this.posicionHorizontal = window.innerWidth / 2
        this.posicionVertical = window.innerHeight / 2

        this.personaje.style.position = "absolute"
        this.personaje.style.left = this.posicionHorizontal + "px"
        this.personaje.style.top = this.posicionVertical + "px"

        document.addEventListener('keydown', async(e) => {
            const velocidad = 10
            switch(e.key) {
                case 'ArrowLeft':
                    if (this.direccionActual !== 'ArrowLeft') {
                        this.direccionActual = 'ArrowLeft'
                        await this.moverIzquierda(velocidad)
                    }
                    break
                case 'ArrowRight':
                    if (this.direccionActual !== 'ArrowRight') {
                        this.direccionActual = 'ArrowRight'
                        await this.moverDerecha(velocidad)
                    }
                    break
                case 'ArrowUp':
                    if (this.direccionActual !== 'ArrowUp') {
                        this.direccionActual = 'ArrowUp'
                        await this.moverArriba(velocidad)
                    }
                    break
                case 'ArrowDown':
                    if (this.direccionActual !== 'ArrowDown') {
                        this.direccionActual = 'ArrowDown'
                        await this.moverAbajo(velocidad)
                    }
                    break
                }
        })  

        setInterval(() => {this.generarBasura(this.seleccionarBasuraAleatoria())}, 2000)
        setInterval(this.comprobarColisionPersonaje, 100)
        setInterval(() => {
            if (parseInt(document.getElementById("contador").innerHTML) === 1000) {
                alert("Has ganado")
                location.reload()
            }
        }, 100)
    }

    async moverIzquierda(velocidad) {
        while (this.direccionActual === 'ArrowLeft') {
            const limiteIzquierdo = 0
            this.posicionHorizontal = Math.max(limiteIzquierdo, this.posicionHorizontal - velocidad)
            this.personaje.style.left = this.posicionHorizontal + 'px'
            await this.sleep(10)
        }
    }
    
    async moverDerecha(velocidad) {
        while (this.direccionActual === 'ArrowRight') {
            const limiteDerecho = (window.innerWidth - this.personaje.offsetWidth) + 75
            this.posicionHorizontal = Math.min(limiteDerecho, this.posicionHorizontal + velocidad)
            this.personaje.style.left = this.posicionHorizontal + 'px'
            await this.sleep(10)
        }
    }
    
    async moverArriba(velocidad) {
        const limiteSuperior = 0
        while (this.direccionActual === 'ArrowUp' && this.posicionVertical > limiteSuperior) {
            this.posicionVertical = Math.max(limiteSuperior, this.posicionVertical - velocidad)
            this.personaje.style.top = this.posicionVertical + 'px'
            await this.sleep(10)
        }
    }
    
    async moverAbajo(velocidad) {
        const limiteInferior = window.innerHeight / 2 
        while (this.direccionActual === 'ArrowDown' && this.posicionVertical < limiteInferior) {
            this.posicionVertical = Math.min(limiteInferior, this.posicionVertical + velocidad)
            this.personaje.style.top = this.posicionVertical + 'px'
            await this.sleep(10)
        }
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms))
    }

    // Generacion de la basura

    seleccionarBasuraAleatoria() {
        const tiposBasura = Object.keys(this.basuras)
        const tipoBasuraAleatoria = tiposBasura[Math.floor(Math.random() * tiposBasura.length)]
        return tipoBasuraAleatoria
    }

    // Generar la basura en el DOM

    generarBasura() {
        const basura = document.createElement("img")
        // Seleccionar un tipo de basura aleatorio mediante la funcion seleccionarBasuraAleatoria()
        const tipoBasura = this.seleccionarBasuraAleatoria() 
        basura.src = this.basuras[tipoBasura].img
        
        basura.id = "garbage " + this.contadorBasuras
    
        basura.classList.add(this.basuras[tipoBasura].clase)
        basura.style.position = "absolute"
        basura.style.left = Math.random() * (window.innerWidth - 50) + "px"
        basura.style.top = (window.innerHeight - 50) + "px"
    
        document.getElementById("vista-principal-juego").appendChild(basura)
    
        this.contadorBasuras++
        this.moverBasura(basura)
    }

    moverBasura(basura) {
        const limiteSuperior = window.innerHeight / 2 + 50 
    
        const posicionVertical = parseInt(basura.style.top)
        const nuevaPosicionVertical = posicionVertical - this.velocidad
        basura.style.top = nuevaPosicionVertical + "px"
    
        if (nuevaPosicionVertical > limiteSuperior) {
            requestAnimationFrame(() => this.moverBasura(basura))
        } else {
            // Almacenar la basura generada en el objeto basuraGenerada para comprobar colisiones
            this.basuraGenerada[basura.id] = basura.getBoundingClientRect()
        }
    }

    comprobarColisionPersonaje() {
        
        for (const idBasura in this.basuraGenerada) {

            const basura = this.basuraGenerada[idBasura]
            const personaje = document.getElementById("personaje").getBoundingClientRect()
            
            if (basura.left < personaje.right && basura.right > personaje.left && basura.top < personaje.bottom && basura.bottom > personaje.top && document.getElementById("contenedor-personaje").children.length === 1) {
                // La basura se introduce en el div contenedor-personaje
                document.getElementById("contenedor-personaje").appendChild(document.getElementById(idBasura))
                // Eliminamos las propiedades de la posicion a las que tiene por defecto
                document.getElementById(idBasura).style.position = ""
                // Se elimina la basura del objeto basuraGenerada
                delete this.basuraGenerada[idBasura]
                
                // Comprobar que la basura colisiona con un contenedor cada 100ms
                setInterval(this.comprobarColisionContenedor, 100)
            }
        }
    }

    comprobarColisionContenedor() {
        try {
            const basuraRecogida = document.getElementById("contenedor-personaje").children[1]
            for (const contenedor in this.contenedores) {
                // Comprobar que la basura esté cerca del contenedor
                const basura = basuraRecogida.getBoundingClientRect()
                const contenedorActual = document.getElementById(this.contenedores[contenedor].id).getBoundingClientRect()
                if (basura.left < contenedorActual.right && basura.right > contenedorActual.left && basura.top < contenedorActual.bottom && basura.bottom > contenedorActual.top) {
                    if (basuraRecogida.classList.value === this.contenedores[contenedor].clase) {
                        // Eliminamos la basura del contenedor-personaje
                        document.getElementById("contenedor-personaje").removeChild(basuraRecogida)
                        // Añadimos los puntos al contador
                        const contador = document.getElementById("contador")
                        contador.innerHTML = parseInt(contador.innerHTML) + 100
                    } else {
                        continue
                    }
                }
            }
        } catch (error) {
            // Do nothing
        }
    
    }



}
