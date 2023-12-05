// Movimiento del personaje

let posicionHorizontal = window.innerWidth / 2
let posicionVertical = window.innerHeight / 2

const personaje = document.getElementById("personaje")
personaje.style.left = posicionHorizontal + "px"
personaje.style.top = posicionVertical + "px"

let direccionActual = null

document.addEventListener('keydown', async(e) => {
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
    while (direccionActual === 'ArrowLeft') {
        const limiteIzquierdo = 0
        posicionHorizontal = Math.max(limiteIzquierdo, posicionHorizontal - velocidad)
        personaje.style.left = posicionHorizontal + 'px'
        await sleep(10)
    }
}

async function moverDerecha(velocidad) {
    while (direccionActual === 'ArrowRight') {
        const limiteDerecho = (window.innerWidth - personaje.offsetWidth) + 75
        posicionHorizontal = Math.min(limiteDerecho, posicionHorizontal + velocidad)
        personaje.style.left = posicionHorizontal + 'px'
        await sleep(10)
    }
}

async function moverArriba(velocidad) {
    const limiteSuperior = 0
    while (direccionActual === 'ArrowUp' && posicionVertical > limiteSuperior) {
        posicionVertical = Math.max(limiteSuperior, posicionVertical - velocidad)
        personaje.style.top = posicionVertical + 'px'
        await sleep(10)
    }
}

async function moverAbajo(velocidad) {
    const limiteInferior = window.innerHeight / 2 
    while (direccionActual === 'ArrowDown' && posicionVertical < limiteInferior) {
        posicionVertical = Math.min(limiteInferior, posicionVertical + velocidad)
        personaje.style.top = posicionVertical + 'px'
        await sleep(10)
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

let contadorBasuras = 0;

function generarBasura() {
    const basura = document.createElement("img");
    basura.src = "garbage.png";

    basura.id = "garbage" + contadorBasuras;

    basura.classList.add("garbage");
    basura.style.position = "absolute";
    basura.style.left = Math.random() * (window.innerWidth - 50) + "px";
    basura.style.top = (window.innerHeight - 50) + "px";

    document.getElementById("vista-principal-juego").appendChild(basura);

    contadorBasuras++;

    moverBasura(basura);
}

// Agrega esta línea para generar basura cada cinco segundos
setInterval(generarBasura, 5000);

function moverBasura(basura) {
    const velocidad = 1;
    const limiteSuperior = window.innerHeight / 2 + 50; 

    const posicionVertical = parseInt(basura.style.top);
    const nuevaPosicionVertical = posicionVertical - velocidad;
    basura.style.top = nuevaPosicionVertical + "px";

    if (nuevaPosicionVertical > limiteSuperior) {
        requestAnimationFrame(() => moverBasura(basura));
    }
}


setInterval(verificarColision, 100);