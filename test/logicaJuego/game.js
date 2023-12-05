// game.js

const personaje = document.getElementById('personaje')
const beachSection = document.getElementById('beach-section')
const garbageImage = document.getElementsByClassName('garbage-image')[0]
console.log(garbageImage)

const contenedorSuperiorIzquierda = document.getElementById('contenedor-superior-izquierda')
const contenedorSuperiorDerecha = document.getElementById('contenedor-superior-derecha')
const contenedorInferiorIzquierda = document.getElementById('contenedor-inferior-izquierda')
const contenedorInferiorDerecha = document.getElementById('contenedor-inferior-derecha')

let posicionHorizontal = window.innerWidth / 2
let posicionVertical = window.innerHeight / 2
let direccionActual = null
let recogiendoBasura = false
let puntos = 0

personaje.style.left = posicionHorizontal + 'px'
personaje.style.top = posicionVertical + 'px'

// Set the initial position of garbageImage at the lowest part of the screen
garbageImage.style.left = posicionHorizontal + 'px'
garbageImage.style.top = window.innerHeight - garbageImage.offsetHeight + 'px'


document.addEventListener('keydown', async (e) => {
    const velocidad = 2

    switch (e.key) {
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
        case ' ':
            const basuraCercana = estaCercaDeBasura();
            if (recogiendoBasura && basuraCercana !== null) {
                recogiendoBasura = false;
                puntos += 10;
                console.log(`¡Has conseguido 10 puntos! Puntos totales: ${puntos}`);
                await moverConjunto(personaje, basuraCercana, velocidad);
                basuraCercana.style.left = basuraCercana.originalLeft + 'px'; // Deja la basura en su posición actual
                basuraCercana.style.top = basuraCercana.originalTop + 'px';
            } else if (basuraCercana !== null && !recogiendoBasura) {
                recogiendoBasura = true;
                basuraCercana.originalLeft = basuraCercana.offsetLeft; // Guarda la posición original de la basura
                basuraCercana.originalTop = basuraCercana.offsetTop;
            }
            break;
    }
})

async function moverConjunto(personaje, basura, velocidad) {
    while (direccionActual !== null) {
        const limiteIzquierdo = 0;
        const limiteDerecho = window.innerWidth - personaje.offsetWidth;
        const limiteSuperior = 0;
        const limiteInferior = window.innerHeight - personaje.offsetHeight;

        let nuevaPosicionHorizontal = posicionHorizontal;

        if (direccionActual === 'ArrowLeft') {
            nuevaPosicionHorizontal = Math.max(limiteIzquierdo, nuevaPosicionHorizontal - velocidad);
        } else if (direccionActual === 'ArrowRight') {
            nuevaPosicionHorizontal = Math.min(limiteDerecho, nuevaPosicionHorizontal + velocidad);
        }

        let nuevaPosicionVertical = posicionVertical;

        if (direccionActual === 'ArrowUp') {
            nuevaPosicionVertical = Math.max(limiteSuperior, nuevaPosicionVertical - velocidad);
        } else if (direccionActual === 'ArrowDown') {
            nuevaPosicionVertical = Math.min(limiteInferior, nuevaPosicionVertical + velocidad);
        }

        // Actualizar las posiciones tanto horizontal como vertical
        personaje.style.left = nuevaPosicionHorizontal + 'px';
        personaje.style.top = nuevaPosicionVertical + 'px';

        if (recogiendoBasura) {
            basura.style.left = nuevaPosicionHorizontal + 'px';
            basura.style.top = nuevaPosicionVertical + 'px';
        }

        verificarColisionContenedor();
        await sleep(10);
    }
}

function estaCercaDeBasura() {
    let basuraCercana = null;
    let distanciaMinima = Number.MAX_SAFE_INTEGER;
    console.log(garbageImages);
    for (let i = 0; i < garbageImages.length; i++) {
        const garbageImage = garbageImages[i];
        let distanciaHorizontal, distanciaVertical;

        if (recogiendoBasura) {

            distanciaHorizontal = Math.abs(posicionHorizontal - garbageImage.style.left.replace('px', ''));
            distanciaVertical = Math.abs(posicionVertical - garbageImage.style.top.replace('px', ''));
        } else {
            distanciaHorizontal = Math.abs(posicionHorizontal - garbageImage.offsetLeft);
            distanciaVertical = Math.abs(posicionVertical - garbageImage.offsetTop);
        }

        const encimaDeBasuraHorizontal = distanciaHorizontal < personaje.offsetWidth / 2 + garbageImage.offsetWidth / 2;
        const encimaDeBasuraVertical = distanciaVertical < personaje.offsetHeight / 2 + garbageImage.offsetHeight / 2;

        if (encimaDeBasuraHorizontal && encimaDeBasuraVertical) {
            const distanciaTotal = Math.sqrt(distanciaHorizontal ** 2 + distanciaVertical ** 2);
            if (distanciaTotal < distanciaMinima) {
                distanciaMinima = distanciaTotal;
                basuraCercana = garbageImage;
            }
        }
    }
    console.log(basuraCercana)
    return basuraCercana; // Devuelve la basura más cercana
}

async function moverIzquierda(velocidad) {
    while (direccionActual === 'ArrowLeft') {
        const limiteIzquierdo = 0
        posicionHorizontal = Math.max(limiteIzquierdo, posicionHorizontal - velocidad)
        if (recogiendoBasura) {
            garbageImage.style.left = posicionHorizontal + 'px'
        }
        personaje.style.left = posicionHorizontal + 'px'
        verificarColisionContenedor()
        await sleep(10)
    }
}

