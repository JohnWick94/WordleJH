let intentos = 6;
let palabra;
window.addEventListener('load', init);

function init() {
    console.log('Esto se ejecuta solo cuando se carga la página web');
    palabra = obtenerPalabraAleatoria();
    console.log(palabra); // Para propósitos de prueba, elimina esta línea en producción
}

const button = document.getElementById("guess-button");
button.addEventListener("click", intentar);

function intentar() {
    const INTENTO = leerIntento();
    console.log(INTENTO);

    for (let i in palabra) {
        // ... tu lógica existente para verificar la palabra adivinada
    }
    // ... tu lógica existente para manejar los resultados

    intentos--;
    if (intentos == 0) {
        console.log("PERDISTE!");
    }
}

function leerIntento() {
    let intento = document.getElementById("guess-input").value.toUpperCase();
    return intento;
}

function obtenerPalabraAleatoria() {
    let diccionario = ['APPLE', 'HURLS', 'WINGS', 'YOUTH'];
    return diccionario[Math.floor(Math.random() * diccionario.length)];
}

function terminar(mensaje) {
    const INPUT = document.getElementById("guess-input");
    const BOTON = document.getElementById("guess-button");
    INPUT.disabled = true;
    BOTON.disabled = true;
    let contenedor = document.getElementById('guesses');
    contenedor.innerHTML = mensaje;
}

const GRID = document.getElementById("grid");
const ROW1 = document.createElement('div');
ROW1.className = 'row';

// ... tu código existente para mostrar la palabra adivinada

GRID.appendChild(ROW1);



        

