// Movimiento del personaje

const posicionHorizontal = window.innerWidth / 2
const posicionVertical = window.innerHeight / 2

const perosnaje = document.getElementById("personaje")
personaje.style.left = posicionHorizontal + "px"
personaje.style.top = posicionVertical + "px"

document.addEventListener('keydown', async(e) => {
    console.log(e)
    const velocidad = 2
    switch(e.key) {
        case 'ArrowLeft':
            if (direccionActual !== 'ArrowLeft') {
                direccionActual = 'ArrowLeft'
                await moverIzquierda(velocidad)
            }
            break
        case 'ArrowRight':
            if (direccionActual !== 'ArrowRight') {
                direccionActual = 'ArrowRight'
                await moverDerecha(velocidad)
            }
            break
        case 'ArrowUp':
            if (direccionActual !== 'ArrowUp') {
                direccionActual = 'ArrowUp'
                await moverArriba(velocidad)
            }
            break
        case 'ArrowDown':
            if (direccionActual !== 'ArrowDown') {
                direccionActual = 'ArrowDown'
                await moverAbajo(velocidad)
            }
            break
    }
})

async function moverIzquierda(velocidad) {

}

async function moverDerecha(velocidad) {

}

async function moverArriba(velocidad) {

}

async function moverAbajo(velocidad) {

}