async function moverDerecha(velocidad) {

    while (direccionActual === 'ArrowRight') {
        const limiteDerecho = window.innerWidth - personaje.offsetWidth
        posicionHorizontal = Math.min(limiteDerecho, posicionHorizontal + velocidad)
        if (recogiendoBasura) {
            garbageImage.style.left = posicionHorizontal + 'px'
        }
        personaje.style.left = posicionHorizontal + 'px'
        verificarColisionContenedor()
        await sleep(10)
    }
}

async function moverArriba(velocidad) {
    const limiteSuperior = 0
    while (direccionActual === 'ArrowUp' && posicionVertical > limiteSuperior) {
        posicionVertical = Math.max(limiteSuperior, posicionVertical - velocidad)
        if (recogiendoBasura) {
            garbageImage.style.top = posicionVertical + 'px'
        }
        personaje.style.top = posicionVertical + 'px'
        verificarColisionContenedor()
        await sleep(10)
    }
}

async function moverAbajo(velocidad) {
    const limiteInferior = window.innerHeight / 2 
    while (direccionActual === 'ArrowDown' && posicionVertical < limiteInferior) {
        posicionVertical = Math.min(limiteInferior, posicionVertical + velocidad)
        if (recogiendoBasura) {
            garbageImage.style.top = posicionVertical + 'px'
        }
        personaje.style.top = posicionVertical + 'px'
        verificarColisionContenedor()
        await sleep(10)
    }
}

function verificarColisionContenedor() {
    if (recogiendoBasura) {
        const contenedores = [contenedorSuperiorIzquierda, contenedorSuperiorDerecha, contenedorInferiorIzquierda, contenedorInferiorDerecha];

        for (const garbageImage of garbageImages) {
            for (const contenedor of contenedores) {
                if (detectarColision(contenedor, garbageImage)) {
                    console.log("¡Has conseguido 10 puntos!");
                    resetearBasura(garbageImage);
                    eliminarBasura(garbageImage);
                    moverBasura();
                    puntos += 10;
                    console.log(`Puntos totales: ${puntos}`);
                }
            }
        }
    }
}

function eliminarBasura(garbageImage) {
    // Remueve la basura del DOM
    garbageImage.remove();

    // Elimina la basura del array de imágenes de basura
    const index = garbageImages.indexOf(garbageImage);
    if (index !== -1) {
        garbageImages.splice(index, 1);
    }
}



function detectarColision(contenedor) {
    const distanciaHorizontal = Math.abs(posicionHorizontal - contenedor.offsetLeft)
    const distanciaVertical = Math.abs(posicionVertical - contenedor.offsetTop)

    return (
        distanciaHorizontal < personaje.offsetWidth / 2 + contenedor.offsetWidth / 2 &&
        distanciaVertical < personaje.offsetHeight / 2 + contenedor.offsetHeight / 2
    )
}

function resetearBasura() {
    recogiendoBasura = false;

    // Asegurarse de que la basura aparezca solo entre el 15% a la izquierda y el 15% a la derecha
    const margenHorizontal = window.innerWidth * 0.15;
    const limiteHorizontalIzquierdo = margenHorizontal;
    const limiteHorizontalDerecho = window.innerWidth - garbageImage.offsetWidth - margenHorizontal;

    const nuevaPosicionHorizontal = Math.random() * (limiteHorizontalDerecho - limiteHorizontalIzquierdo) + limiteHorizontalIzquierdo;
    
    // Asegurarse de que la basura aparezca solo en la mitad inferior del navegador
    const limiteVerticalInferior = window.innerHeight - garbageImage.offsetHeight;
    const nuevaPosicionVertical = limiteVerticalInferior;

    garbageImage.style.left = nuevaPosicionHorizontal + 'px';
    garbageImage.style.top = nuevaPosicionVertical + 'px';
}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}


let moverBasuraInterval;
let garbageImages = []; // Array to store all garbage image elements

function moverBasura() {
    moverBasuraInterval = setInterval(() => {
        for (let i = 0; i < garbageImages.length; i++) {
            const garbageImage = garbageImages[i];
            console.log(garbageImage)
            if (!recogiendoBasura) {
                const currentPosition = parseInt(garbageImage.style.top);
                const halfScreen = window.innerHeight / 2 + 30;
                if (currentPosition > halfScreen) {
                    const newPosition = (currentPosition - 5) + 'px';
                    garbageImage.style.top = newPosition;

                    // Update the garbageImage's position in the garbageImages array
                    garbageImages[i].style.top = newPosition;
                } else {
                    clearInterval(moverBasuraInterval);
                }
            }
        }
    }, 100);
}




moverBasura();

setInterval(crearBasura, 5000);

function crearBasura() {
    const nuevaBasura = crearImagenBasura();
    garbageImages.push(nuevaBasura); // Add the new garbage image to the array
    moverBasura();
}

function crearImagenBasura() {
    const imagenBasura = document.createElement('img');
    imagenBasura.src = 'garbage.png';
    imagenBasura.classList.add('garbage-image');

    // Set the initial position of the new garbage image
    const margenHorizontal = window.innerWidth * 0.15;
    const limiteHorizontalIzquierdo = margenHorizontal;
    const limiteHorizontalDerecho = window.innerWidth - imagenBasura.offsetWidth - margenHorizontal;
    const nuevaPosicionHorizontal = Math.random() * (limiteHorizontalDerecho - limiteHorizontalIzquierdo) + limiteHorizontalIzquierdo;

    const limiteVerticalInferior = window.innerHeight - imagenBasura.offsetHeight;
    const nuevaPosicionVertical = limiteVerticalInferior;

    imagenBasura.style.left = nuevaPosicionHorizontal + 'px';
    imagenBasura.style.top = nuevaPosicionVertical + 'px';

    const vistaPrincipalJuego = document.getElementById('vista-principal-juego');
    vistaPrincipalJuego.appendChild(imagenBasura);
    

    return imagenBasura;
}

