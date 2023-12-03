// game.js

const personaje = document.getElementById('personaje');
const beachSection = document.getElementById('beach-section');
const garbageImage = document.getElementById('garbage-image');

const contenedorSuperiorIzquierda = document.getElementById('contenedor-superior-izquierda');
const contenedorSuperiorDerecha = document.getElementById('contenedor-superior-derecha');
const contenedorInferiorIzquierda = document.getElementById('contenedor-inferior-izquierda');
const contenedorInferiorDerecha = document.getElementById('contenedor-inferior-derecha');

let posicionHorizontal = window.innerWidth / 2;
let posicionVertical = window.innerHeight / 2;
let direccionActual = null;
let recogiendoBasura = false;
let puntos = 0;

personaje.style.left = posicionHorizontal + 'px';
personaje.style.top = posicionVertical + 'px';

document.addEventListener('keydown', async (e) => {
    const velocidad = 2;

    switch (e.key) {
        case 'ArrowLeft':
            if (direccionActual !== 'ArrowLeft') {
                direccionActual = 'ArrowLeft';
                await moverIzquierda(velocidad);
            }
            break;
        case 'ArrowRight':
            if (direccionActual !== 'ArrowRight') {
                direccionActual = 'ArrowRight';
                await moverDerecha(velocidad);
            }
            break;
        case 'ArrowUp':
            if (direccionActual !== 'ArrowUp') {
                direccionActual = 'ArrowUp';
                await moverArriba(velocidad);
            }
            break;
        case 'ArrowDown':
            if (direccionActual !== 'ArrowDown') {
                direccionActual = 'ArrowDown';
                await moverAbajo(velocidad);
            }
            break;
        case ' ':
            if (recogiendoBasura) {
                recogiendoBasura = false;
                garbageImage.style.left = posicionHorizontal + 'px';
                garbageImage.style.top = posicionVertical + 'px';
                puntos += 10;
                console.log(`¡Has conseguido 10 puntos! Puntos totales: ${puntos}`);
            } else {
                if (estaCercaDeBasura()) {
                    recogiendoBasura = true;
                }
            }
            break;
    }
});

function estaCercaDeBasura() {
    const distanciaMinima = 30;
    const distanciaHorizontal = Math.abs(posicionHorizontal - garbageImage.offsetLeft);
    const distanciaVertical = Math.abs(posicionVertical - garbageImage.offsetTop);

    // Verificar si el personaje está encima de la basura
    const encimaDeBasuraHorizontal = distanciaHorizontal < personaje.offsetWidth / 2 + garbageImage.offsetWidth / 2;
    const encimaDeBasuraVertical = distanciaVertical < personaje.offsetHeight / 2 + garbageImage.offsetHeight / 2;

    return encimaDeBasuraHorizontal && encimaDeBasuraVertical;
}

async function moverIzquierda(velocidad) {
    while (direccionActual === 'ArrowLeft') {
        posicionHorizontal = Math.max(0, posicionHorizontal - velocidad);
        if (recogiendoBasura) {
            garbageImage.style.left = posicionHorizontal + 'px';
        }
        personaje.style.left = posicionHorizontal + 'px';
        verificarColisionContenedor();
        await sleep(10);
    }
}

async function moverDerecha(velocidad) {
    while (direccionActual === 'ArrowRight') {
        const limiteDerecho = beachSection.offsetWidth - personaje.offsetWidth;
        posicionHorizontal = Math.min(limiteDerecho, posicionHorizontal + velocidad);
        if (recogiendoBasura) {
            garbageImage.style.left = posicionHorizontal + 'px';
        }
        personaje.style.left = posicionHorizontal + 'px';
        verificarColisionContenedor();
        await sleep(10);
    }
}

async function moverArriba(velocidad) {
    while (direccionActual === 'ArrowUp') {
        const limiteSuperior = window.innerHeight / 2 - 30;
        posicionVertical = Math.max(limiteSuperior, posicionVertical - velocidad);
        if (recogiendoBasura) {
            garbageImage.style.top = posicionVertical + 'px';
        }
        personaje.style.top = posicionVertical + 'px';
        verificarColisionContenedor();
        await sleep(10);
    }
}

async function moverAbajo(velocidad) {
    while (direccionActual === 'ArrowDown') {
        const limiteInferior = window.innerHeight - personaje.offsetHeight + 30;
        posicionVertical = Math.min(limiteInferior, posicionVertical + velocidad);
        if (recogiendoBasura) {
            garbageImage.style.top = posicionVertical + 'px';
        }
        personaje.style.top = posicionVertical + 'px';
        verificarColisionContenedor();
        await sleep(10);
    }
}

function verificarColisionContenedor() {
    if (recogiendoBasura) {
        if (
            detectarColision(contenedorSuperiorIzquierda) ||
            detectarColision(contenedorSuperiorDerecha) ||
            detectarColision(contenedorInferiorIzquierda) ||
            detectarColision(contenedorInferiorDerecha)
        ) {
            console.log("¡Has conseguido 10 puntos!");
            resetearBasura();
        }
    }
}

function detectarColision(contenedor) {
    const distanciaMinima = 30;
    const distanciaHorizontal = Math.abs(posicionHorizontal - contenedor.offsetLeft);
    const distanciaVertical = Math.abs(posicionVertical - contenedor.offsetTop);

    return (
        distanciaHorizontal < personaje.offsetWidth / 2 + contenedor.offsetWidth / 2 &&
        distanciaVertical < personaje.offsetHeight / 2 + contenedor.offsetHeight / 2
    );
}

function resetearBasura() {
    recogiendoBasura = false;
    const limiteHorizontal = window.innerWidth - garbageImage.offsetWidth;
    const limiteVertical = window.innerHeight - garbageImage.offsetHeight;

    const nuevaPosicionHorizontal = Math.random() * limiteHorizontal;
    const nuevaPosicionVertical = Math.random() * limiteVertical;

    garbageImage.style.left = nuevaPosicionHorizontal + 'px';
    garbageImage.style.top = nuevaPosicionVertical + 'px';
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
